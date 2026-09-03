import type { TravelStyle } from "@/types/travel";

export const travelStyles: TravelStyle[] = [
  {
    id: "fiesta",
    name: "Fiesta",
    description:
      "Beach clubs, rooftops y las mejores noches del destino, con entradas, mesas y traslados ya reservados.",
  },
  {
    id: "gastronomia",
    name: "Gastronomía",
    description:
      "Cenas en los restaurantes que hay que reservar con meses, catas privadas y desayunos largos.",
  },
  {
    id: "bienestar",
    name: "Bienestar",
    description:
      "Spa, masajes, yoga y días sin alarma, para el grupo que quiere volver descansado y no fundido.",
  },
  {
    id: "aventura",
    name: "Aventura",
    description:
      "Excursiones, deportes de agua y días afuera para el grupo que no quiere quedarse quieto.",
  },
  {
    id: "naturaleza",
    name: "Naturaleza",
    description:
      "Lagos, bosques, viñedos y playa: paisajes que valen el viaje aunque no se haga nada más.",
  },
];

export const travelStyleNames: Record<TravelStyle["id"], string> = {
  fiesta: "Fiesta",
  gastronomia: "Gastronomía",
  bienestar: "Bienestar",
  aventura: "Aventura",
  naturaleza: "Naturaleza",
};
