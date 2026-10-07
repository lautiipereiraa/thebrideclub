import type { ServiceTier } from "@/types/travel";

export const serviceTiers: ServiceTier[] = [
  {
    id: "essential",
    name: "Essential",
    positioning: "Lo importante resuelto: dónde dormir, cómo moverse y qué hacer.",
    fromPrice: 1387500,
    featured: false,
    includes: [
      "Alojamiento seleccionado para el grupo",
      "Todos los traslados, incluido aeropuerto",
      "Actividades principales del destino reservadas",
      "Itinerario día por día en la app",
      "Kit de bienvenida del destino",
      "Asistencia al viajero",
    ],
  },
  {
    id: "signature",
    name: "Signature",
    positioning: "El viaje entero producido. Ustedes solo aparecen.",
    fromPrice: 2543750,
    featured: true,
    includes: [
      "Todo lo del nivel Essential",
      "Villa privada exclusiva para el grupo",
      "Gastronomía curada: cenas y reservas confirmadas",
      "Noche de fiesta con mesa y entradas incluidas",
      "Chef y bartender a domicilio",
      "Chofer disponible durante toda la estadía",
      "Fotógrafo y videógrafo profesional",
      "Decoración de bienvenida en la habitación de la novia",
      "Coordinadora asignada y asistencia 24/7",
    ],
  },
];
