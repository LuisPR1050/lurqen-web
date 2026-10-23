"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { Fragment, useRef, type ElementType } from "react";

type Part = { text: string; className?: string };

type RevealTextProps = {
  /** Fragmentos de la frase; cada uno puede tener su propio estilo. */
  parts: Part[];
  as?: ElementType;
  className?: string;
  /** Inserta un salto de línea antes del fragmento con este índice. */
  breakBefore?: number;
  delay?: number;
};

/** Titular que sube palabra por palabra, recortado por una máscara. */
export function RevealText({
  parts,
  as: Tag = "h2",
  className = "",
  breakBefore,
  delay = 0,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  // Se observa el contenedor: las palabras ocultas por la máscara no "entran" en vista solas.
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();

  const words = parts.flatMap((part, p) =>
    part.text
      .split(" ")
      .filter(Boolean)
      .map((word, w) => ({ word, p, w, className: part.className ?? "" })),
  );

  return (
    <Tag ref={ref} className={className}>
      {words.map(({ word, p, w, className: wordClass }, index) => (
        <Fragment key={`${p}-${w}`}>
          {breakBefore === p && w === 0 && <br />}
          <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <motion.span
              className={`inline-block ${wordClass}`}
              initial={reduce ? false : { y: "105%" }}
              animate={inView || reduce ? { y: 0 } : { y: "105%" }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + index * 0.05,
              }}
            >
              {word}
            </motion.span>
          </span>{" "}
        </Fragment>
      ))}
    </Tag>
  );
}
