"use server";

import { revalidatePath } from "next/cache";
import { guardarArrepentimiento } from "@/lib/arrepentimientos";
import type { ActionResult } from "@/types/api";

function texto(formData: FormData, campo: string, max: number): string | null {
  const valor = formData.get(campo);
  if (typeof valor !== "string") return null;
  const limpio = valor.trim().slice(0, max);
  return limpio.length > 0 ? limpio : null;
}

/**
 * Ejercicio del derecho de revocación (Ley 24.240 y Disposición 954/2025): tiene
 * que poder usarse sin registro previo ni ningún trámite adicional.
 */
export async function enviarArrepentimiento(
  _anterior: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  const nombre = texto(formData, "nombre", 120);
  const contacto = texto(formData, "contacto", 160);

  if (!nombre || nombre.length < 2 || !contacto || contacto.length < 5) {
    return {
      data: null,
      message: "Necesitamos tu nombre y un WhatsApp o mail para confirmarte la baja.",
      status: 422,
    };
  }

  try {
    await guardarArrepentimiento({
      nombre,
      contacto,
      referencia: texto(formData, "referencia", 200),
      motivo: texto(formData, "motivo", 2000),
    });
  } catch (error) {
    console.error("No se pudo registrar el arrepentimiento:", error);
    return {
      data: null,
      message:
        "No pudimos registrar tu pedido. Escribinos por WhatsApp y lo resolvemos igual.",
      status: 500,
    };
  }

  revalidatePath("/consultas");
  return { data: null, message: "Pedido registrado", status: 201 };
}
