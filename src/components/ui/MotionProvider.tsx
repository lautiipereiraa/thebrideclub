"use client";

import { MotionConfig } from "motion/react";

/**
 * `reducedMotion="user"` respeta la preferencia del sistema operativo: a quien pide
 * menos movimiento se le desactivan los desplazamientos y queda solo el fundido,
 * que no marea. Va una sola vez en el layout y vale para toda la página.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
