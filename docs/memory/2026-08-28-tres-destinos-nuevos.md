# La grilla queda en cinco destinos (y los contadores ya no se escriben a mano)

**Fecha:** 2026-08-28 · **Tags:** contenido, destinos, datos

## Qué se pidió

Sumar destinos precotizados a los cinco existentes. Se agregaron tres (Punta del
Este y José Ignacio, Tulum y Riviera Maya, Cartagena de Indias) y **en el mismo día
Valen pidió quitarlos**: la grilla vuelve a ser Salta y Cafayate, Villa La Angostura,
Cariló, Búzios y Nueva York. Esos cinco son los que ella considera precotizados.

## Qué quedó, más allá del alta y baja

- **Ningún número se escribe a mano.** `Hero` usa `destinations.length` y
  `serviceTiers.length`; los títulos de `DestinationsSection` y `TravelStyles` se
  arman con `spellOut()` + `capitalize()` (nuevos en `src/lib/format.ts`). Antes
  decían "Cinco destinos" fijo y se contradecían al tocar los datos.
- **El texto de los tres destinos está guardado**, no perdido:
  `docs/removido-2026-08-28/` (ver el `LEEME.md` de esa carpeta).
- Salta pasó a llamarse **"Salta y Cafayate"**, como la nombra Valen, con la región
  como "Valles Calchaquíes".

## Gotchas

- **`spellOut` devuelve minúscula**: al abrir un título hay que pasarlo por
  `capitalize()`, si no el `<h2>` arranca en minúscula. Ya pasó una vez.
- El mapa `numberWords` llega hasta **doce**; arriba de eso cae al dígito.
- **Descartado a propósito: Mendoza.** El documento de la idea posiciona a Salta
  explícitamente en contra ("ya está muy posicionado"), así que no puede figurar ni
  como ejemplo. También se sacó Punta Cana: el todo-incluido de resort choca con el
  posicionamiento a medida. Los dos estaban en el recuadro de "¿el destino que
  quieren no está acá?", que ahora no nombra destinos.
- `nights` es opcional y solo Salta lo tiene entre los cinco: la chapita de duración
  aparece en una ficha sola. Pendiente de que Valen defina las noches de los otros
  cuatro.
- **Antes de proponerle sumar contenido, tener en cuenta que tiende a acotar.**
  Pidió tres destinos de cuatro propuestos y al verlos los quitó todos.
