"use client";

import { motion, useReducedMotion } from "motion/react";
import { principles, site } from "@/lib/site";
import { Avatar } from "./ui/Avatar";
import { Eyebrow, sectionClass } from "./ui/Eyebrow";

export function Founder() {
  const reduce = useReducedMotion();

  return (
    <section id="nosotros" className={sectionClass}>
      <div className="grid gap-[clamp(40px,6vw,80px)] lg:grid-cols-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-7 lg:col-span-7"
        >
          <Eyebrow index="05">Quién está detrás</Eyebrow>
          <blockquote className="font-display text-[clamp(24px,2.7vw,36px)] leading-[1.25] font-medium tracking-[-0.025em] text-fg">
            “Fundé LURQEN para que los negocios tengan tecnología hecha a su medida:
            sistemas que se entienden, que son seguros y que{" "}
            <span className="text-accent">trabajan por ellos</span>.”
          </blockquote>
          <div className="flex items-center gap-4">
            <Avatar size={56} />
            <div>
              <p className="font-display text-lg font-semibold">{site.founder.name}</p>
              <p className="text-[15px] text-muted">
                {site.founder.role} de LURQEN · Desarrollador de software con enfoque en
                ciberseguridad
              </p>
            </div>
          </div>
        </motion.div>

        <ul className="flex flex-col gap-3 lg:col-span-5">
          {principles.map((p, i) => (
            <motion.li
              key={p.title}
              initial={reduce ? false : { opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-2"
            >
              <p className="mb-1.5 flex items-center gap-3 font-display text-[17px] font-semibold">
                <span className="font-mono text-xs font-normal text-accent">0{i + 1}</span>
                {p.title}
              </p>
              <p className="text-[15px] leading-relaxed text-muted">{p.text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
