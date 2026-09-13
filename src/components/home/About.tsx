import Image from "next/image";
import { Check } from "lucide-react";

const promises = [
  "Organización integral",
  "Experiencias personalizadas",
  "Proveedores seleccionados",
  "Acompañamiento antes y durante el viaje",
];

export function About() {
  return (
    <section id="nosotras" className="section bg-tone-100">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
          <Image
            src="/fotos/nosotras.jpg"
            alt="Grupo de amigas brindando alrededor de una mesa"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="eyebrow">Quiénes somos</p>
          <h2 className="title-lg mt-4 text-wine-deep">
            Celebrar, sin tener que organizar.
          </h2>
          <p className="lead mt-6">
            The Bride Club nace para transformar la forma de celebrar una despedida de
            soltera. Creamos experiencias donde cada detalle está pensado para que la
            novia y sus amigas disfruten sin ocuparse de la organización.
          </p>

          <ul className="mt-9 grid gap-4 sm:grid-cols-2">
            {promises.map((promise) => (
              <li key={promise} className="flex items-start gap-3">
                <Check size={17} strokeWidth={2} className="mt-1 shrink-0 text-wine" />
                <span className="text-sm leading-relaxed text-ink">{promise}</span>
              </li>
            ))}
          </ul>

          <p className="mt-9 border-t border-tone-300 pt-6 text-sm leading-relaxed text-muted">
            Hoy viajamos con grupos de 6 a 20 amigas. Después, el mismo formato para
            cumpleaños redondos, aniversarios, lunas de miel y experiencias
            individuales para la novia.
          </p>
        </div>
      </div>
    </section>
  );
}
