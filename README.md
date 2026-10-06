# valen

Proyecto de tesis. Next.js 16 monolítico (App Router + TypeScript + Tailwind v4),
corriendo en Docker.

## Levantar

```bash
cp .env.example .env   # ajustar BIND_HOST / WEB_PORT si hace falta
docker compose up -d --build
```

## Cómo se accede

- **https://dev.thebrideclub.com.ar** — este stack de desarrollo, la URL que se
  le pasa a Valen. Va por el Traefik compartido de `~/infra/proxy` (puerto 443,
  certificado de Let's Encrypt). DNS en Cloudflare, registro en gris.
- **https://thebrideclub.com.ar** — producción. No sale de acá: corre la imagen
  `runner` en el stack de `~/prod/valen` (ver su `docker-compose.yml` para
  buildear, promover y hacer rollback). Tiene su propia base de datos.
- `http://148.113.167.40:3005` — puerto publicado directo. **Desde afuera viene
  filtrado**: sirve para probar desde el propio server y nada más. Por eso existe
  la ruta por Traefik.

`BIND_HOST` controla ese segundo acceso: `127.0.0.1` solo desde el server,
`0.0.0.0` publicado (un puerto publicado por Docker no lo filtra el firewall del
host, pero sí algo más arriba en la red).

## Estructura

```
src/app/          páginas y layouts (App Router)
public/           imágenes y estáticos
Dockerfile        multi-stage: dev (hot reload) y runner (producción standalone)
docker-compose.yml
```

No hay Node en el host: todo comando de npm va dentro del contenedor
(`docker compose exec web npm ...`).
