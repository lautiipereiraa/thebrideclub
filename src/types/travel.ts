export type TravelStyleId =
  | "fiesta"
  | "gastronomia"
  | "bienestar"
  | "aventura"
  | "naturaleza";

export interface Destination {
  id: string;
  name: string;
  photo: string;
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

export type DestinationId = string;

export interface Experience {
  id: string;
  name: string;
  photo: string;
  promise: string;
  destinationIds: DestinationId[];
  duration: string;
  stay: string;
  doing: string[];
  bride: string;
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
