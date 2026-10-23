"use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { projects, whatsappLink } from "@/lib/site";
import { BrowserFrame } from "./ui/BrowserFrame";
import { Eyebrow, h2Class, sectionClass } from "./ui/Eyebrow";
import { RevealText } from "./ui/RevealText";

const ROTATE_MS = 5000;

export function Projects() {
  return (
    <section id="proyectos" className={sectionClass}>
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div className="flex max-w-[680px] flex-col gap-5">
          <Eyebrow index="02">Proyectos</Eyebrow>
          <RevealText
            className={h2Class}
            parts={[
              { text: "Software que" },
              { text: "ya está funcionando.", className: "text-subtle" },
            ]}
          />
        </div>
        <a
          href={whatsappLink("Hola Luis, vi tus proyectos y quiero algo parecido.")}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 text-[15px] font-medium text-accent-ink hover:underline"
        >
          Quiero algo así →
        </a>
      </div>

      <div className="flex flex-col gap-[clamp(64px,8vw,104px)]">
        {projects.map((p, i) => (
          <ProjectCase key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCase({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reversed = index % 2 === 1;

  // Rota las capturas solo mientras el proyecto está en pantalla.
  useEffect(() => {
    if (!inView || paused || reduce) return;
    const t = setTimeout(
      () => setActive((a) => (a + 1) % project.shots.length),
      ROTATE_MS,
    );
    return () => clearTimeout(t);
  }, [inView, paused, reduce, active, project.shots.length]);

  const shot = project.shots[active];

  return (
    <motion.article
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="grid items-center gap-[clamp(32px,5vw,64px)] lg:grid-cols-12"
    >
      {/* Visor de capturas */}
      <div
        className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <BrowserFrame url={`${project.name} · ${shot.label}`}>
          <div className="relative aspect-[1894/882] bg-surface-2">
            <AnimatePresence initial={false}>
              <motion.div
                key={shot.src}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={shot.src}
                  alt={`${project.name}: ${shot.label}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover object-top"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </BrowserFrame>

        <div role="tablist" aria-label={`Capturas de ${project.name}`} className="mt-4 flex gap-2">
          {project.shots.map((s, i) => (
            <button
              key={s.src}
              role="tab"
              type="button"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`relative min-h-11 flex-1 overflow-hidden rounded-xl border px-4 text-left text-sm transition-colors ${
                i === active
                  ? "border-fg bg-surface font-medium text-fg"
                  : "border-line bg-transparent text-muted hover:border-line-2 hover:text-fg"
              }`}
            >
              {s.label}
              {i === active && inView && !paused && !reduce && (
                <motion.span
                  key={`${active}-progress`}
                  aria-hidden="true"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Texto */}
      <div className={`flex flex-col gap-5 lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
        <p className="font-mono text-xs tracking-[0.06em] text-subtle uppercase">
          {String(index + 1).padStart(2, "0")} — {project.kind}
        </p>
        <h3 className="font-display text-[clamp(28px,3vw,40px)] leading-[1.05] font-semibold tracking-[-0.035em]">
          {project.name}
        </h3>
        <p className="text-base leading-relaxed text-muted">{project.summary}</p>
        <ul className="flex flex-col divide-y divide-line border-y border-line">
          {project.modules.map((m) => (
            <li key={m} className="flex gap-3 py-3 text-[15px] text-fg-2">
              <span aria-hidden="true" className="mt-[9px] size-1.5 flex-none rotate-45 bg-accent" />
              {m}
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-2" aria-label="Tecnologías">
          {project.stack.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-fg-2"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
