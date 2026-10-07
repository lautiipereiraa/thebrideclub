import "server-only";
import { consultar } from "@/lib/db";
import type { Consulta, ConsultaNueva } from "@/types/consulta";

export async function guardarConsulta(consulta: ConsultaNueva): Promise<void> {
  await consultar(
    `INSERT INTO consultas
       (nombre, contacto, destino, nivel, personas, fecha_viaje, estilos, mensaje)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [
      consulta.nombre,
      consulta.contacto,
      consulta.destino,
      consulta.nivel,
      consulta.personas,
      consulta.fechaViaje,
      consulta.estilos,
      consulta.mensaje,
    ],
  );
}

export async function listarConsultas(): Promise<Consulta[]> {
  return consultar<Consulta & Record<string, unknown>>(
    `SELECT id, creada_en, nombre, contacto, destino, nivel, personas,
            fecha_viaje, estilos, mensaje, atendida
       FROM consultas
      ORDER BY creada_en DESC
      LIMIT 500`,
  );
}
