"use client";

import Image from "next/image";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#nosotros", label: "Nosotros" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/85 shadow-[0_1px_0_rgba(15,22,33,0.02)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-[clamp(16px,4vw,48px)] py-3.5"
      >
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="LURQEN, inicio">
          <Image src="/logo-mark.png" alt="" width={28} height={30} priority />
          <span className="font-display text-[17px] font-semibold tracking-[0.2em]">LURQEN</span>
        </a>
        <div className="flex items-center gap-1 text-sm md:gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden rounded-full px-3.5 py-2 text-muted transition-colors hover:bg-surface hover:text-fg md:inline"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex min-h-11 items-center gap-2 rounded-full bg-fg px-4.5 font-medium text-white transition-colors hover:bg-fg-2"
          >
            <WhatsAppIcon size={16} />
            Escríbenos
          </a>
        </div>
      </nav>
    </header>
  );
}
