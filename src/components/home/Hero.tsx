import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { destinations } from "@/data/destinations";
import { serviceTiers } from "@/data/service-tiers";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blush-200 via-blush-100 to-cream" />
      <div className="absolute -right-40 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-blush-50/60 blur-3xl" />
      <div className="absolute -left-48 top-52 -z-10 h-[26rem] w-[26rem] rounded-full bg-blush-50/50 blur-3xl" />

      <div className="container-page flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-24 text-center">
        <BrandLogo size="lg" />

        <div className="mt-14 h-px w-20 bg-wine/20" />

        <h1 className="title-lg mt-12 max-w-3xl text-wine-deep">
          El último viaje de soltera,
          <span className="block font-display italic text-wine">
            organizado hasta el último detalle.
          </span>
        </h1>

        <p className="lead mt-8 max-w-xl">
          Ustedes eligen el destino y el estilo, nosotras nos ocupamos del resto.
        </p>

        <div className="mt-11 flex flex-col gap-3 sm:flex-row">
          <Link href="#destinos" className="btn-primary">
            Ver destinos
          </Link>
          <Link href="#cotizar" className="btn-outline">
            Cotizar nuestro viaje
          </Link>
        </div>

        <dl className="mt-20 grid w-full max-w-xl grid-cols-3 gap-8 border-t border-wine/12 pt-9">
          <div>
            <dt className="small-caps text-muted">Destinos</dt>
            <dd className="mt-2 font-display text-3xl font-medium text-wine">
              {destinations.length}
            </dd>
          </div>
          <div>
            <dt className="small-caps text-muted">Niveles</dt>
            <dd className="mt-2 font-display text-3xl font-medium text-wine">
              {serviceTiers.length}
            </dd>
          </div>
          <div>
            <dt className="small-caps text-muted">Asistencia</dt>
            <dd className="mt-2 font-display text-3xl font-medium text-wine">24/7</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
