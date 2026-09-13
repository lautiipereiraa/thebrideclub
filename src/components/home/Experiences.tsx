import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";

const destinationNames = new Map(destinations.map((d) => [d.id, d.name]));

export function Experiences() {
  return (
    <section id="experiencias" className="section bg-tone-200">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experiencias"
          title="Elegí cómo se quieren sentir, no solo adónde ir"
          description="Cada experiencia es un punto de partida: el itinerario después se diseña alrededor del grupo."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="overflow-hidden rounded-3xl border border-tone-300 bg-tone-50"
            >
              <div className="relative aspect-16/10">
                <Image
                  src={experience.photo}
                  alt={experience.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-8 sm:p-9">
                <h3 className="font-display text-3xl text-wine-deep">
                  {experience.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {experience.promise}
                </p>

                <dl className="mt-7 space-y-3 border-t border-tone-300 pt-6 text-sm">
                  <div className="flex gap-3">
                    <dt className="w-28 shrink-0 text-muted">Duración</dt>
                    <dd className="text-ink">{experience.duration}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-28 shrink-0 text-muted">Alojamiento</dt>
                    <dd className="text-ink">{experience.stay}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-28 shrink-0 text-muted">Destinos</dt>
                    <dd className="text-ink">
                      {experience.destinationIds
                        .map((id) => destinationNames.get(id))
                        .join(" · ")}
                    </dd>
                  </div>
                </dl>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {experience.doing.map((activity) => (
                    <li
                      key={activity}
                      className="rounded-full border border-wine/20 px-3 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-wine"
                    >
                      {activity}
                    </li>
                  ))}
                </ul>

                <p className="mt-7 border-t border-tone-300 pt-6 text-sm leading-relaxed text-muted">
                  <span className="small-caps text-accent">Ideal para</span>
                  <span className="mt-2 block text-ink">{experience.bride}</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="#cotizar" className="btn-outline">
            Diseñar mi experiencia
          </Link>
        </div>
      </div>
    </section>
  );
}
