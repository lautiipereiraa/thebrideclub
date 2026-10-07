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
    <>
      {/* Fondo crema y marca en bordó: es la aplicación principal del manual. */}
      <section className="bg-tone-100">
        <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
          {/* Sin el isologo: la marca ya está grande en la barra de arriba. */}
          <Reveal>
            <h1 className="font-display text-4xl italic text-wine sm:text-5xl lg:text-6xl">
              El viaje antes del sí
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="lead mt-7 max-w-xl">
              Diseñamos viajes personalizados para celebrar a la novia junto a sus
              amigas. Ustedes disfrutan, nosotras organizamos.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-11 flex flex-col gap-3 sm:flex-row">
            <Link href="#cotizar" className="btn-primary">
              Diseñar mi experiencia
            </Link>
            <Link href="#destinos" className="btn-outline">
              Ver destinos
            </Link>
          </Reveal>

          <dl className="mt-20 grid w-full max-w-lg grid-cols-3 gap-8 border-t border-tone-400/60 pt-9">
            {datos.map((dato, i) => (
              <Reveal key={dato.etiqueta} delay={0.36 + i * 0.1}>
                <dt className="small-caps text-accent">{dato.etiqueta}</dt>
                <dd className="mt-2 font-display text-3xl font-medium text-wine">
                  {dato.valor}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* La proporción crece con la pantalla hasta llegar a la de la foto (8/3),
          así en escritorio se ve entera y en celular el recorte respeta las caras. */}
      <div className="relative aspect-3/2 sm:aspect-2/1 lg:aspect-8/3">
        <Image
          src="/fotos/portada-brindis.jpg"
          alt="Cuatro amigas brindando en la playa al atardecer"
          fill
          sizes="100vw"
          className="object-cover object-[50%_38%]"
        />
      </div>
    </>
  );
}
