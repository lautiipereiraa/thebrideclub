"use client";

import { useActionState, useState } from "react";
import { AlertCircle, Check, Send } from "lucide-react";
import Link from "next/link";
import { enviarConsulta } from "@/actions/consultas";
import { esExitoso } from "@/types/api";
import { destinations } from "@/data/destinations";
import { serviceTiers } from "@/data/service-tiers";
import { travelStyleOptions } from "@/data/travel-styles";

export function QuoteForm() {
  const [resultado, accion, enviando] = useActionState(enviarConsulta, null);
  const [chosen, setChosen] = useState<string[]>([]);
  const enviada = resultado !== null && esExitoso(resultado);
  const error = resultado !== null && !esExitoso(resultado) ? resultado.message : null;

  function toggleEstilo(id: string) {
    setChosen((current) =>
      current.includes(id)
        ? current.filter((value) => value !== id)
        : [...current, id],
    );
  }

  if (enviada) {
    return (
      <div className="rounded-2xl border border-tone-300 bg-tone-50 p-12 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-tone-200 text-wine-deep">
          <Check size={26} strokeWidth={1.5} />
        </span>
        <h3 className="mt-6 font-display text-3xl text-wine-deep">
          ¡Listo! Recibimos tu consulta
        </h3>
        <p className="lead mx-auto mt-4 max-w-md text-base">
          Una coordinadora te va a escribir dentro de las próximas 24 horas con una
          propuesta armada para tu grupo.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="btn-outline mt-8"
        >
          Cargar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form
      action={accion}
      className="rounded-2xl border border-tone-300 bg-tone-50 p-8 sm:p-12"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="label-base" htmlFor="quote-name">
            Tu nombre
          </label>
          <input
            id="quote-name"
            name="name"
            required
            className="input-base"
            placeholder="Cómo te llamás"
          />
        </div>

        <div>
          <label className="label-base" htmlFor="quote-contact">
            WhatsApp o mail
          </label>
          <input
            id="quote-contact"
            name="contact"
            required
            className="input-base"
            placeholder="Por dónde te escribimos"
          />
        </div>

        <div>
          <label className="label-base" htmlFor="quote-destination">
            Destino
          </label>
          <select
            id="quote-destination"
            name="destination"
            required
            defaultValue=""
            className="input-base"
          >
            <option value="" disabled>
              Elegí un destino
            </option>
            {destinations.map((destination) => (
              <option key={destination.id} value={destination.id}>
                {destination.name} · {destination.productName}
              </option>
            ))}
            <option value="otro">Otro destino (lo cotizamos)</option>
          </select>
        </div>

        <div>
          <label className="label-base" htmlFor="quote-tier">
            Nivel de servicio
          </label>
          <select
            id="quote-tier"
            name="tier"
            required
            defaultValue=""
            className="input-base"
          >
            <option value="" disabled>
              Elegí un nivel
            </option>
            {serviceTiers.map((tier) => (
              <option key={tier.id} value={tier.id}>
                {tier.name}
              </option>
            ))}
            <option value="no-se">Todavía no sabemos</option>
          </select>
        </div>

        <div>
          <label className="label-base" htmlFor="quote-people">
            Cuántas son
          </label>
          <input
            id="quote-people"
            name="people"
            type="number"
            min={2}
            max={40}
            required
            className="input-base"
            placeholder="Ej: 10"
          />
        </div>

        <div>
          <label className="label-base" htmlFor="quote-date">
            Fecha aproximada
          </label>
          <input
            id="quote-date"
            name="date"
            type="month"
            required
            className="input-base"
          />
        </div>
      </div>

      <div className="mt-8">
        <p className="label-base">Estilo del viaje</p>
        <div className="flex flex-wrap gap-3">
          {travelStyleOptions.map((estilo) => {
            const active = chosen.includes(estilo.id);
            return (
              <button
                key={estilo.id}
                type="button"
                onClick={() => toggleEstilo(estilo.id)}
                className={`rounded-full border px-5 py-2 text-sm transition-all duration-200 ${
                  active
                    ? "border-wine bg-wine text-tone-50"
                    : "border-tone-400 text-muted hover:border-wine/40 hover:text-wine"
                }`}
              >
                {estilo.name}
              </button>
            );
          })}
        </div>
      </div>

      {chosen.map((id) => (
        <input key={id} type="hidden" name="estilos" value={id} />
      ))}

      <div className="mt-8">
        <label className="label-base" htmlFor="quote-message">
          Contanos un poco más
        </label>
        <textarea
          id="quote-message"
          name="message"
          rows={4}
          className="input-base resize-none"
          placeholder="Presupuesto por persona, si la novia sabe o es sorpresa, cosas que no pueden faltar..."
        />
      </div>

      {error ? (
        <p
          role="alert"
          className="mt-8 flex items-start gap-3 rounded-xl border border-wine/30 bg-tone-200 px-4 py-3 text-sm text-wine-deep"
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
        {enviando ? "Enviando..." : "Crear mi despedida"}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        Te respondemos dentro de las 24 horas hábiles. Sin compromiso. Usamos tus
        datos solo para responderte y armar la propuesta; podés pedirnos que los
        borremos cuando quieras. Ver la{" "}
        <Link href="/privacidad" className="underline underline-offset-2 hover:text-wine">
          política de privacidad
        </Link>
        .
      </p>
    </form>
  );
}
