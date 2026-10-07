import Link from "next/link";
import { Cake, Compass, Heart, Sparkles, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const propuestas = [
  {
    icon: Users,
    name: "Viajes entre amigas",
    text: "Sin ocasión especial. Juntarse, viajar y que esté todo resuelto.",
  },
  {
    icon: Cake,
    name: "Cumpleaños",
    text: "Un festejo que se celebra lejos de casa, con el grupo que elijas.",
  },
  {
    icon: Heart,
    name: "Madre e hija",
    text: "Un viaje de a dos, armado con el ritmo y los intereses de las dos.",
  },
  {
    icon: Compass,
    name: "Mujeres que viajan solas",
    text: "Grupos para quienes quieren viajar acompañadas sin organizar nada.",
  },
  {
    icon: Sparkles,
    name: "Experiencias a medida",
    text: "Contanos qué querés celebrar y lo cotizamos igual.",
  },
];

export function OtherTrips() {
  return (
    <section id="otros-viajes" className="section bg-tone-100">
      <div className="container-page">
        <SectionHeading
          eyebrow="Otras formas de viajar"
          title="No solo despedidas de soltera"
          description="La despedida es nuestro viaje principal, pero el mismo equipo organiza otras celebraciones entre mujeres. Cada propuesta se arma distinta, según el motivo y quiénes viajan."
        />

        <Reveal className="mt-16">
          <div className="grid gap-px overflow-hidden rounded-2xl bg-tone-400/50 sm:grid-cols-2 lg:grid-cols-3">
          {propuestas.map((propuesta) => (
            <div key={propuesta.name} className="bg-tone-50 p-8">
              <propuesta.icon
                size={22}
                strokeWidth={1.5}
                className="text-accent"
                aria-hidden="true"
              />
              <h3 className="mt-5 font-display text-2xl text-wine-deep">
                {propuesta.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {propuesta.text}
              </p>
            </div>
          ))}

          <div className="flex flex-col justify-center bg-tone-50 p-8">
            <p className="text-sm leading-relaxed text-ink">
              En todas mantenemos lo mismo: itinerario a medida, organización integral
              y una coordinadora para el grupo. Lo que cambia es el motivo del viaje.
            </p>
            <Link href="#cotizar" className="btn-outline mt-7 self-start">
              Contanos qué querés celebrar
            </Link>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
