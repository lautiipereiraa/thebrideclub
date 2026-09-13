"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";
import { destinations } from "@/data/destinations";
import { serviceTiers } from "@/data/service-tiers";
import { experiences } from "@/data/experiences";

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [chosen, setChosen] = useState<string[]>([]);

  function toggleExperience(id: string) {
    setChosen((current) =>
      current.includes(id)
        ? current.filter((value) => value !== id)
        : [...current, id],
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
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
          onClick={() => setSent(false)}
          className="btn-outline mt-8"
        >
          Cargar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
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
        <p className="label-base">Tipo de experiencia</p>
        <div className="flex flex-wrap gap-3">
          {experiences.map((experience) => {
            const active = chosen.includes(experience.id);
            return (
              <button
                key={experience.id}
                type="button"
                onClick={() => toggleExperience(experience.id)}
                className={`rounded-full border px-5 py-2 text-sm transition-all duration-200 ${
                  active
                    ? "border-wine bg-wine text-tone-50"
                    : "border-tone-400 text-muted hover:border-wine/40 hover:text-wine"
                }`}
              >
                {experience.name}
              </button>
            );
          })}
        </div>
      </div>

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

      <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
        <Send size={16} strokeWidth={1.5} />
        Crear mi despedida
      </button>

      <p className="mt-4 text-xs text-muted">
        Te respondemos dentro de las 24 horas hábiles. Sin compromiso.
      </p>
    </form>
  );
}
