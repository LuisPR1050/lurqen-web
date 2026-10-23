import { ArrowUpRight, Mail } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { ButtonLink } from "./ui/Button";
import { container } from "./ui/Eyebrow";
import { RevealText } from "./ui/RevealText";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

export function ContactCTA() {
  const channels = [
    {
      label: "WhatsApp",
      value: site.whatsappDisplay,
      href: whatsappLink(),
      icon: <WhatsAppIcon size={18} />,
      external: true,
    },
    {
      label: "Correo",
      value: site.email,
      href: `mailto:${site.email}`,
      icon: <Mail aria-hidden="true" size={18} />,
      external: false,
    },
    {
      label: "TikTok",
      value: `@${site.tiktok}`,
      href: `https://www.tiktok.com/@${site.tiktok}`,
      icon: <span aria-hidden="true" className="font-mono text-xs font-semibold">TT</span>,
      external: true,
    },
  ];

  return (
    <section id="contacto" className={`${container} pb-[clamp(72px,10vw,128px)]`}>
      <div className="grid gap-10 rounded-[32px] bg-night p-[clamp(28px,5vw,64px)] text-white lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col items-start gap-6 lg:col-span-7">
          <p className="font-mono text-xs tracking-[0.06em] text-[#9fb4d6] uppercase">
            06 — Contacto
          </p>
          <RevealText
            className="font-display text-[clamp(34px,4.6vw,60px)] leading-[1.02] font-semibold tracking-[-0.04em]"
            parts={[
              { text: "Hablemos de" },
              { text: "tu proyecto.", className: "text-[#7fb0ff]" },
            ]}
          />
          <p className="max-w-[460px] text-[17px] leading-relaxed text-[#c3cfe0]">
            Cuéntame tu idea y te respondo con una propuesta clara de alcance, tiempos y costos.
          </p>
          <ButtonLink href={whatsappLink()} external>
            <WhatsAppIcon />
            Escríbeme por WhatsApp
          </ButtonLink>
        </div>

        <ul className="flex flex-col justify-end gap-2 lg:col-span-5">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex min-h-16 items-center gap-4 rounded-2xl border border-white/10 px-5 py-4 transition-colors hover:border-white/30 hover:bg-white/5"
              >
                <span className="flex size-10 flex-none items-center justify-center rounded-full bg-white/10 text-white">
                  {c.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[11px] tracking-[0.06em] text-[#9fb4d6] uppercase">
                    {c.label}
                  </span>
                  <span className="block truncate text-[15px] font-medium">{c.value}</span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  size={18}
                  className="text-[#9fb4d6] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
