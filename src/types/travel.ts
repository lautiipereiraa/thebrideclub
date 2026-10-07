export type TravelStyleId =
  | "fiesta"
  | "gastronomia"
  | "bienestar"
  | "aventura"
  | "naturaleza";

/** Kit de bienvenida que recibe cada grupo, distinto según el destino. */
export interface WelcomeKit {
  photo: string;
  items: string;
}

/** Precio estimado por persona, en pesos, para cada categoría. */
export interface DestinationPrices {
  essential: number;
  signature: number;
}

/** El alojamiento es lo que más explica la diferencia entre las dos categorías. */
export interface DestinationHotels {
  essential: string;
  signature: string;
}

export interface Destination {
  id: string;
  name: string;
  photo: string;
  kit: WelcomeKit;
  region: string;
  productName: string;
  focus: string;
  why: string;
  nights?: number;
  prices: DestinationPrices;
  idealFor: string;
  styles: TravelStyleId[];
  attractions: string[];
  experiences: string[];
  hotels: DestinationHotels;
}

export interface ServiceTier {
  id: string;
  name: string;
  positioning: string;
  fromPrice: number;
  featured: boolean;
  includes: string[];
}

export interface AddOn {
  id: string;
  name: string;
  description: string;
}
