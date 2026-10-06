import { SectionHeading } from "@/components/ui/SectionHeading";
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
          {serviceTiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>

        <p className="mt-12 text-center text-xs leading-relaxed text-muted">
          Los valores son de referencia y varían según destino, temporada, cantidad de
          noches y tamaño del grupo.
        </p>
      </div>
    </section>
  );
}
