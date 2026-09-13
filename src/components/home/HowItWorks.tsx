import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Elegí la experiencia",
    text: "Arrancá por el destino o por el tipo de viaje que se imaginan. Si todavía no saben, lo vemos juntas.",
  },
  {
    number: "02",
    title: "Contanos qué busca el grupo",
    text: "Cuántas son, qué fechas manejan, qué presupuesto tienen en mente y cómo es la novia.",
  },
  {
    number: "03",
    title: "Diseñamos la propuesta",
    text: "Uno o dos itinerarios armados para este grupo, con precio final por persona.",
  },
  {
    number: "04",
    title: "Nos encargamos de todo",
    text: "Reservas, proveedores y organización. Ustedes reciben el itinerario y una coordinadora disponible.",
  },
];

export function HowItWorks() {
  return (
    <section className="section bg-tone-300">
      <div className="container-page">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="De la idea al aeropuerto en cuatro pasos"
          description="Sin planillas compartidas y sin que ninguna quede a cargo de todo."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-tone-400/60 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="bg-tone-100 p-8">
              <p className="font-display text-4xl text-tone-400">{step.number}</p>
              <p className="mt-4 font-semibold text-wine">{step.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
