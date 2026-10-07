import type { TravelStyleId } from "@/types/travel";

/**
 * Los estilos son las etiquetas que lleva cada destino y las opciones del
 * formulario de cotizacion. No tienen seccion propia: el texto de las
 * descripciones que tenian esta en docs/removido-2026-09-12/.
 */
export const travelStyleNames: Record<TravelStyleId, string> = {
  fiesta: "Fiesta",
  gastronomia: "Gastronomía",
  bienestar: "Bienestar",
  aventura: "Aventura",
  naturaleza: "Naturaleza",
};

/** Los mismos estilos como lista, para los chips del formulario. */
export const travelStyleOptions = (
  Object.keys(travelStyleNames) as TravelStyleId[]
).map((id) => ({ id, name: travelStyleNames[id] }));
