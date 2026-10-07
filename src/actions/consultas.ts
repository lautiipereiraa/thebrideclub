"use server";

import { revalidatePath } from "next/cache";
import { destinations } from "@/data/destinations";
import { serviceTiers } from "@/data/service-tiers";
import { travelStyleNames } from "@/data/travel-styles";
import { guardarConsulta } from "@/lib/consultas";
import type { ActionResult } from "@/types/api";

const LARGO = { nombre: 120, contacto: 160, mensaje: 2000, fecha: 20 };

const destinosValidos = new Set([...destinations.map((d) => d.id), "otro"]);
const nivelesValidos = new Set([...serviceTiers.map((t) => t.id), "no-se"]);
const estilosValidos = new Set(Object.keys(travelStyleNames));

function texto(formData: FormData, campo: string, max: number): string | null {
  const valor = formData.get(campo);
  if (typeof valor !== "string") return null;
  const limpio = valor.trim().slice(0, max);
  return limpio.length > 0 ? limpio : null;
}

/**
 * Las Server Actions se pueden invocar con un POST directo, sin pasar por el
 * formulario (lo advierte la doc de Next), asi que todo lo que llega se valida
 * aca y las listas cerradas se verifican contra los datos del sitio.
 */
export async function enviarConsulta(
  _anterior: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  const nombre = texto(formData, "name", LARGO.nombre);
  const contacto = texto(formData, "contact", LARGO.contacto);

  // Minimos para que el dato sirva: un contacto de un caracter no permite
  // responderle a nadie.
  if (!nombre || nombre.length < 2 || !contacto || contacto.length < 5) {
    return {
      data: null,
      message: "Necesitamos tu nombre y un WhatsApp o mail donde escribirte.",
      status: 422,
    };
  }

  const destino = texto(formData, "destination", 60);
  const nivel = texto(formData, "tier", 60);
  if ((destino && !destinosValidos.has(destino)) || (nivel && !nivelesValidos.has(nivel))) {
    return { data: null, message: "Revisá el destino y el nivel elegidos.", status: 422 };
  }

  const personasCrudo = Number(formData.get("people"));
  const personas =
    Number.isInteger(personasCrudo) && personasCrudo >= 2 && personasCrudo <= 40
      ? personasCrudo
      : null;

  const estilosElegidos = formData
    .getAll("estilos")
    .filter((valor): valor is string => typeof valor === "string")
    .filter((valor) => estilosValidos.has(valor));

  try {
    await guardarConsulta({
      nombre,
      contacto,
      destino,
      nivel,
      personas,
      fechaViaje: texto(formData, "date", LARGO.fecha),
      estilos: estilosElegidos,
      mensaje: texto(formData, "message", LARGO.mensaje),
    });
  } catch (error) {
    // Unico try/catch del flujo: es el borde donde algo externo (la base) puede
    // fallar. El detalle queda en el log del servidor, no en la pantalla.
    console.error("No se pudo guardar la consulta:", error);
    return {
      data: null,
      message:
        "No pudimos guardar tu consulta. Probá de nuevo o escribinos por WhatsApp.",
      status: 500,
    };
  }

  revalidatePath("/consultas");
  return { data: null, message: "Consulta recibida", status: 201 };
}
