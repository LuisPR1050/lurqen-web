import type { ReactNode } from "react";

/** Marco de navegador para mostrar capturas reales de proyectos. */
export function BrowserFrame({
  url,
  children,
  className = "",
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-surface shadow-[0_1px_2px_rgba(15,22,33,0.04),0_24px_48px_-16px_rgba(15,22,33,0.18)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line bg-surface-2/70 px-3.5 py-2.5">
        <div aria-hidden="true" className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#e5e7eb]" />
          <span className="size-2.5 rounded-full bg-[#e5e7eb]" />
          <span className="size-2.5 rounded-full bg-[#e5e7eb]" />
        </div>
        <span className="truncate rounded-md bg-surface px-2.5 py-0.5 font-mono text-[11px] text-subtle">
          {url}
        </span>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
