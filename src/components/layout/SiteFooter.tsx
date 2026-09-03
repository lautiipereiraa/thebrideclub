import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-blush-300/50 bg-blush-200">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="flex sm:justify-start">
            <BrandLogo size="sm" layout="inline" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Agencia de viajes especializada en experiencias grupales para mujeres, hoy
            con foco en despedidas de soltera. Diseñamos el viaje a medida del grupo y
            lo dejamos listo para que solo tengan que llegar.
          </p>
        </div>

        <div>
          <p className="eyebrow">Navegación</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
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
              <Link href="/caja" className="transition-colors hover:text-wine">
                La caja del grupo
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>hola@antesdelvelo.com</li>
            <li>+54 9 11 0000 0000</li>
            <li>@antesdelvelo</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blush-300/50">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Antes del velo. Todos los derechos reservados.</p>
          <p>Proyecto académico · Licenciatura en Turismo y Hotelería</p>
        </div>
      </div>
    </footer>
  );
}
