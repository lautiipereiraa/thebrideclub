import Link from "next/link";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section id="historias" className="section bg-tone-200">
      <div className="container-page">
        <SectionHeading
          eyebrow="Historias"
          title="Historias de novias que celebraron con The Bride Club"
        />

        <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-dashed border-wine/25 bg-tone-50 px-8 py-14 text-center">
          <Quote
            size={30}
            strokeWidth={1.5}
            className="mx-auto text-wine"
            aria-hidden="true"
          />
          <p className="lead mt-6 text-base">
            Estamos armando los primeros viajes. Acá van a ir las historias reales de
            cada grupo, contadas por ellas: qué eligieron, cómo la pasaron y qué se
            llevaron de vuelta.
          </p>
          <Link href="#cotizar" className="btn-outline mt-8">
            Quiero ser de las primeras
          </Link>
        </div>
      </div>
    </section>
  );
}
