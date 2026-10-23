import Image from "next/image";
import { site } from "@/lib/site";

export async function Footer() {
  "use cache"; // el año se calcula en el build y se guarda en caché
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 border-t border-line px-[clamp(16px,4vw,48px)] pt-7 pb-10 text-[13px] text-subtle">
      <span className="flex items-center gap-2.5">
        <Image src="/logo-mark.png" alt="" width={18} height={19} />
        © {year} LURQEN · {site.city}
      </span>
      <span>
        Fundada por <span className="text-fg-2">{site.founder.name}</span>
      </span>
    </footer>
  );
}
