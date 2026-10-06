"use client";

import { useActionState } from "react";
import { AlertCircle, Check, Send } from "lucide-react";
import { enviarArrepentimiento } from "@/actions/arrepentimientos";
import { esExitoso } from "@/types/api";

export function ArrepentimientoForm() {
  const [resultado, accion, enviando] = useActionState(enviarArrepentimiento, null);
  const enviado = resultado !== null && esExitoso(resultado);
  const error = resultado !== null && !esExitoso(resultado) ? resultado.message : null;

  if (enviado) {
    return (
      <div className="rounded-2xl border border-tone-300 bg-tone-50 p-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-tone-200 text-wine">
          <Check size={26} strokeWidth={1.5} />
        </span>
        <h2 className="mt-6 font-display text-2xl text-wine-deep">
          Listo, registramos tu pedido
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Te vamos a confirmar la baja y la devolución por el contacto que dejaste,
          dentro de las 72 horas hábiles. No tenés que hacer ningún otro trámite.
        </p>
      </div>
    );
  }

  return (
    <form
      action={accion}
      className="rounded-2xl border border-tone-300 bg-tone-50 p-8 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="label-base" htmlFor="arr-nombre">
            Tu nombre
          </label>
          <input id="arr-nombre" name="nombre" required className="input-base" />
        </div>
        <div>
          <label className="label-base" htmlFor="arr-contacto">
            WhatsApp o mail
          </label>
          <input id="arr-contacto" name="contacto" required className="input-base" />
        </div>
      </div>

      <div className="mt-6">
        <label className="label-base" htmlFor="arr-referencia">
          Qué contratación querés dar de baja
        </label>
        <input
          id="arr-referencia"
          name="referencia"
          className="input-base"
          placeholder="Destino y fecha del viaje, o el número de propuesta"
        />
      </div>

      <div className="mt-6">
        <label className="label-base" htmlFor="arr-motivo">
          Querés contarnos por qué (opcional)
        </label>
        <textarea
          id="arr-motivo"
          name="motivo"
          rows={3}
          className="input-base resize-none"
          placeholder="No hace falta que expliques nada, pero nos sirve para mejorar."
        />
      </div>

      {error ? (
        <p
          role="alert"
          className="mt-7 flex items-start gap-3 rounded-xl border border-wine/30 bg-tone-200 px-4 py-3 text-sm text-wine-deep"
        >
          <AlertCircle size={18} strokeWidth={1.6} className="mt-0.5 shrink-0" />
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={enviando}
        className="btn-primary mt-8 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        <Send size={16} strokeWidth={1.5} />
        {enviando ? "Enviando..." : "Enviar mi arrepentimiento"}
      </button>
    </form>
  );
}
