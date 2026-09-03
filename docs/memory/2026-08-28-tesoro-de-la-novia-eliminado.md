# El Tesoro de la Novia salió de la página

**Fecha:** 2026-08-28 · **Tags:** contenido, decisión, producto

## Qué se pidió

Eliminar la sección "El Tesoro de la Novia": un recorrido gastronómico por Villa La
Angostura, con cinco paradas y un desafío en cada una, presentado como "experiencia
insignia" de la agencia.

## Por qué

Se le había marcado a Valen que **no aparecía en el documento de la idea de negocio**
y que, estando atada a un solo destino, competía con el posicionamiento de viaje a
medida: alguien que quería Nueva York podía leer que la experiencia estrella no era
para ella. Decidió sacarla.

## Qué se tocó

- Borrados `TreasureHunt.tsx`, `TreasureStop.tsx` y `data/treasure-itinerary.ts`.
- Quitada la interfaz `ItineraryStop` de `types/travel.ts` (existía solo para esto).
- Quitada de `app/page.tsx`, entre `DestinationsSection` y `ServiceTiers`.
- **Copia completa + pasos para reponerla en `docs/removido-2026-08-28/`.**

## Gotchas

- **El repo no tiene ni un commit**: todo está sin versionar, así que un `rm` es
  definitivo. Por eso cualquier borrado va con copia previa a `docs/removido-<fecha>/`
  hasta que exista historia en git. Avisado a Valen; commitear es decisión de Lautaro.
- Los respaldos se guardan con **`.txt` al final** (`TreasureHunt.tsx.txt`): con la
  extensión original, `tsc --noEmit` los compila desde `docs/` y falla por los
  imports que ya no existen. Pasó y se corrigió.
- El ritmo de colores de la home siguió alternando solo al sacarla (destinos
  `blush-200` → niveles `cream`), así que no hubo que retocar fondos. La única
  sección oscura que queda es `Audience`.
