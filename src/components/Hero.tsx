"use client";

import Image from "next/image";
import { ArrowDownRight, Check } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { Avatar } from "./ui/Avatar";
import { BrowserFrame } from "./ui/BrowserFrame";
import { ButtonLink } from "./ui/Button";
import { container } from "./ui/Eyebrow";
import { RevealText } from "./ui/RevealText";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

const events = [
  "Mensaje recibido por WhatsApp",
  "Cita agendada para el jueves",
  "Cliente registrado en el CRM",
  "Recordatorio programado",
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBack = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -110]);
  const yCard = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -170]);

  const [event, setEvent] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setEvent((e) => (e + 1) % events.length), 2400);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <section
      id="inicio"
      ref={ref}
      className={`${container} grid items-center gap-[clamp(48px,6vw,72px)] pt-[clamp(40px,7vw,88px)] pb-[clamp(64px,9vw,112px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]`}
    >
      {/* Texto */}
      <div className="flex flex-col items-start gap-7">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pr-3.5 pl-2 font-mono text-[11px] tracking-[0.06em] text-muted uppercase"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-ok" />
          </span>
          Agenda abierta · {site.city}
        </motion.p>

        <h1 className="font-display text-[clamp(40px,5.6vw,72px)] leading-[1.02] font-semibold tracking-[-0.04em]">
          <RevealText
            as="span"
            parts={[{ text: "Software a la medida que" }]}
          />
          <span className="relative inline-block whitespace-nowrap text-accent">
            <RevealText as="span" parts={[{ text: "trabaja por ti." }]} delay={0.25} />
            <svg
              aria-hidden="true"
              viewBox="0 0 300 18"
              preserveAspectRatio="none"
              className="absolute -bottom-[0.06em] left-0 h-[0.22em] w-[96%]"
            >
              <motion.path
                d="M3 12 C 60 4, 140 4, 297 9"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                initial={reduce ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, delay: 0.9, ease: [0.65, 0, 0.35, 1] }}
                opacity={0.35}
              />
            </svg>
          </span>
        </h1>

        <p className="max-w-[520px] text-[clamp(16px,1.5vw,18px)] leading-relaxed text-muted">
          Desarrollamos sistemas web, CRMs y automatizaciones con IA para negocios
          que quieren vender más y perder menos tiempo en tareas repetitivas.
        </p>

        <div className="flex flex-wrap gap-3">
          <ButtonLink href={whatsappLink()} external>
            <WhatsAppIcon />
            Cuéntanos tu idea
          </ButtonLink>
          <ButtonLink href="#proyectos" variant="outline">
            Ver proyectos
            <ArrowDownRight
              aria-hidden="true"
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </ButtonLink>
        </div>

        <div className="mt-2 flex items-center gap-3.5 border-t border-line pt-6">
          <Avatar size={44} />
          <div className="text-sm leading-snug">
            <p className="font-semibold text-fg">
              {site.founder.name} · {site.founder.role}
            </p>
            <p className="text-muted">Hablas directamente conmigo, sin intermediarios.</p>
          </div>
        </div>
      </div>

      {/* Composición con capturas reales */}
      <div className="relative mx-auto aspect-[1.12] w-full max-w-[640px]">
        <motion.div style={{ y: yBack }} className="absolute top-0 right-0 w-[82%]">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <BrowserFrame url="Trading Risk Manager · Dashboard">
              <Image
                src="/projects/trm-dashboard.png"
                alt="Dashboard de Trading Risk Manager"
                width={1876}
                height={892}
                sizes="(max-width: 1024px) 80vw, 520px"
                priority
              />
            </BrowserFrame>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: yFront }} className="absolute bottom-[6%] left-0 w-[82%]">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <BrowserFrame url="MInmo · Panel de gestión">
              <Image
                src="/projects/minmo-panel.png"
                alt="Panel de gestión inmobiliaria MInmo"
                width={1902}
                height={901}
                sizes="(max-width: 1024px) 80vw, 520px"
                priority
              />
            </BrowserFrame>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: yCard }}
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute right-[2%] bottom-0 w-[min(270px,62%)] rounded-2xl border border-line bg-surface p-4 shadow-[0_24px_48px_-16px_rgba(15,22,33,0.25)]"
          aria-live="polite"
        >
          <p className="mb-2.5 flex items-center justify-between font-mono text-[10px] tracking-[0.08em] text-subtle uppercase">
            Automatización
            <span className="text-ok">● activa</span>
          </p>
          <div className="relative h-6 overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.p
                key={event}
                initial={{ y: 22, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -22, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center gap-2 text-[13px] font-medium text-fg"
              >
                <span className="flex size-5 flex-none items-center justify-center rounded-full bg-ok-tint text-ok">
                  <Check aria-hidden="true" size={12} strokeWidth={3} />
                </span>
                <span className="truncate">{events[event]}</span>
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
