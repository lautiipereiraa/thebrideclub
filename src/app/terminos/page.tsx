import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/layout/LegalPage";
import { contact, whatsappLink } from "@/data/contact";

export const metadata: Metadata = {
  title: "Términos y condiciones · The Bride Club",
  description:
    "Condiciones de contratación de los viajes y servicios de The Bride Club: qué incluye cada propuesta, precios, pagos, cancelaciones y derechos de la consumidora.",
};

export default function TerminosPage() {
  return (
    <LegalPage
      eyebrow="Información legal"
      title="Términos y condiciones"
      intro="Acá explicamos cómo trabajamos, qué incluye cada propuesta, cómo se contrata y cuáles son tus derechos. Si algo no te queda claro, escribinos antes de contratar."
      updatedAt="octubre de 2026"
    >
      <LegalSection title="Quiénes somos">
        <p>
          The Bride Club es una agencia de viajes que diseña y organiza viajes
          grupales para mujeres, con foco en despedidas de soltera. Opera de manera
          100 % online, sin local de atención al público.
        </p>
        <p className="rounded-xl border border-tone-400/60 bg-tone-50 p-4 text-muted">
          <strong className="text-wine">Aclaración importante:</strong> este sitio
          forma parte de un proyecto académico de la Licenciatura en Turismo y
          Hotelería. La empresa se encuentra en etapa de desarrollo y todavía no
          comercializa servicios. Las condiciones de esta página describen cómo
          operaría la agencia una vez constituida.
        </p>
      </LegalSection>

      <LegalSection title="Qué servicio ofrecemos">
        <p>
          Diseñamos el itinerario a medida del grupo y coordinamos los servicios que
          lo componen: alojamiento, traslados, actividades, gastronomía y
          experiencias complementarias.
        </p>
        <p>
          Actuamos como <strong>intermediarias</strong> entre vos y los prestadores
          que efectivamente brindan cada servicio (hoteles, aerolíneas, restaurantes,
          excursiones, transportistas). Seleccionamos y coordinamos a esos
          prestadores, y acompañamos antes y durante el viaje.
        </p>
      </LegalSection>

      <LegalSection title="Cómo se contrata">
        <p>
          El proceso tiene cuatro pasos: nos escribís y nos contás qué busca el grupo;
          te enviamos una propuesta con el itinerario y el precio final por persona;
          confirmás la propuesta; y recién ahí se abren los pagos.
        </p>
        <p>
          La propuesta que recibas detalla de manera expresa <strong>qué incluye y
          qué no incluye</strong>, las fechas, la cantidad de personas, los
          alojamientos y actividades previstas, el precio por persona, la moneda, las
          formas de pago y las condiciones de cancelación. Esa propuesta, una vez
          aceptada, es la que rige la contratación junto con estos términos.
        </p>
      </LegalSection>

      <LegalSection title="Precios, moneda y pagos">
        <p>
          Trabajamos con <strong>precio final por persona</strong> sobre el itinerario
          acordado. Cada integrante del grupo puede abonar su parte por separado.
        </p>
        <p>
          En propuestas que incluyan destinos internacionales, los precios pueden
          expresarse en moneda extranjera, ya que vuelos, alojamientos y determinados
          servicios se cotizan así. En esos casos la propuesta indica la moneda, el
          tipo de cambio de referencia y hasta cuándo se mantiene el precio.
        </p>
        <p>
          Cualquier variación de impuestos, tasas o tipo de cambio posterior a la
          confirmación se informa antes de aplicarse, con el detalle del cálculo.
        </p>
      </LegalSection>

      <LegalSection title="Derecho de revocación: tenés 10 días">
        <p>
          Si contratás a distancia (por este sitio, por WhatsApp o por cualquier canal
          digital), podés <strong>arrepentirte dentro de los 10 días corridos</strong>{" "}
          desde que aceptaste la propuesta, sin tener que dar explicaciones y sin
          ningún costo, conforme a la Ley 24.240 de Defensa del Consumidor y al Código
          Civil y Comercial de la Nación.
        </p>
        <p>
          Podés ejercerlo desde el{" "}
          <Link href="/arrepentimiento" className="font-medium text-wine underline">
            botón de arrepentimiento
          </Link>
          , sin registrarte ni hacer ningún trámite previo.
        </p>
      </LegalSection>

      <LegalSection title="Cancelaciones y cambios después de los 10 días">
        <p>
          Pasado el plazo de revocación, las condiciones de cancelación son las que
          figuran en la propuesta que aceptaste. Varían según el destino y los
          prestadores: algunos alojamientos y pasajes tienen políticas propias que no
          podemos modificar, y así se te informa antes de confirmar.
        </p>
        <p>
          Si un prestador cancela o modifica un servicio, te lo comunicamos apenas lo
          sabemos y te ofrecemos una alternativa equivalente o la devolución de la
          parte proporcional.
        </p>
      </LegalSection>

      <LegalSection title="Documentación del viaje">
        <p>
          Cada pasajera es responsable de contar con la documentación vigente que el
          destino exija (DNI, pasaporte, visas, certificados sanitarios). Te
          informamos qué hace falta en cada caso, pero la gestión y la vigencia de esos
          documentos corren por cuenta de cada participante.
        </p>
      </LegalSection>

      <LegalSection title="Tus datos personales">
        <p>
          Para organizar el viaje necesitamos datos tuyos y del grupo. Cómo los
          usamos, con quién los compartimos y cómo pedir que los borremos está
          explicado en nuestra{" "}
          <Link href="/privacidad" className="font-medium text-wine underline">
            política de privacidad
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Reclamos">
        <p>
          Si algo sale mal, escribinos primero a nosotras:{" "}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-wine underline"
          >
            WhatsApp {contact.whatsappDisplay}
          </a>
          . Nos comprometemos a responder todo reclamo dentro de las 72 horas hábiles.
        </p>
        <p>
          Además, como consumidora podés reclamar ante la autoridad de aplicación de
          Defensa del Consumidor de tu jurisdicción, y los servicios turísticos
          prestados en Argentina cuentan con el Programa de Protección al Consumidor
          Turista, que permite presentar reclamos a través del Sistema Nacional de
          Arbitraje de Consumo (SNAC).
        </p>
      </LegalSection>

      <LegalSection title="Ley aplicable">
        <p>
          Estas condiciones se rigen por las leyes de la República Argentina, en
          particular la Ley 24.240 de Defensa del Consumidor, la Ley 25.326 de
          Protección de los Datos Personales y las normas del Código Civil y Comercial
          sobre contratos celebrados a distancia.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
