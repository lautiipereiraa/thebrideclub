import type { ServiceTier } from "@/types/travel";

export const serviceTiers: ServiceTier[] = [
  {
    id: "esencial",
    name: "Esencial",
    positioning: "Lo importante resuelto: dónde dormir, cómo moverse y qué hacer.",
    fromPrice: 620,
    featured: false,
    includes: [
      "Alojamiento seleccionado para el grupo",
      "Todos los traslados, incluido aeropuerto",
      "Actividades principales del destino reservadas",
      "Itinerario día por día",
      "Asistencia al viajero",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    positioning: "El Esencial más la mesa reservada y alguien atrás de cada detalle.",
    fromPrice: 1200,
    featured: true,
    includes: [
      "Todo lo del nivel Esencial",
      "Gastronomía curada: cenas y reservas confirmadas",
      "Noche de fiesta con mesa y entradas incluidas",
      "Coordinadora asignada antes y durante el viaje",
      "Decoración de bienvenida en la habitación de la novia",
    ],
  },
  {
    id: "signature",
    name: "Signature",
    positioning: "El viaje entero producido. Ustedes solo aparecen.",
    fromPrice: 2800,
    featured: false,
    includes: [
      "Todo lo del nivel Premium",
      "Villa privada exclusiva para el grupo",
      "Día de barco privado",
      "Chef y bartender a domicilio",
      "Chofer disponible durante toda la estadía",
      "Fotógrafo y videógrafo profesional",
      "Dos coordinadoras y asistencia 24/7",
    ],
  },
];
