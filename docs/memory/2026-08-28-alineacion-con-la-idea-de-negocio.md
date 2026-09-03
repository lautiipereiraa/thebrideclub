# La página alineada con el documento de la idea de negocio

**Fecha:** 2026-08-28 · **Tags:** contenido, posicionamiento, copy, producto

## Qué se pidió

Valen pasó el documento de la idea de negocio (agencia de experiencias grupales
para mujeres, arrancando por despedidas de soltera) para ajustar la página.

## Qué se encontró

Tres desalineaciones reales, no de redacción:

1. **La página vendía lo contrario al diferencial.** Decía "un solo paquete, un solo
   precio" y "paquetes cerrados"; el documento define el diferencial como lo opuesto
   a un paquete predefinido ("a diferencia de los paquetes turísticos tradicionales,
   donde el cliente se adapta a una oferta previamente definida"). Lo que sí va es
   **precio final cerrado sobre un itinerario a medida** — las dos cosas conviven.
2. **La app estaba reducida a la caja de pagos.** El documento la describe con
   itinerarios, detalles de alojamiento y actividades, recordatorios, **decisiones
   grupales** y pagos individuales, e **incluida en el presupuesto del viaje**.
3. **"Luxury" figuraba como estilo de viaje** y se pisaba con el nivel Signature.
   Los estilos del documento son gastronomía, bienestar, aventura, naturaleza y
   entretenimiento (≈ "Fiesta" en la página). Faltaban bienestar y naturaleza.

## Solución

- Reposicionado el bloque "Nuestra propuesta" (`PainPoint`), el `metadata` del
  layout y el texto del footer: viaje diseñado alrededor del grupo → después el
  precio final. Bullet nuevo "Itinerario a medida, no un paquete estándar".
- `GroupFundTeaser` → **`TravelApp`** (`src/components/home/TravelApp.tsx`, sección
  `#app`): las cinco funciones de la app, aclarando que va incluida y que la caja es
  la única parte demostrable hoy. La maqueta de la caja quedó como preview.
- Estilos de viaje: cinco (`fiesta`, `gastronomia`, `bienestar`, `aventura`,
  `naturaleza`), `TravelStyleId` actualizado y **reetiquetados los 5 destinos**.
  La grilla pasó de 4 a 3 columnas porque 5 tarjetas dejaban una huérfana.
- `Audience`: la expansión futura ahora nombra lunas de miel y experiencias
  individuales para la novia, como en el documento.
- `HowItWorks`: el paso 1 pide también "cómo es la novia" (el documento pone la
  personalidad de la protagonista como insumo del diseño).

## Gotchas

- `TravelStyleId` es una unión de literales y los destinos la referencian: agregar o
  quitar un estilo obliga a tocar `types/travel.ts`, `data/travel-styles.ts`
  (incluido el mapa `travelStyleNames`) y los `styles:` de cada destino. `tsc
  --noEmit` lo caza; el lint solo no.
- El **"Tesoro de la Novia"** no estaba en el documento de la idea y era específico
  de Villa La Angostura. Se le marcó a Valen y decidió eliminarlo el mismo día:
  ver [[2026-08-28-tesoro-de-la-novia-eliminado]].
- Los precios (USD 620 / 1200 / 2800) tampoco salen del documento: ya estaban en la
  página y no se tocaron.
