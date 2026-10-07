import type { Metadata } from "next";
import { Bodoni_Moda, Montserrat } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MotionProvider } from "@/components/ui/MotionProvider";
import "./globals.css";

// Cada peso que use una clase de Tailwind tiene que estar declarado aca: si no,
// next/font no lo descarga y el navegador simula la negrita.
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The Bride Club · Viajes para despedidas de soltera",
  description:
    "El viaje antes del sí. Agencia de viajes especializada en despedidas de soltera: itinerarios diseñados a medida del grupo, precio final por persona y una app donde cada amiga paga su parte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bodoni.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Si el navegador no ejecuta JavaScript, las animaciones nunca arrancan y
            el contenido quedaría invisible. Esto lo muestra igual. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <MotionProvider>
          <SiteHeader />
          <div className="flex flex-1 flex-col">{children}</div>
          <SiteFooter />
          <WhatsAppButton />
        </MotionProvider>
      </body>
    </html>
  );
}
