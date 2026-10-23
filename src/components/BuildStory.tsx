"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { useRef, useState } from "react";
import { buildSteps } from "@/lib/site";
import { Eyebrow } from "./ui/Eyebrow";
import { PhoneMockup } from "./PhoneMockup";

/**
 * Sección alta con el contenido fijo (sticky): al hacer scroll se ilumina
 * cada frase y el celular se arma por etapas.
 */
export function BuildStory() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [stage, setStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.max(0, Math.min(buildSteps.length - 1, Math.floor(v * buildSteps.length * 1.05)));
    if (next !== stage) setStage(next);
  });

  const current = reduce ? buildSteps.length - 1 : stage;

  return (
    <section
      ref={ref}
      aria-label="Cómo construimos"
      className={`border-y border-line bg-surface ${reduce ? "relative" : "relative h-[320svh]"}`}
    >
      <div
        className={`${
          reduce ? "py-24" : "sticky top-0 h-svh pt-14 md:pt-0"
        } mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-8 px-[clamp(16px,4vw,48px)] md:flex-row md:gap-[clamp(48px,7vw,110px)]`}
      >
        <div className="min-w-0 md:flex-[1_1_420px]">
          <div className="mb-8 hidden md:block">
            <Eyebrow index="03">Cómo lo construimos</Eyebrow>
          </div>
          <ol className="hidden flex-col gap-3 font-display text-[clamp(30px,3.6vw,48px)] leading-[1.12] font-semibold tracking-[-0.035em] md:flex">
            {buildSteps.map((s, i) => (
              <li
                key={s}
                aria-current={i === current ? "step" : undefined}
                className={`flex items-baseline gap-4 transition-colors duration-500 ${
                  i === current ? "text-fg" : i < current ? "text-[#8b95a3]" : "text-[#c3cad3]"
                }`}
              >
                <span
                  className={`font-mono text-sm font-normal tracking-normal transition-colors ${
                    i === current ? "text-accent" : ""
                  }`}
                >
                  0{i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>

          {/* Móvil: solo la frase activa */}
          <div className="flex h-[2.3em] items-end justify-center text-center font-display text-[24px] leading-[1.15] font-semibold tracking-[-0.03em] md:hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {buildSteps[current]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="mt-8 hidden max-w-[440px] text-[17px] leading-relaxed text-muted md:block">
            Así se ve un asistente LURQEN: atiende a tus clientes, agenda y deja todo
            registrado en tu sistema mientras tú te ocupas de lo importante.
          </p>
        </div>

        <div className="relative flex-none">
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-[56px] bg-accent-tint md:-inset-14 md:rounded-[64px]"
          />
          <div className="relative">
            <PhoneMockup stage={current} />
          </div>
        </div>
      </div>
    </section>
  );
}
