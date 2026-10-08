@AGENTS.md

# thebrideclub — proyecto de tesis

## Con quién estás hablando

Este proyecto lo usa **Valen**, que **no programa ni sabe de sistemas**. Ella entra
al chat y pide cambios en lenguaje natural ("quiero que el título sea más grande",
"agregá una sección con las encuestas").

Reglas de comunicación:

- Contestale **siempre en castellano, en lenguaje común**. Nada de JSON, nombres de
  archivo, comandos ni jerga técnica salvo que ella lo pida.
- No le pidas que corra comandos ni que toque archivos. Vos hacés todo.
- No le preguntes decisiones técnicas ("¿SQLite o Postgres?"). Elegí vos la opción
  razonable y contale en una línea qué hiciste. Preguntale solo cosas de **contenido
  y diseño**, que son las que ella sí puede decidir.
- Después de cada cambio, decile **dónde mirarlo** y qué va a ver distinto. La URL
  que se le pasa es **https://dev.thebrideclub.com.ar** (nunca la del puerto
  3005: ese puerto viene filtrado desde afuera). Los cambios NO llegan solos a
  **https://thebrideclub.com.ar**, que es producción: se publican aparte, con un
  **pase a producción** (ver abajo). Lo pueden pedir Valen o Lautaro.

## Pase a producción

`develop` = **dev.thebrideclub.com.ar**, `main` = **thebrideclub.com.ar**. Cuando
Valen pide "pasar a producción" / "publicar" / "que se vea en la página de verdad",
**se hace y listo**: no le preguntes nada técnico ni le pidas confirmar pasos. Su
pedido ya autoriza commitear, mergear a `main` y pushear para este flujo. Al
terminar, decile en una línea que ya está en https://thebrideclub.com.ar.

1. Commitear lo pendiente en `develop` (commits temáticos, sin prefijo) y
   `git push origin develop`.
2. **Revisar cambios de base**: `git diff main develop -- src/lib/db.ts`. El
   `CREATE TABLE IF NOT EXISTS` no altera tablas existentes: cualquier columna
   nueva o renombrada se aplica a mano en `thebrideclub-prod-db` **antes** de levantar la
   imagen nueva.
3. Avanzar `main` sin tocar el working copy (el dev server corre de acá):
   `git fetch . develop:main && git push origin main`. Es fast-forward: `main` no
   tiene commits propios. Si alguna vez no lo es, parar y avisarle a Lautaro.
4. Buildear con el working copy limpio (HEAD == `main`, así el label no miente):
   `docker build --target runner -t thebrideclub-prod:<AAAA-MM-DD>-<sha corto> --label
   "org.opencontainers.image.revision=$(git rev-parse HEAD)" .`
5. Poner ese tag en `APP_VERSION` de `~/prod/thebrideclub/.env` y `docker compose up -d`
   en `~/prod/thebrideclub`. Anotar el tag anterior: el rollback es volver a ponerlo.
6. Verificar: las páginas en 200 en https://thebrideclub.com.ar, que el formulario
   guarde y que `/consultas` siga pidiendo clave.

## Qué es

Aplicación **monolítica de Next.js 16** (App Router, TypeScript, Tailwind v4). No hay
backend separado: todo vive acá. Si hace falta guardar datos, se agrega la base al
compose y se accede desde Server Components / Server Actions.

## Cómo se corre

Todo en Docker — en este server **no hay Node instalado**, así que ningún comando de
npm/next se corre en el host.

```bash
docker compose up -d --build     # levantar
docker compose logs -f web       # ver logs / errores
docker compose restart web       # reiniciar
docker compose down              # bajar
docker compose exec web npm run lint   # cualquier comando de npm va acá adentro
```

El dev server tiene hot reload: editar un archivo se refleja solo, no hace falta
reiniciar nada.

## Convenciones

- Seguir la skill `nextjs-conventions` (Server Components por default, Server Actions
  para mutaciones, estructura por módulo).
- Antes de escribir código de Next, leer la guía correspondiente en
  `node_modules/next/dist/docs/` — esta versión tiene cambios respecto a lo conocido.
- Commits **sin prefijo** tipo `feat:`/`fix:`.
- Nunca commitear ni pushear sin OK explícito, salvo en un pase a producción
  pedido por Valen (ver arriba).
