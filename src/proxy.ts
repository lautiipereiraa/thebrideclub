import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * En Next 16 el middleware se llama `proxy`. Protege /consultas con usuario y
 * clave: ahi se ven datos de contacto de personas reales, asi que no puede
 * quedar abierto a cualquiera que adivine la direccion.
 */
function credencialesValidas(header: string | null): boolean {
  const usuario = process.env.CONSULTAS_USER;
  const clave = process.env.CONSULTAS_PASSWORD;
  if (!usuario || !clave) return false;
  if (!header?.startsWith("Basic ")) return false;

  const esperado = `Basic ${btoa(`${usuario}:${clave}`)}`;
  if (header.length !== esperado.length) return false;

  // Comparacion de largo fijo: no corta en la primera diferencia, para no
  // filtrar cuantos caracteres acerto quien pruebe claves a repeticion.
  let diferencia = 0;
  for (let i = 0; i < esperado.length; i += 1) {
    diferencia |= header.charCodeAt(i) ^ esperado.charCodeAt(i);
  }
  return diferencia === 0;
}

export function proxy(request: NextRequest) {
  if (credencialesValidas(request.headers.get("authorization"))) {
    return NextResponse.next();
  }

  return new NextResponse("Necesitás usuario y clave para entrar.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="The Bride Club", charset="UTF-8"',
    },
  });
}

export const config = {
  matcher: "/consultas/:path*",
};
