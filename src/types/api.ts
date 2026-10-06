/**
 * Contrato unico de respuesta entre el servidor y el cliente (ver skill
 * `backend-patterns`). `status` es el codigo HTTP equivalente, para que el
 * cliente decida con la misma regla en todos lados.
 */
export type ActionResult<T = null> = {
  data: T | null;
  message: string;
  status: number;
};

export function esExitoso(resultado: ActionResult<unknown>): boolean {
  return resultado.status >= 200 && resultado.status < 300;
}
