"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { useReducedMotion } from "motion/react";
import { ideaExamples, whatsappLink } from "@/lib/site";
import { container } from "./ui/Eyebrow";
import { RevealText } from "./ui/RevealText";

const demo = "Un asistente que responda a mis clientes por WhatsApp";

/** "¿Qué quieres construir?": abre WhatsApp con el texto escrito. */
export function IdeaPrompt() {
  const [idea, setIdea] = useState("");
  const [typed, setTyped] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || typed >= demo.length) return;
    const t = setTimeout(() => setTyped((n) => n + 1), 45);
    return () => clearTimeout(t);
  }, [typed, reduce]);

  const placeholder = reduce ? demo : demo.slice(0, typed);

  function submit(e: FormEvent) {
    e.preventDefault();
    const text = idea.trim() || demo;
    window.open(
      whatsappLink(`Hola Luis, quiero construir: ${text}`),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section className={`${container} py-[clamp(24px,4vw,48px)]`}>
      <div className="relative overflow-hidden rounded-[32px] bg-accent-tint px-[clamp(20px,5vw,72px)] py-[clamp(48px,7vw,88px)]">
        {/* trama de puntos */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(29,95,214,0.14)_1px,transparent_1px)] bg-size-[22px_22px] [mask-image:linear-gradient(180deg,transparent,#000_60%)]"
        />
        <div className="relative flex flex-col items-start gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-[460px] flex-col gap-4">
            <RevealText
              className="font-display text-[clamp(30px,3.6vw,46px)] leading-[1.06] font-semibold tracking-[-0.035em]"
              parts={[{ text: "¿Qué quieres construir?" }]}
            />
            <p className="text-base leading-relaxed text-fg-2">
              Escríbelo como se lo contarías a un amigo. Te llega directo a mi WhatsApp.
            </p>
          </div>

          <div className="flex w-full max-w-[580px] flex-col gap-3">
            <form
              onSubmit={submit}
              className="flex w-full items-center gap-3 rounded-full border border-[#c9d8f4] bg-surface py-2 pr-2 pl-5 shadow-[0_16px_40px_-20px_rgba(29,95,214,0.45)] transition-colors focus-within:border-accent"
            >
              <label htmlFor="idea" className="sr-only">
                Describe tu proyecto
              </label>
              <input
                id="idea"
                name="idea"
                type="text"
                maxLength={300}
                autoComplete="off"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder={placeholder}
                className="min-w-0 flex-1 bg-transparent py-3 text-base text-fg outline-none placeholder:text-muted"
              />
              {!idea && (
                <span aria-hidden="true" className="-ml-2 h-5 w-0.5 animate-blink bg-accent" />
              )}
              <button
                type="submit"
                aria-label="Enviar idea por WhatsApp"
                className="flex size-12 flex-none items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-hover"
              >
                <ArrowRight aria-hidden="true" size={20} strokeWidth={2.2} />
              </button>
            </form>
            <div className="flex flex-wrap items-center gap-2 pl-1 text-[13px] text-muted">
              <span>Ideas:</span>
              {ideaExamples.map((ex) => (
                <button
                  key={ex}
                  type="button"
                  onClick={() => setIdea(ex)}
                  className="min-h-8 rounded-full border border-[#c9d8f4] bg-surface/70 px-3 text-fg-2 transition-colors hover:border-accent hover:text-accent-ink"
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
