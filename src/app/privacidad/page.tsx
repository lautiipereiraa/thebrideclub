import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/layout/LegalPage";
import { contact, whatsappLink } from "@/data/contact";

export const metadata: Metadata = {
  title: "Política de privacidad · The Bride Club",
  description:
    "Qué datos personales recoge The Bride Club, para qué los usa, con quién los comparte y cómo pedir el acceso, la rectificación o la supresión de tu información.",
};

export default function PrivacidadPage() {
  return (
    <LegalPage
      eyebrow="Información legal"
      title="Política de privacidad"
      intro="Qué datos tuyos guardamos, para qué los usamos y cómo pedirnos que los corrijamos o los borremos. En criollo y sin letra chica."
      updatedAt="octubre de 2026"
    >
      <LegalSection title="Quién es responsable de tus datos">
        <p>
          The Bride Club es responsable de la base de datos donde se guarda la
          información que nos dejás. Podés contactarnos por{" "}
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
      </LegalSection>

      <LegalSection title="Qué datos recogemos">
        <p>
          Solamente los que nos dejás vos en el formulario de consulta: tu nombre, un
          WhatsApp o mail de contacto, el destino y el nivel de servicio que te
          interesan, cuántas son, la fecha aproximada del viaje, el tipo de
          experiencia y el mensaje que escribas.
        </p>
        <p>
          <strong>No pedimos ni guardamos datos de tarjetas ni claves bancarias.</strong>{" "}
          Si en el futuro se habilitan pagos online, se harán a través de una
          plataforma de pagos que procesa esos datos por su cuenta.
        </p>
      </LegalSection>

      <LegalSection title="Para qué los usamos">
        <p>
          Para una sola cosa: responder tu consulta y armarte una propuesta de viaje.
          Si después contratás, también para gestionar las reservas con los
          prestadores y acompañarte durante el viaje.
        </p>
        <p>
          No vendemos ni cedemos tus datos a terceros con fines publicitarios, y no te
          mandamos promociones salvo que nos lo pidas expresamente.
        </p>
      </LegalSection>

      <LegalSection title="Con quién los compartimos">
        <p>
          Únicamente con los prestadores necesarios para que el viaje exista
          (alojamientos, aerolíneas, transportistas, excursiones), y solo con los datos
          imprescindibles para hacer cada reserva.
        </p>
      </LegalSection>

      <LegalSection title="Cuánto tiempo los guardamos">
        <p>
          Mientras tu consulta siga activa y, si viajás con nosotras, por el tiempo que
          exijan las obligaciones comerciales e impositivas. Pasado ese plazo, o si nos
          pedís que los borremos, los eliminamos.
        </p>
      </LegalSection>

      <LegalSection title="Tus derechos">
        <p>
          Podés pedirnos en cualquier momento que te mostremos qué datos tuyos tenemos,
          que los corrijamos si están mal o que los borremos. Escribinos por WhatsApp y
          lo resolvemos.
        </p>
        <p className="rounded-xl border border-tone-400/60 bg-tone-50 p-4 text-muted">
          El titular de los datos personales tiene la facultad de ejercer el derecho de
          acceso a los mismos en forma gratuita a intervalos no inferiores a seis
          meses, salvo que se acredite un interés legítimo al efecto, conforme lo
          establecido en el artículo 14, inciso 3 de la Ley N.º 25.326.
        </p>
        <p className="rounded-xl border border-tone-400/60 bg-tone-50 p-4 text-muted">
          La Agencia de Acceso a la Información Pública, en su carácter de órgano de
          control de la Ley N.º 25.326, tiene la atribución de atender las denuncias y
          reclamos que interpongan quienes resulten afectados en sus derechos por
          incumplimiento de las normas vigentes en materia de protección de datos
          personales.
        </p>
      </LegalSection>

      <LegalSection title="Cómo cuidamos la información">
        <p>
          El sitio funciona con conexión cifrada (HTTPS). Las consultas se guardan en
          una base de datos que no está expuesta a internet y que solo alcanza la
          propia página. El panel donde se leen las consultas está protegido con
          usuario y contraseña.
        </p>
      </LegalSection>

      <LegalSection title="Condiciones de contratación">
        <p>
          Las condiciones de los viajes, los pagos y las cancelaciones están en los{" "}
          <Link href="/terminos" className="font-medium text-wine underline">
            términos y condiciones
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
