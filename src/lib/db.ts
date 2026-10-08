import "server-only";
import { Pool } from "pg";

/**
 * En desarrollo Next recarga los modulos en caliente. Sin guardar el pool en el
 * objeto global, cada recarga abriria uno nuevo y la base se quedaria sin
 * conexiones libres.
 */
const globalParaPool = globalThis as typeof globalThis & { poolTheBrideClub?: Pool };

function obtenerPool(): Pool {
  if (!globalParaPool.poolTheBrideClub) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("Falta la variable DATABASE_URL");
    }
    globalParaPool.poolTheBrideClub = new Pool({ connectionString, max: 5 });
  }
  return globalParaPool.poolTheBrideClub;
}

let esquemaListo: Promise<void> | undefined;

/**
 * Crea la tabla la primera vez que se usa. El proyecto no tiene herramienta de
 * migraciones y es una sola tabla: alcanza con esto y evita un paso manual de
 * deploy que haya que recordar.
 */
function asegurarEsquema(): Promise<void> {
  if (!esquemaListo) {
    esquemaListo = obtenerPool()
      .query(
        `CREATE TABLE IF NOT EXISTS consultas (
           id            bigserial PRIMARY KEY,
           creada_en     timestamptz NOT NULL DEFAULT now(),
           nombre        text        NOT NULL,
           contacto      text        NOT NULL,
           destino       text,
           nivel         text,
           personas      integer,
           fecha_viaje   text,
           estilos       text[]      NOT NULL DEFAULT '{}',
           mensaje       text,
           atendida      boolean     NOT NULL DEFAULT false
         )`,
      )
      .then(() =>
        obtenerPool().query(
          `CREATE TABLE IF NOT EXISTS arrepentimientos (
             id          bigserial PRIMARY KEY,
             creada_en   timestamptz NOT NULL DEFAULT now(),
             nombre      text        NOT NULL,
             contacto    text        NOT NULL,
             referencia  text,
             motivo      text,
             atendida    boolean     NOT NULL DEFAULT false
           )`,
        ),
      )
      .then(() => undefined)
      .catch((error) => {
        esquemaListo = undefined;
        throw error;
      });
  }
  return esquemaListo;
}

export async function consultar<T extends Record<string, unknown>>(
  sql: string,
  valores: unknown[] = [],
): Promise<T[]> {
  await asegurarEsquema();
  const resultado = await obtenerPool().query<T>(sql, valores);
  return resultado.rows;
}
