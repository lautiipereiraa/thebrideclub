# El rosa bajó un escalón (y por qué eso arrastra a `muted` y `accent`)

**Fecha:** 2026-08-28 · **Tags:** diseño, paleta, contraste, tailwind

## Qué se pidió

"Cambiar el rosa por uno más oscuro pero no tan oscuro."

## Qué se encontró

El pedido no se podía cumplir tocando solo los rosas. Con la paleta original,
`text-muted` (#75505b) sobre `bg-blush-200` daba **4.52** de contraste, con 4.5 como
mínimo legible para texto chico: ya estaba al límite. Cualquier oscurecimiento del
fondo lo volvía ilegible, y `accent` (#a86e7b) ya estaba **por debajo** (2.66 sobre
blush-200, 3.45 sobre cream) aunque se usa en los `small-caps` de 0.62rem.

## Solución

Rampa rosa un escalón más abajo, mismo tono (~348°) y un poco más de saturación para
que se lea "más rosa" y no "más gris". Se conserva el orden de luminosidad original
(blush-50 > cream > blush-100 > blush-200 > blush-300: las tarjetas siguen siendo más
claras que la página).

| token | antes | ahora |
|---|---|---|
| cream | `#f8e9ec` | `#eac8cf` |
| blush-50 | `#fcf3f5` | `#f0d6db` |
| blush-100 | `#f2dbe1` | `#e0b8c0` |
| blush-200 | `#ebc9d1` | `#d7a5af` |
| blush-300 | `#d8a5b1` | `#c48591` |
| muted | `#75505b` | `#593b43` |
| accent | `#a86e7b` | `#72404d` |

La familia `wine` y `ink` **no se tocaron**: son la marca. Peor contraste del
conjunto: **4.54** (`wine-soft` sobre `blush-200`), todo el resto por encima de 4.6.
Copia de la paleta anterior en `docs/removido-2026-08-28/globals.css.paleta-clara.txt`.

## Gotchas

- **El fondo más oscuro que lleva texto es `blush-200`** (secciones HowItWorks,
  AddOns, QuoteSection y el footer). Ese es el que manda: cualquier color de texto
  nuevo se valida contra él, no contra `cream`. `blush-300` solo se usa en líneas y
  bordes, no lleva texto.
- `accent` nunca cae sobre `blush-200`; su peor fondo real es `blush-100` (los
  íconos y el `small-caps` de `TravelApp`, que va sobre el gradiente). Se calibró
  contra ese, no contra el caso imposible.
- Los rosas también funcionan **como texto sobre `bg-wine`** (`text-blush-100`,
  `text-blush-200`): oscurecerlos baja ese contraste al mismo tiempo que sube el del
  texto oscuro. Hay que chequear las dos direcciones o se arregla una y se rompe la
  otra. Quedaron en 6.16 y 5.17.
- Con `@theme` de Tailwind v4 los tokens compilan a la hoja de estilos, **no** al
  HTML: para verificar un cambio de paleta hay que bajar el `.css` de
  `/_next/static/chunks/`, no grepear la página.
