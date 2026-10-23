"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { processSteps } from "@/lib/site";
import { Eyebrow, h2Class, sectionClass } from "./ui/Eyebrow";
import { RevealText } from "./ui/RevealText";

/** Línea de tiempo: la línea se llena a medida que haces scroll. */
export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const fill = useTransform(progress, [0, 1], [reduce ? 1 : 0, 1]);

  return (
    <section id="proceso" className={sectionClass}>
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div className="flex max-w-[640px] flex-col gap-5">
          <Eyebrow index="04">Proceso</Eyebrow>
          <RevealText
            className={h2Class}
            parts={[
              { text: "Tú nos cuentas." },
              { text: "Nosotros nos encargamos del resto.", className: "text-subtle" },
            ]}
            breakBefore={1}
          />
        </div>
        <p className="max-w-[340px] text-[15px] leading-relaxed text-muted">
          Un proceso claro y por etapas. Ves avances reales en cada fase, no solo al final.
        </p>
      </div>

      <ol ref={ref} className="relative grid gap-8 md:grid-cols-5 md:gap-6">
        {/* Línea: vertical en móvil, horizontal en escritorio */}
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-px bg-line-2 md:top-[7px] md:right-0 md:bottom-auto md:left-0 md:h-px md:w-auto" />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: fill }}
          className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-accent md:hidden"
        />
        <motion.span
          aria-hidden="true"
          style={{ scaleX: fill }}
          className="absolute top-[7px] right-0 left-0 hidden h-px origin-left bg-accent md:block"
        />

        {processSteps.map((s, i) => (
          <motion.li
            key={s.title}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col gap-3 pl-9 md:pt-10 md:pl-0"
          >
            <span
              aria-hidden="true"
              className="absolute top-0.5 left-0 size-[15px] rounded-full border-2 border-accent bg-bg md:top-0"
            />
            <span className="font-mono text-xs text-accent">0{i + 1}</span>
            <h3 className="font-display text-lg leading-snug font-semibold tracking-[-0.015em]">
              {s.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-muted">{s.text}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
