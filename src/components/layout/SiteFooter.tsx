import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { contact, instagramLink, tiktokLink, whatsappLink } from "@/data/contact";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-tone-400/50 bg-tone-300">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2">
          <div className="flex sm:justify-start">
            <BrandLogo size="sm" layout="inline" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Viajes para despedidas de soltera diseñados a medida del grupo. Ustedes
            disfrutan, nosotras organizamos.
          </p>
        </div>

        <div>
          <p className="eyebrow">Navegación</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <Link href="/#experiencias" className="transition-colors hover:text-wine">
                Experiencias
              </Link>
            </li>
            <li>
              <Link href="/#destinos" className="transition-colors hover:text-wine">
                Destinos
              </Link>
            </li>
            <li>
              <Link href="/#niveles" className="transition-colors hover:text-wine">
                Niveles de servicio
              </Link>
            </li>
            <li>
              <Link href="/#extras" className="transition-colors hover:text-wine">
                Experiencias extra
              </Link>
            </li>
            <li>
              <Link href="/#app" className="transition-colors hover:text-wine">
                La app del viaje
              </Link>
            </li>
            <li>
              <Link href="/#otros-viajes" className="transition-colors hover:text-wine">
                Otras formas de viajar
              </Link>
            </li>
            <li>
              <Link href="/caja" className="transition-colors hover:text-wine">
                La caja del grupo
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Legal</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <Link href="/terminos" className="transition-colors hover:text-wine">
                Términos y condiciones
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="transition-colors hover:text-wine">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link
                href="/arrepentimiento"
                className="font-medium text-wine underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                Botón de arrepentimiento
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-wine"
              >
                WhatsApp · {contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-wine"
              >
                Instagram · @{contact.instagram}
              </a>
            </li>
            <li>
              <a
                href={tiktokLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-wine"
              >
                TikTok · @{contact.tiktok}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-tone-400/50">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Bride Club. Todos los derechos reservados.</p>
          <p>
            Proyecto académico · Licenciatura en Turismo y Hotelería · Algunas
            fotografías ilustrativas de Unsplash
          </p>
        </div>
      </div>
    </footer>
  );
}
