import type { TravelStyleId } from "@/types/travel";

/**
 * Los estilos quedaron como etiquetas descriptivas de cada destino. La seccion
 * que los listaba con descripcion propia fue reemplazada por `Experiences`;
 * el texto de aquellas descripciones esta en docs/removido-2026-09-12/.
 */
export const travelStyleNames: Record<TravelStyleId, string> = {
  fiesta: "Fiesta",
  gastronomia: "Gastronomía",
  bienestar: "Bienestar",
  aventura: "Aventura",
  naturaleza: "Naturaleza",
};
