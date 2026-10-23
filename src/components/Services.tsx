"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { services, whatsappLink } from "@/lib/site";
import { Eyebrow, h2Class, sectionClass } from "./ui/Eyebrow";
import { RevealText } from "./ui/RevealText";

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="servicios" className={sectionClass}>
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div className="flex max-w-[640px] flex-col gap-5">
          <Eyebrow index="01">Servicios</Eyebrow>
          <RevealText
            className={h2Class}
            parts={[
              { text: "Dos formas de hacer" },
              { text: "crecer tu negocio.", className: "text-subtle" },
            ]}
          />
        </div>
        <p className="max-w-[340px] text-[15px] leading-relaxed text-muted">
          Puedes empezar por una de las dos. Lo normal es que terminen trabajando juntas.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col overflow-hidden rounded-[28px] border border-line bg-surface transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-line-2 hover:shadow-[0_24px_48px_-24px_rgba(15,22,33,0.22)]"
          >
            <div className="relative h-[200px] overflow-hidden border-b border-line bg-surface-2">
              {s.kind === "software" ? <SoftwareArt /> : <AiArt />}
            </div>
            <div className="flex flex-1 flex-col gap-4 p-[clamp(24px,3vw,36px)]">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-[26px] leading-tight font-semibold tracking-[-0.025em]">
                  {s.title}
                </h3>
                <span className="font-mono text-xs text-subtle">0{i + 1}</span>
              </div>
              <p className="text-base leading-relaxed text-muted">{s.description}</p>
              <ul className="mt-1 grid gap-x-6 gap-y-2.5 text-[15px] text-fg-2 sm:grid-cols-2">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-[9px] size-1.5 flex-none rotate-45 bg-accent" />
                    {it}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(`Hola Luis, me interesa: ${s.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[15px] font-medium text-accent-ink hover:underline"
              >
                Cotizar {s.title.toLowerCase()}
                <ArrowUpRight
                  aria-hidden="true"
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/** Ilustración: ventana de una app con sidebar, métricas y tabla. */
function SoftwareArt() {
  return (
    <div aria-hidden="true" className="absolute inset-x-8 top-8 bottom-0 rounded-t-xl border border-line border-b-0 bg-surface shadow-[0_12px_32px_-12px_rgba(15,22,33,0.2)] transition-transform duration-500 group-hover:-translate-y-2">
      <div className="flex h-full">
        <div className="flex w-[22%] flex-col gap-2 border-r border-line p-3">
          <span className="mb-1 h-2 w-10 rounded bg-accent" />
          {[70, 55, 62, 48, 58].map((w, i) => (
            <span key={i} className={`h-2 rounded ${i === 0 ? "bg-accent-tint" : "bg-surface-2"}`} style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-3 p-4">
          <div className="grid grid-cols-3 gap-2">
            {["#1d5fd6", "#0e7fa6", "#13875a"].map((c) => (
              <div key={c} className="rounded-lg border border-line p-2">
                <span className="block h-1.5 w-8 rounded bg-surface-2" />
                <span className="mt-2 block h-3 w-10 rounded" style={{ background: c, opacity: 0.85 }} />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 rounded-lg border border-line p-2.5">
            {[0, 1, 2].map((r) => (
              <div key={r} className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-surface-2" />
                <span className="h-1.5 flex-1 rounded bg-surface-2" />
                <span className="h-1.5 w-8 rounded bg-accent-tint" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Ilustración: flujo WhatsApp → IA → CRM. */
function AiArt() {
  const nodes = [
    { label: "WhatsApp", tone: "bg-ok-tint text-ok" },
    { label: "Asistente IA", tone: "bg-accent text-white" },
    { label: "CRM", tone: "bg-accent-tint text-accent-ink" },
  ];
  return (
    <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center gap-2 px-6 sm:gap-3">
      {nodes.map((n, i) => (
        <div key={n.label} className="flex items-center gap-2 sm:gap-3">
          <span
            className={`rounded-xl px-3 py-2.5 font-mono text-[11px] font-medium whitespace-nowrap shadow-[0_8px_20px_-10px_rgba(15,22,33,0.3)] transition-transform duration-500 sm:px-4 sm:text-xs ${n.tone} ${
              i === 1 ? "group-hover:scale-105" : ""
            }`}
          >
            {n.label}
          </span>
          {i < nodes.length - 1 && (
            <span className="relative h-px w-6 overflow-hidden bg-line-2 sm:w-10">
              <span className="absolute inset-y-0 left-0 w-3 animate-flow bg-accent" style={{ animationDelay: `${i * 0.8}s` }} />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
