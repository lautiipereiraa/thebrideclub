# Por qué el sitio se veía "apagado": todo pesaba 300

**Fecha:** 2026-08-28 · **Tags:** diseño, tipografía, contraste, tailwind

## Qué se pidió

Valen quería poner cosas en negrita porque sentía que algunas no se veían bien,
sin poder señalar cuáles.

## Qué se encontró

No había **nada** en negrita en todo el sitio. `body` estaba en `font-weight: 300`
(el peso más liviano de Jost) y los `h1..h4` también, así que no existía jerarquía
por peso: título, dato y texto de relleno pesaban igual. Encima, el texto claro
sobre el fondo vino venía con opacidad (`text-blush-100/60` a `/85`): peso liviano
+ opacidad + fondo oscuro es la peor combinación posible para leer, sobre todo en
`text-sm` y en los micro-labels en mayúscula con `tracking` ancho.

## Solución

- `globals.css`: cuerpo de 300 → **400**. Los títulos display siguen en 300 a
  propósito: en tamaño grande el serif fino es el look, el problema era el cuerpo.
- `.eyebrow`, `.eyebrow-light`, `.small-caps`: `font-normal` → `font-medium` y sin
  opacidad. En mayúscula y con tracking ancho, el peso liviano se desarma.
- Todas las `text-blush-100/NN` y `text-ink/80` pasaron a color pleno.
- Anclas de lectura en `font-semibold` (títulos de cada problema y de cada paso) y
  datos en `font-medium` (precios, el %, los totales de la caja, nombre de cada amiga).
- `layout.tsx`: Jost necesitaba el peso **600** en la lista de `weight` para que
  `font-semibold` renderice; si no, el navegador lo simula y queda sucio.

## Gotchas

- Con `next/font`, un peso que no está en `weight: [...]` **no se descarga**: la
  clase de Tailwind se aplica igual y el resultado es una negrita falsa (synthetic
  bold). Al agregar `font-semibold`/`font-bold` hay que sumar el peso en `layout.tsx`.
- El diseño es deliberadamente delicado (Cormorant + Jost, paleta rosa/vino). Al
  marcar más, subir **un** escalón por vez: el salto de 300 a 700 rompe el estilo.
- Verificado con `docker compose exec -T web npm run lint` y las dos páginas en 200.
