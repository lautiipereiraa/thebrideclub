"use client";

import { motion } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  /** Segundos de espera antes de arrancar. Sirve para escalonar una grilla. */
  delay?: number;
  className?: string;
}

/**
 * Aparición suave al entrar en pantalla: sube unos píxeles mientras se funde.
 *
 * Recibe `children` como slot, así lo que va adentro **sigue renderizándose en el
 * servidor** (patrón de la doc de Next): solo este envoltorio viaja al navegador.
 *
 * Quien pide menos animaciones en su sistema operativo recibe solo el fundido, sin
 * desplazamiento: de eso se encarga el `MotionConfig` del layout. No se decide acá
 * con un `if`, porque devolver un árbol distinto en el navegador que en el servidor
 * rompe la hidratación.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
