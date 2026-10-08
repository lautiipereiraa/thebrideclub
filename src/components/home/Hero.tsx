import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { destinations } from "@/data/destinations";

const datos = [
  { etiqueta: "Destinos", valor: String(destinations.length) },
  { etiqueta: "Grupos", valor: "6 a 20" },
  { etiqueta: "Coordinación", valor: "24/7" },
];

export function Hero() {
  return (
    // Texto y foto comparten la primera pantalla: la foto llena lo que sobra.
    <section className="flex min-h-[calc(100svh-var(--header-height))] snap-start flex-col bg-tone-100">
      {/* Fondo crema y marca en bordó: es la aplicación principal del manual. */}
      <div>
        <div className="container-page flex flex-col items-center justify-center py-9 text-center sm:py-10">
          {/* Sin el isologo: la marca ya está grande en la barra de arriba. */}
          <Reveal>
            <h1 className="font-display text-4xl italic text-wine sm:text-5xl lg:text-6xl">
              El viaje antes del sí
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="lead mt-4 max-w-xl">
              Diseñamos viajes personalizados para celebrar a la novia junto a sus
              amigas. Ustedes disfrutan, nosotras organizamos.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="#cotizar" className="btn-primary">
              Diseñar mi experiencia
            </Link>
            <Link href="#destinos" className="btn-outline">
              Ver destinos
            </Link>
          </Reveal>

          <dl className="mt-8 grid w-full max-w-lg grid-cols-3 gap-3 border-t border-tone-400/60 pt-5">
            {datos.map((dato, i) => (
              <Reveal key={dato.etiqueta} delay={0.36 + i * 0.1}>
                <dt className="small-caps text-[0.55rem] tracking-[0.2em] text-accent sm:text-[0.62rem] sm:tracking-[0.42em]">{dato.etiqueta}</dt>
                <dd className="mt-2 font-display text-3xl font-medium text-wine">
                  {dato.valor}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>

      {/* Ocupa el alto que queda. El encuadre prioriza las copas y las cabezas: lo que se recorta es la parte de abajo. */}
      <div className="relative min-h-56 flex-1">
        <Image
          src="/fotos/portada-atardecer.jpg"
          alt="Cuatro amigas de espaldas levantando sus copas frente al mar al atardecer"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-[50%_12%]"
        />
      </div>
    </section>
  );
}
