# syntax=docker/dockerfile:1
# valen · Next.js 16 monolito — un solo Dockerfile multi-stage (dev + prod).
#   dev   → next dev (Fast Refresh / Turbopack); código y node_modules por mounts.
#   prod  → salida standalone de Next, runtime mínimo no-root.

ARG NODE_VERSION=22.13.1
ARG UID=1001
ARG GID=1001

FROM node:${NODE_VERSION}-alpine3.21 AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# deps — node_modules cacheado sobre el lockfile solo.
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci

# dev — hot reload. Sale de `deps` para que el volumen de node_modules nazca
# poblado y con el owner correcto. El código entra por bind mount.
# WATCHPACK_POLLING mantiene el HMR confiable sobre filesystems montados.
FROM deps AS dev
ARG UID
ARG GID
ENV NODE_ENV=development HOSTNAME=0.0.0.0 PORT=3000 WATCHPACK_POLLING=true
RUN addgroup -g "${GID}" -S app \
 && adduser -u "${UID}" -S app -G app \
 && chown -R app:app /app
USER app
EXPOSE 3000
CMD ["npm", "run", "dev"]

# builder — compila en modo standalone.
FROM base AS builder
ENV NEXT_OUTPUT=standalone
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# runner — imagen de producción: solo el server standalone + estáticos, no-root.
FROM node:${NODE_VERSION}-alpine3.21 AS runner
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 PORT=3000 HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
