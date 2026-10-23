import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

// Fuentes autoalojadas (SIL Open Font License): sin peticiones a Google.
const inter = localFont({
  src: "../fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const mono = localFont({
  src: "../fonts/JetBrainsMono-Variable.woff2",
  variable: "--font-mono-jb",
  weight: "100 800",
  display: "swap",
});

const sora = localFont({
  src: "../fonts/Sora-Variable.woff2",
  variable: "--font-sora",
  weight: "100 800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "LURQEN — Software a la medida y automatizaciones con IA",
    template: "%s · LURQEN",
  },
  description: site.description,
  authors: [{ name: site.founder.name }],
  creator: site.founder.name,
  keywords: [
    "desarrollo de software a la medida",
    "automatizaciones con IA",
    "chatbot WhatsApp",
    "desarrollo web Bogotá",
    "CRM a la medida",
    "LURQEN",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    siteName: "LURQEN",
    title: "LURQEN — Software a la medida y automatizaciones con IA",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "LURQEN — Software a la medida y automatizaciones con IA",
    description: site.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#f4f5f7",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${sora.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg font-sans text-fg">{children}</body>
    </html>
  );
}
