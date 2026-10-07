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
  idealFor: string;
  styles: TravelStyleId[];
  attractions: string[];
  experiences: string[];
  hotels?: string[];
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
