import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Nos contás la idea",
    text: "Cuántas son, qué fechas manejan, qué presupuesto tienen en mente, qué estilo de viaje les gusta y cómo es la novia.",
  },
  {
    number: "02",
    title: "Te mandamos la propuesta",
    text: "Uno o dos itinerarios armados para este grupo, con precio final por persona y todo lo que incluye cada nivel.",
  },
  {
    number: "03",
    title: "Se abre la caja del grupo",
    text: "Cada amiga entra a la app con su nombre, ve el itinerario, vota las decisiones y carga sus pagos.",
  },
  {
    number: "04",
    title: "Se van de viaje",
    text: "Reciben el itinerario día por día y una coordinadora disponible antes y durante toda la estadía.",
  },
];

export function HowItWorks() {
  return (
    <section className="section bg-blush-200">
      <div className="container-page">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="De la idea al aeropuerto en cuatro pasos"
          description="Sin planillas compartidas, sin capturas de transferencias y sin que ninguna quede a cargo de todo."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-blush-300/60 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="bg-cream p-8">
              <p className="font-display text-4xl text-blush-300">{step.number}</p>
              <p className="mt-4 font-semibold text-wine">{step.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
