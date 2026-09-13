"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import type { GroupFund } from "@/types/fund";

interface FundSetupFormProps {
  onCreate: (fund: GroupFund) => void;
}

export function FundSetupForm({ onCreate }: FundSetupFormProps) {
  const [names, setNames] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const members = names
      .split(/[\n,]/)
      .map((name) => name.trim())
      .filter(Boolean)
      .map((name) => ({ id: crypto.randomUUID(), name, paid: 0 }));

    onCreate({
      groupName: String(data.get("groupName") ?? "").trim(),
      destination: String(data.get("destination") ?? "").trim(),
      travelDate: String(data.get("travelDate") ?? ""),
      totalPerPerson: Number(data.get("totalPerPerson") ?? 0),
      members,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-tone-300 bg-tone-50 p-8 sm:p-12"
    >
      <h2 className="font-display text-3xl text-wine-deep">
        Armemos la caja del grupo
      </h2>
      <p className="lead mt-3 text-base">
        Cargá los datos del viaje una sola vez. Después cada amiga suma lo que va
        pagando y todas ven cómo avanza.
      </p>

      <div className="mt-9 grid gap-6 sm:grid-cols-2">
        <div>
          <label className="label-base" htmlFor="fund-group">
            Nombre del grupo
          </label>
          <input
            id="fund-group"
            name="groupName"
            required
            className="input-base"
            placeholder="Las de Juli"
          />
        </div>

        <div>
          <label className="label-base" htmlFor="fund-destination">
            Destino
          </label>
          <input
            id="fund-destination"
            name="destination"
            required
            className="input-base"
            placeholder="Cartagena, Colombia"
          />
        </div>

        <div>
          <label className="label-base" htmlFor="fund-date">
            Fecha del viaje
          </label>
          <input
            id="fund-date"
            name="travelDate"
            type="date"
            required
            className="input-base"
          />
        </div>

        <div>
          <label className="label-base" htmlFor="fund-total">
            Cuánto sale por persona (USD)
          </label>
          <input
            id="fund-total"
            name="totalPerPerson"
            type="number"
            min={1}
            required
            className="input-base"
            placeholder="1450"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="label-base" htmlFor="fund-members">
          Las amigas
        </label>
        <textarea
          id="fund-members"
          rows={4}
          value={names}
          onChange={(event) => setNames(event.target.value)}
          className="input-base resize-none"
          placeholder="Un nombre por línea: Juli, Caro, Flor, Mica..."
        />
        <p className="mt-2 text-xs text-muted">
          Escribí un nombre por línea o separados por comas. Después podés agregar más.
        </p>
      </div>

      <button type="submit" className="btn-primary mt-9 w-full sm:w-auto">
        <Sparkles size={16} strokeWidth={1.5} />
        Crear la caja
      </button>
    </form>
  );
}
