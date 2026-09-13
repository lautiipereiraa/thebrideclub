import type { Experience } from "@/types/travel";

export const experiences: Experience[] = [
  {
    id: "beach",
    name: "Beach Escape",
    photo: "/fotos/exp-playa.jpg",
    promise: "Playa, sol y noches frente al mar.",
    destinationIds: ["carilo", "buzios"],
    duration: "3 a 5 noches",
    stay: "Casa privada o boutique cerca del agua",
    doing: [
      "Beach club con reserva y mesa",
      "Paseo en barco privado",
      "Cena frente al mar",
    ],
    bride: "La que quiere sol, tragos y despertarse sin alarma.",
  },
  {
    id: "wine",
    name: "Wine Experience",
    photo: "/fotos/exp-vinos.jpg",
    promise: "Bodegas, sobremesas largas y paisaje.",
    destinationIds: ["salta"],
    duration: "3 noches",
    stay: "Hotel boutique entre viñedos",
    doing: [
      "Degustación privada en bodega",
      "Almuerzo entre viñedos",
      "Cena especial de despedida",
    ],
    bride: "La que celebra con una copa en la mano y buena charla.",
  },
  {
    id: "wellness",
    name: "Wellness Retreat",
    photo: "/fotos/exp-bienestar.jpg",
    promise: "Spa, descanso y tiempo entre amigas.",
    destinationIds: ["patagonia"],
    duration: "3 a 4 noches",
    stay: "Casa de montaña con spa",
    doing: [
      "Circuito de spa y masajes",
      "Chef privado en la casa",
      "Navegación y trekking suave",
    ],
    bride: "La que quiere volver descansada, no fundida.",
  },
  {
    id: "city",
    name: "City Girls Trip",
    photo: "/fotos/exp-ciudad.jpg",
    promise: "Compras, restaurantes y noches de ciudad.",
    destinationIds: ["nueva-york"],
    duration: "5 a 7 noches",
    stay: "Hotel en zona estratégica",
    doing: [
      "Shopping personalizado",
      "Espectáculo y rooftops",
      "Sesión de fotos del grupo",
    ],
    bride: "La que sueña con una película de amigas en la ciudad.",
  },
];
