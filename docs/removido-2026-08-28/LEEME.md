# Contenido quitado el 2026-08-28

Valen pidió eliminar estas dos cosas de la página. Se guardan acá porque el repo
**no tiene ningún commit**: sin esta copia, borrarlas era definitivo.

Los archivos llevan `.txt` al final a propósito: con la extensión original,
TypeScript los compila desde acá y tira errores por los imports que ya no existen.

## El Tesoro de la Novia (sección completa)

- `TreasureHunt.tsx.txt` → volvía a `src/components/home/TreasureHunt.tsx`
- `TreasureStop.tsx.txt` → volvía a `src/components/home/TreasureStop.tsx`
- `treasure-itinerary.ts.txt` → volvía a `src/data/treasure-itinerary.ts`

Para reponerla hace falta además:

1. En `src/types/travel.ts`, volver a agregar la interfaz `ItineraryStop`
   (`id`, `moment`, `place`, `description`, `challenge`, todos `string`).
2. En `src/app/page.tsx`, importar `TreasureHunt` y ponerlo entre
   `<DestinationsSection />` y `<ServiceTiers />`.

## Tres destinos precotizados

- `destinos-punta-tulum-cartagena.ts.txt` → Punta del Este y José Ignacio, Tulum y
  Riviera Maya, y Cartagena de Indias. El bloque se pega en
  `src/data/destinations.ts`, antes de la entrada de Nueva York.

No hace falta tocar nada más: los contadores y los títulos ("Cinco destinos…", el
número del hero) se calculan solos a partir de los datos.
