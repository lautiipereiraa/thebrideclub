import type { MetadataRoute } from "next";

// Lo que usa Android para el acceso directo en la pantalla de inicio (iOS toma
// apple-icon.png). "browser": abre como cualquier página, con la barra del navegador.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Bride Club",
    short_name: "The Bride Club",
    start_url: "/",
    display: "browser",
    background_color: "#9e1a20",
    theme_color: "#9e1a20",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
