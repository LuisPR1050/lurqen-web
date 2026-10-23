import Image from "next/image";
import { site } from "@/lib/site";

/** Foto del fundador; si no hay foto, monograma con sus iniciales. */
export function Avatar({ size = 44 }: { size?: number }) {
  const { name, photo } = site.founder;
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  if (photo) {
    return (
      <Image
        src={photo}
        alt={name}
        width={size}
        height={size}
        className="rounded-full object-cover"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className="flex flex-none items-center justify-center rounded-full bg-accent font-display font-semibold text-white"
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initials}
    </span>
  );
}
