import { capabilities } from "@/lib/site";

/** Cinta en movimiento con lo que construimos. Se pausa al pasar el mouse. */
export function Marquee() {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {capabilities.map((c) => (
        <li key={c} className="flex items-center gap-10 whitespace-nowrap">
          <span className="font-display text-[clamp(20px,2.4vw,28px)] font-semibold tracking-[-0.02em] text-fg">
            {c}
          </span>
          <span aria-hidden="true" className="size-2 rotate-45 bg-accent" />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Lo que construimos" className="border-y border-line bg-surface py-6">
      <div className="group flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
