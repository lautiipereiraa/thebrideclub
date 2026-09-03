# La URL de la tesis funciona escrita de las dos formas

**Fecha:** 2026-08-28 · **Tags:** traefik, tls, acceso, sslip.io

## Qué se pidió

Una amiga de Valen no podía entrar al sitio de la tesis.

## Qué se encontró

El sitio estaba sano: `valen-web` arriba, 200 por HTTPS y cert válido. El punto
ciego era el nombre: `sslip.io` acepta la IP escrita con guiones
(`tesis.148-113-167-40.sslip.io`) **y** con puntos
(`tesis.148.113.167.40.sslip.io`), pero el router de Traefik solo matcheaba la de
guiones. Con puntos, Traefik servía su cert self-signed por defecto → el navegador
muestra "la conexión no es privada" y no deja pasar. Escribir la IP con puntos es
lo que sale natural, así que es un error fácil de cometer.

## Solución

`docker-compose.yml`: la regla del router pasó a
`Host(PUBLIC_HOST) || Host(PUBLIC_HOST_ALT)`, con `PUBLIC_HOST_ALT` (forma con
puntos) en `.env` y también agregado a `EXTRA_DEV_ORIGINS`. Let's Encrypt reemitió
el cert con los dos nombres como SAN. Verificado: 200 y cert válido por ambas.

## Gotchas

- Si el usuario reporta "no me deja entrar", pedir **captura del mensaje**: el
  bloqueo por certificado y el "no carga" de red se ven parecidos para alguien no
  técnico, pero la causa es distinta.
- El puerto `3005` viene filtrado desde afuera de la red del server: nunca pasarlo
  como link. La única URL que se comparte es la de HTTPS.
- Traefik tarda ~10-15 s en emitir el cert de un nombre nuevo. Justo después del
  `up -d` la URL nueva falla; hay que reintentar antes de asumir que rompió.
