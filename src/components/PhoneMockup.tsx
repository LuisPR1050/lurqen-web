"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const messages = [
  { from: "user", text: "Hola, ¿tienen cita disponible mañana?" },
  { from: "bot", text: "¡Claro! Tengo 10:00 a. m. y 3:30 p. m. ¿Cuál prefieres?" },
  { from: "user", text: "3:30, por favor." },
  { from: "bot", text: "Listo, quedó agendada. Te enviaré un recordatorio." },
] as const;

const automations = [
  "Cita creada en el CRM",
  "Recordatorio programado",
  "Cliente añadido a seguimiento",
];

const pop = {
  initial: { opacity: 0, y: 12, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 6 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

/**
 * Celular que se "arma" por etapas:
 * 0 interfaz · 1 primeros mensajes · 2 conversación completa · 3 automatización
 */
export function PhoneMockup({ stage }: { stage: number }) {
  const visibleMessages = stage <= 0 ? 0 : stage === 1 ? 2 : 4;

  return (
    <div
      role="img"
      aria-label="Ejemplo de asistente de IA de LURQEN agendando una cita por chat y registrándola en el CRM"
      className="relative h-[530px] w-[262px] rounded-[44px] bg-fg p-2.5 shadow-[0_40px_80px_-30px_rgba(15,22,33,0.45)] md:h-[610px] md:w-[300px] md:rounded-[48px] md:p-3"
    >
      <div className="flex h-full flex-col gap-2.5 overflow-hidden rounded-[34px] bg-[#f6f7f9] px-4 py-5 md:gap-3 md:rounded-[38px]">
        <div className="flex items-center gap-2.5 border-b border-line pb-3.5">
          <span className="flex size-8 items-center justify-center rounded-full bg-surface shadow-sm">
            <Image src="/logo-mark.png" alt="" width={18} height={19} />
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-fg">Asistente IA</span>
            <span className="text-[11px] text-ok">En línea · responde 24/7</span>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {messages.slice(0, visibleMessages).map((m) => (
            <motion.div
              key={m.text}
              {...pop}
              className={
                m.from === "user"
                  ? "max-w-[80%] self-end rounded-[16px_16px_4px_16px] border border-line bg-surface px-3.5 py-2.5 text-[13px] leading-snug text-fg"
                  : "max-w-[84%] self-start rounded-[16px_16px_16px_4px] bg-accent px-3.5 py-2.5 text-[13px] leading-snug text-white"
              }
            >
              {m.text}
            </motion.div>
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {stage >= 3 && (
            <motion.div
              {...pop}
              className="mt-auto flex flex-col gap-2.5 rounded-2xl border border-line bg-surface p-3.5 text-xs shadow-sm"
            >
              <span className="font-mono text-[10px] tracking-[0.08em] text-subtle uppercase">
                Automatización
              </span>
              {automations.map((a, i) => (
                <motion.span
                  key={a}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.18 }}
                  className="flex items-center gap-2 text-fg-2"
                >
                  <span className="flex size-4 items-center justify-center rounded-full bg-ok-tint text-ok">
                    <Check aria-hidden="true" size={10} strokeWidth={3} />
                  </span>
                  {a}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
