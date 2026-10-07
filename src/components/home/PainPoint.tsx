import { Reveal } from "@/components/ui/Reveal";
import { CreditCard, MessageSquareX, Wallet } from "lucide-react";

const problems = [
  {
    icon: Wallet,
    title: "Siempre paga una sola",
    text: "Una amiga adelanta el alojamiento, otra los pasajes, y el viaje empieza con deudas cruzadas entre todas.",
  },
  {
    icon: MessageSquareX,
    title: "El grupo se vuelve una planilla",
    text: "Cientos de mensajes para decidir un hotel, capturas de transferencias y nadie sabe bien cuánto falta.",
  },
  {
    icon: CreditCard,
    title: "Nadie sabe cuánto sale",
    text: "El presupuesto se arma de a pedazos y siempre aparece un gasto que no estaba previsto.",
  },
];

const differentials = [
  "Viajes pensados exclusivamente para mujeres",
  "Destinos nacionales e internacionales",
  "Itinerario a medida, no un paquete estándar",
  "Proveedores seleccionados uno por uno",
  "Precio final por persona, sin sorpresas",
  "Cada una paga por separado, en cuotas",
  "Una coordinadora responde por el grupo entero",
];

export function PainPoint() {
  return (
    <section id="propuesta" className="section bg-tone-100">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">El problema</p>
            <h2 className="title-lg mt-4 text-wine-deep">
              Organizar una despedida termina siendo un trabajo de tiempo completo.
            </h2>
            <p className="lead mt-6">
              Lo divertido es el viaje, no la logística. Hoy todo cae sobre una o dos
              amigas que terminan haciendo de agencia, de contadora y de mediadora.
            </p>

            <div className="mt-10 space-y-6">
              {problems.map((problem) => (
                <div key={problem.title} className="flex gap-4">
                  <problem.icon
                    size={20}
                    className="mt-1 shrink-0 text-accent"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="font-semibold text-wine">{problem.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {problem.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="sticky top-28 rounded-3xl bg-wine p-10 text-tone-50 sm:p-12">
              <p className="eyebrow-light">Nuestra propuesta</p>
              <h3 className="title-lg mt-4 text-tone-50">
                Más que un viaje, una experiencia diseñada para ustedes.
              </h3>
              <p className="mt-6 text-base leading-relaxed text-tone-50">
                No las acomodamos a un paquete ya armado: el itinerario se diseña
                alrededor del grupo, de la novia y del presupuesto que manejan.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-tone-50">
                {differentials.map((item) => (
                  <li key={item} className="border-t border-tone-50/15 pt-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
