import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "outline";
  external?: boolean;
  className?: string;
};

const styles = {
  primary: "bg-accent text-white hover:bg-accent-hover shadow-[0_8px_24px_-8px_rgba(29,95,214,0.55)]",
  dark: "bg-fg text-white hover:bg-fg-2",
  outline: "border border-line-2 bg-surface text-fg hover:border-fg",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center gap-2.5 rounded-full px-6 text-[15px] font-medium transition-all duration-200 active:scale-[0.98] ${styles[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
