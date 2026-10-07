export interface Consulta {
  id: string;
  creada_en: Date;
  nombre: string;
  contacto: string;
  destino: string | null;
  nivel: string | null;
  personas: number | null;
  fecha_viaje: string | null;
  estilos: string[];
  mensaje: string | null;
  atendida: boolean;
}

export interface ConsultaNueva {
  nombre: string;
  contacto: string;
  destino: string | null;
  nivel: string | null;
  personas: number | null;
  fechaViaje: string | null;
  estilos: string[];
  mensaje: string | null;
}
