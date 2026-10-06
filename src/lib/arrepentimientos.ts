import "server-only";
import { consultar } from "@/lib/db";
import type { Arrepentimiento } from "@/types/arrepentimiento";

export async function guardarArrepentimiento(datos: {
  nombre: string;
  contacto: string;
  referencia: string | null;
  motivo: string | null;
}): Promise<void> {
  await consultar(
    `INSERT INTO arrepentimientos (nombre, contacto, referencia, motivo)
     VALUES ($1, $2, $3, $4)`,
    [datos.nombre, datos.contacto, datos.referencia, datos.motivo],
  );
}

export async function listarArrepentimientos(): Promise<Arrepentimiento[]> {
  return consultar<Arrepentimiento & Record<string, unknown>>(
    `SELECT id, creada_en, nombre, contacto, referencia, motivo, atendida
       FROM arrepentimientos
      ORDER BY creada_en DESC
      LIMIT 200`,
  );
}
