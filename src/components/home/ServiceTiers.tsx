import { SectionHeading } from "@/components/ui/SectionHeading";
import { TierCard } from "@/components/home/TierCard";
import { serviceTiers } from "@/data/service-tiers";

export function ServiceTiers() {
  return (
    <section id="niveles" className="section bg-cream">
      <div className="container-page">
        <SectionHeading
          eyebrow="Niveles de servicio"
          title="Tres formas de vivir el mismo viaje"
          description="Todos los niveles incluyen la organización completa. Lo que cambia es cuánto queremos que ustedes tengan que pensar."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
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
