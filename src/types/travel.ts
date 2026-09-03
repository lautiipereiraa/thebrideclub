export type TravelStyleId =
  | "fiesta"
  | "gastronomia"
  | "bienestar"
  | "aventura"
  | "naturaleza";

export interface TravelStyle {
  id: TravelStyleId;
  name: string;
  description: string;
}

export interface Destination {
  id: string;
  name: string;
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
  gradient: string;
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
