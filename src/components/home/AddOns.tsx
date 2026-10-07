import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { addOns } from "@/data/add-ons";

export function AddOns() {
  return (
    <section id="extras" className="section bg-tone-300">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experiencias adicionales"
          title="Los detalles que hacen la diferencia"
          description="Se suman a cualquier nivel de servicio y se cotizan aparte, según lo que el grupo quiera agregar."
        />

        <Reveal className="mt-16">
          <div className="grid gap-px overflow-hidden rounded-2xl bg-tone-400/60 sm:grid-cols-2 lg:grid-cols-4">
          {addOns.map((addOn) => (
            <div
              key={addOn.id}
              className="bg-tone-100 p-7 transition-colors duration-300 hover:bg-tone-50"
            >
              <h3 className="font-display text-xl text-wine">{addOn.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {addOn.description}
              </p>
            </div>
          ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
