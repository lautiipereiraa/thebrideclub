import Link from "next/link";
import { BellRing, CalendarDays, MapPin, PiggyBank, Vote } from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    name: "Itinerario día por día",
    description: "Cada actividad con horario, punto de encuentro y qué incluye.",
  },
  {
    icon: MapPin,
    name: "Alojamiento y traslados",
    description: "Dirección, horarios, vuelos y quién las pasa a buscar.",
  },
  {
    icon: Vote,
    name: "Decisiones del grupo",
    description: "Qué cena, qué excursión, qué noche: se vota y decide la mayoría.",
  },
  {
    icon: BellRing,
    name: "Recordatorios",
    description: "Avisos de las fechas importantes y del vencimiento de cada cuota.",
  },
  {
    icon: PiggyBank,
    name: "La caja del grupo",
    description: "Cada una paga su parte por separado y todas ven cuánto falta.",
  },
];

export function TravelApp() {
  return (
    <section id="app" className="section bg-tone-100">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl border border-tone-300 bg-tone-200">
          <div className="grid gap-10 p-10 sm:p-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow">Exclusivo de The Bride Club</p>
              <h2 className="title-lg mt-4 text-wine-deep">La app del viaje</h2>
              <p className="lead mt-6">
                Va incluida en el presupuesto, sin costo aparte. Cada amiga entra con
                su nombre y tiene el viaje entero en el teléfono: qué se hace cada día,
                dónde se duerme, qué se está votando y cuánto le falta pagar.
              </p>

              <ul className="mt-9 space-y-5">
                {features.map((feature) => (
                  <li key={feature.name} className="flex gap-4">
                    <feature.icon
                      size={20}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <div>
                      <p className="font-semibold text-wine">{feature.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link href="/caja" className="btn-primary mt-9">
                <PiggyBank size={18} strokeWidth={1.5} />
                Probar la caja del grupo
              </Link>
            </div>

            <div className="lg:pt-4">
              <p className="small-caps text-accent">Así se ve la caja</p>

              <div className="mt-5 rounded-2xl border border-tone-300 bg-tone-50 p-8 shadow-lg shadow-tone-300/40">
                <div className="flex items-baseline justify-between">
                  <p className="font-display text-2xl font-medium text-wine">
                    Las de Juli
                  </p>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                    Salta
                  </p>
                </div>

                <div className="mt-6">
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="text-muted">Juntado</span>
                    <span className="font-display text-2xl font-medium text-wine">
                      62%
                    </span>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-tone-200">
                    <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-wine-soft to-wine" />
                  </div>
                </div>

                <ul className="mt-7 space-y-3 text-sm">
                  {[
                    { name: "Juli", state: "Al día", done: true },
                    { name: "Caro", state: "Al día", done: true },
                    { name: "Flor", state: "Falta USD 480", done: false },
                    { name: "Mica", state: "Falta USD 950", done: false },
                  ].map((row) => (
                    <li
                      key={row.name}
                      className="flex items-center justify-between border-b border-tone-200 pb-3 last:border-0"
                    >
                      <span className="text-ink">{row.name}</span>
                      <span className={row.done ? "text-wine-soft" : "text-muted"}>
                        {row.state}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted">
                La caja es la parte de la app que ya podés probar acá. El resto lo ve
                cada grupo cuando su viaje está confirmado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
