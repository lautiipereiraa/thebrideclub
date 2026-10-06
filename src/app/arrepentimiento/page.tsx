import type { Metadata } from "next";
import Link from "next/link";
import { ArrepentimientoForm } from "@/components/legal/ArrepentimientoForm";
import { contact, whatsappLink } from "@/data/contact";

export const metadata: Metadata = {
  title: "Botón de arrepentimiento · The Bride Club",
  description:
    "Ejercé tu derecho a revocar una contratación dentro de los 10 días, sin costo y sin tener que dar explicaciones.",
};

export default function ArrepentimientoPage() {
  return (
    <main className="flex-1 bg-tone-100">
      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Defensa del consumidor</p>
          <h1 className="title-xl mt-4 text-wine-deep">Botón de arrepentimiento</h1>
          <p className="lead mt-6">
            Si contrataste a distancia y te arrepentiste, tenés 10 días corridos para
            dar de baja la contratación, <strong>sin costo y sin tener que explicar
            nada</strong>. Completá esto y nos encargamos del resto.
          </p>

          <div className="mt-10 rounded-2xl border border-tone-400/60 bg-tone-50 p-6 text-sm leading-relaxed text-muted">
            <p>
              Es un derecho que te da la Ley 24.240 de Defensa del Consumidor junto con
              el Código Civil y Comercial de la Nación. El plazo corre desde que
              aceptaste la propuesta. No necesitás registrarte ni hacer ningún trámite
              previo, y la devolución no tiene cargo para vos.
            </p>
            <p className="mt-3">
              Si preferís, también podés pedirlo por{" "}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-wine underline"
              >
                WhatsApp {contact.whatsappDisplay}
              </a>
              .
            </p>
          </div>

          <div className="mt-10">
            <ArrepentimientoForm />
          </div>

          <p className="mt-10 text-sm leading-relaxed text-muted">
            Las condiciones completas de contratación, pagos y cancelaciones están en
            los{" "}
            <Link href="/terminos" className="font-medium text-wine underline">
              términos y condiciones
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
