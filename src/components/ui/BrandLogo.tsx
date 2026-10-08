import Image from "next/image";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  tone?: "wine" | "light";
  layout?: "stacked" | "inline" | "mark";
  /** Descarga la imagen de entrada en vez de esperar a que entre en pantalla. */
  priority?: boolean;
}

/** Ancho del isologo completo por tamaño. El archivo es 1280x646. */
const anchosCompleto = { sm: 220, md: 380, lg: 560 };

/** Alto del logo compacto por tamaño. El archivo es 1280x500. */
const altosCompacto = { sm: 44, md: 58, lg: 76 };

/** Alto de la ilustración sola por tamaño. El archivo es 700x738. */
const altosMarca = { sm: 38, md: 50, lg: 68 };

/**
 * En tono `wine` el logo sigue al tema: bordó sobre el fondo claro y crema sobre
 * el oscuro. Van las dos imágenes y el CSS muestra una sola; decidirlo en el
 * servidor no se puede, porque el tema elegido vive en el navegador.
 */
export function BrandLogo({ tone = "wine", priority = false, ...props }: BrandLogoProps) {
  if (tone === "light") {
    return <BrandLogoImage {...props} sufijo="crema" priority={priority} />;
  }

  return (
    <>
      <BrandLogoImage {...props} sufijo="bordo" priority={priority} className="dark:hidden" />
      <BrandLogoImage {...props} sufijo="crema" priority={priority} className="hidden dark:block" />
    </>
  );
}

interface BrandLogoImageProps extends Omit<BrandLogoProps, "tone"> {
  sufijo: "bordo" | "crema";
  className?: string;
}

function BrandLogoImage({
  size = "md",
  layout = "stacked",
  priority = false,
  sufijo,
  className,
}: BrandLogoImageProps) {

  /**
   * `mark` es solo la ilustración de la novia. Se usa cuando no entra el nombre
   * —la barra de arriba al bajar por la página—, porque la figura sola sigue
   * identificando la marca aunque sea chica.
   */
  if (layout === "mark") {
    const alto = altosMarca[size];
    return (
      <Image
        src={`/marca/chica-${sufijo}.png`}
        alt="The Bride Club"
        className={className}
        width={700}
        height={738}
        priority={priority}
        sizes={`${Math.round(alto)}px`}
        style={{ height: alto, width: "auto" }}
      />
    );
  }

  /**
   * `inline` usa el logo **sin las dos bajadas**: en una barra de 80px de alto,
   * "Agencia de viajes" y "Viajes para despedidas de soltera" quedarían de unos
   * pocos píxeles. Conserva el nombre y la ilustración, que es lo que identifica
   * la marca de un vistazo.
   */
  if (layout === "inline") {
    const alto = altosCompacto[size];
    return (
      <Image
        src={`/marca/logo-compacto-${sufijo}.png`}
        alt="The Bride Club"
        className={className}
        width={1280}
        height={500}
        priority={priority}
        sizes={`${Math.round(alto * 2.56)}px`}
        style={{ height: alto, width: "auto" }}
      />
    );
  }

  const ancho = anchosCompleto[size];
  return (
    <Image
      src={`/marca/logo-${sufijo}.png`}
      alt="The Bride Club · Agencia de viajes · Viajes para despedidas de soltera"
      className={className}
      width={1280}
      height={646}
      priority={size === "lg"}
      sizes={`(max-width: 640px) 90vw, ${ancho}px`}
      style={{ width: ancho, maxWidth: "90vw", height: "auto" }}
    />
  );
}
