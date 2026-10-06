import type { Metadata } from "next";
import { CalendarDays, MessageSquare, Users } from "lucide-react";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { serviceTiers } from "@/data/service-tiers";
import { listarArrepentimientos } from "@/lib/arrepentimientos";
import { listarConsultas } from "@/lib/consultas";

export const metadata: Metadata = {
  title: "Consultas recibidas · The Bride Club",
  robots: { index: false, follow: false },
};

// Siempre recien leido de la base: si no, Next podria mostrar una lista vieja.
export const dynamic = "force-dynamic";

const nombreDestino = new Map(destinations.map((d) => [d.id, d.name]));
const nombreNivel = new Map(serviceTiers.map((t) => [t.id, t.name]));
const nombreExperiencia = new Map(experiences.map((e) => [e.id, e.name]));

const formatoFecha = new Intl.DateTimeFormat("es-AR", {
  dateStyle: "long",
  timeStyle: "short",
  timeZone: "America/Argentina/Buenos_Aires",
});

export default async function ConsultasPage() {
  const [consultas, arrepentimientos] = await Promise.all([
    listarConsultas(),
    listarArrepentimientos(),
  ]);

  return (
    <main className="flex-1 bg-tone-100">
      <section className="section">
        <div className="container-page max-w-4xl">
          <p className="eyebrow">Panel privado</p>
          <h1 className="title-xl mt-4 text-wine-deep">Consultas recibidas</h1>
          <p className="lead mt-5">
            {consultas.length === 0
              ? "Todavía no entró ninguna consulta por el formulario."
              : `${consultas.length} ${consultas.length === 1 ? "consulta" : "consultas"}, de la más nueva a la más vieja.`}
          </p>

          <ul className="mt-12 space-y-6">
            {consultas.map((consulta) => (
              <li
                key={consulta.id}
                className="rounded-2xl border border-tone-300 bg-tone-50 p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="font-display text-2xl font-medium text-wine-deep">
                    {consulta.nombre}
                  </h2>
                  <time
                    dateTime={consulta.creada_en.toISOString()}
                    className="text-xs uppercase tracking-[0.14em] text-muted"
                  >
                    {formatoFecha.format(consulta.creada_en)}
                  </time>
                </div>

                <p className="mt-2 text-sm font-medium text-ink">{consulta.contacto}</p>

                <dl className="mt-6 grid gap-4 border-t border-tone-300 pt-5 text-sm sm:grid-cols-3">
                  <div>
                    <dt className="small-caps text-accent">Destino</dt>
                    <dd className="mt-1.5 text-ink">
                      {consulta.destino === "otro"
                        ? "Otro (a cotizar)"
                        : (nombreDestino.get(consulta.destino ?? "") ?? "Sin elegir")}
                    </dd>
                  </div>
                  <div>
                    <dt className="small-caps text-accent">Nivel</dt>
                    <dd className="mt-1.5 text-ink">
                      {consulta.nivel === "no-se"
                        ? "Todavía no saben"
                        : (nombreNivel.get(consulta.nivel ?? "") ?? "Sin elegir")}
                    </dd>
                  </div>
                  <div>
                    <dt className="small-caps text-accent">Grupo y fecha</dt>
                    <dd className="mt-1.5 flex flex-col gap-1 text-ink">
                      <span className="flex items-center gap-1.5">
                        <Users size={13} strokeWidth={1.6} className="text-muted" />
                        {consulta.personas ? `${consulta.personas} personas` : "Sin indicar"}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CalendarDays size={13} strokeWidth={1.6} className="text-muted" />
                        {consulta.fecha_viaje ?? "Sin indicar"}
                      </span>
                    </dd>
                  </div>
                </dl>

                {consulta.experiencias.length > 0 ? (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {consulta.experiencias.map((id) => (
                      <li
                        key={id}
                        className="rounded-full bg-tone-200 px-3 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-wine-deep"
                      >
                        {nombreExperiencia.get(id) ?? id}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {consulta.mensaje ? (
                  <p className="mt-6 flex gap-3 border-t border-tone-300 pt-5 text-sm leading-relaxed text-muted">
                    <MessageSquare
                      size={16}
                      strokeWidth={1.6}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    {consulta.mensaje}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>

          {arrepentimientos.length > 0 ? (
            <div className="mt-20 border-t border-tone-300 pt-12">
              <p className="eyebrow">Atención prioritaria</p>
              <h2 className="title-lg mt-3 text-wine-deep">
                Pedidos de arrepentimiento
              </h2>
              <p className="lead mt-4 text-base">
                Hay que responderlos y devolver el dinero sin cargo. El plazo legal es
                de 10 días corridos desde la contratación.
              </p>

              <ul className="mt-8 space-y-5">
                {arrepentimientos.map((pedido) => (
                  <li
                    key={pedido.id}
                    className="rounded-2xl border border-wine/40 bg-tone-50 p-7"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-display text-xl font-medium text-wine-deep">
                        {pedido.nombre}
                      </h3>
                      <time
                        dateTime={pedido.creada_en.toISOString()}
                        className="text-xs uppercase tracking-[0.14em] text-muted"
                      >
                        {formatoFecha.format(pedido.creada_en)}
                      </time>
                    </div>
                    <p className="mt-2 text-sm font-medium text-ink">
                      {pedido.contacto}
                    </p>
                    {pedido.referencia ? (
                      <p className="mt-4 text-sm text-ink">
                        <span className="small-caps text-accent">Da de baja</span>
                        <span className="mt-1.5 block">{pedido.referencia}</span>
                      </p>
                    ) : null}
                    {pedido.motivo ? (
                      <p className="mt-4 border-t border-tone-300 pt-4 text-sm leading-relaxed text-muted">
                        {pedido.motivo}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
