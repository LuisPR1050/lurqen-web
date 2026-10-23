/** Etiqueta de sección en mono: "01 / Servicios". */
export function Eyebrow({ index, children }: { index?: string; children: string }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs tracking-[0.08em] text-subtle uppercase">
      {index && <span className="text-accent">{index}</span>}
      {index && <span aria-hidden="true" className="h-px w-6 bg-line-2" />}
      {children}
    </p>
  );
}

export const container = "mx-auto w-full max-w-[1200px] px-[clamp(16px,4vw,48px)]";

export const sectionClass = `${container} py-[clamp(72px,10vw,128px)]`;

export const h2Class =
  "font-display text-[clamp(32px,4.2vw,54px)] leading-[1.06] font-semibold tracking-[-0.035em] text-fg";
