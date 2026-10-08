import type { NextConfig } from "next";

// Orígenes extra para el dev server, separados por coma. Vienen por entorno y no
// hardcodeados porque son la IP o el dominio del servidor donde corre: eso cambia
// por entorno y no tiene por qué quedar publicado en el repo.
const extraDevOrigins = (process.env.EXTRA_DEV_ORIGINS ?? "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  output: process.env.NEXT_OUTPUT === "standalone" ? "standalone" : undefined,
  allowedDevOrigins: ["localhost", "127.0.0.1", ...extraDevOrigins],
  // 90 solo para la foto de portada, que va a pantalla completa: con 75 se nota
  // la segunda compresión sobre un JPG que ya viene comprimido.
  images: { qualities: [75, 90] },
};

export default nextConfig;
