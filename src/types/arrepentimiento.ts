export interface Arrepentimiento {
  id: string;
  creada_en: Date;
  nombre: string;
  contacto: string;
  referencia: string | null;
  motivo: string | null;
  atendida: boolean;
}
