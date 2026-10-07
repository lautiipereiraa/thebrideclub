import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TierCard } from "@/components/home/TierCard";
import { serviceTiers } from "@/data/service-tiers";

export function ServiceTiers() {
  return (
    <section id="niveles" className="section bg-tone-100">
      <div className="container-page">
        <SectionHeading
          eyebrow="Niveles de servicio"
          title="Dos formas de vivir el mismo viaje"
          description="Los dos niveles incluyen la organización completa. Lo que cambia es cuánto queremos que ustedes tengan que pensar."
        />

        <div className="mx-auto mt-20 grid max-w-4xl gap-8 lg:grid-cols-2">
          {serviceTiers.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 0.12} className="h-full">
              <TierCard tier={tier} />
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-center text-xs leading-relaxed text-muted">
          Valores estimativos por persona, calculados sobre un grupo de ocho. El precio
          arranca en Cariló y sube según el destino; cada propuesta se cotiza aparte
          según las fechas, la disponibilidad y cuántas sean.
        </p>
      </div>
    </section>
  );
}
