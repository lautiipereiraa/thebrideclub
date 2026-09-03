import { SectionHeading } from "@/components/ui/SectionHeading";
import { travelStyles } from "@/data/travel-styles";
import { spellOut } from "@/lib/format";

export function TravelStyles() {
  return (
    <section className="section bg-cream">
      <div className="container-page">
        <SectionHeading
          eyebrow="Estilo de viaje"
          title={`El mismo destino puede ser ${spellOut(travelStyles.length)} viajes distintos`}
          description="Nos dicen qué mezcla quieren y armamos el itinerario alrededor de eso. Se pueden combinar todos."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {travelStyles.map((style, index) => (
            <article
              key={style.id}
              className="group relative overflow-hidden rounded-2xl border border-blush-200/70 bg-blush-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-wine/25 hover:shadow-xl hover:shadow-blush-200/50"
            >
              <span className="font-display text-sm text-accent">
                0{index + 1}
              </span>
              <h3 className="mt-3 font-display text-2xl text-wine">{style.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {style.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
