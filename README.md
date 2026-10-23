# LURQEN — sitio web

Landing de LURQEN: software a la medida y automatizaciones con IA.
Hecha con Next.js (App Router), Tailwind CSS y Motion.

## Arrancar en tu computador

Requisito: Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Datos editables

Todo está en **`src/lib/site.ts`**: WhatsApp, correo, TikTok, dominio, textos de
servicios, proyectos y proceso.

Pendientes:

| Campo | Qué poner |
| --- | --- |
| `tiktok` | Tu usuario de TikTok, sin @ |
| `url` | Tu dominio final (ej. `https://lurqen.com`) |
| `founder.photo` | Tu foto en `public/` (ej. `/luis-pena.jpg`); mientras tanto se ven tus iniciales |

Las capturas de proyectos están en `public/projects/`.

## Estructura

```
src/
  app/            layout, página, SEO (sitemap, robots, icono, imagen para redes)
  components/     una sección por archivo (Hero, Process, BuildStory…)
    ui/           piezas reutilizables (botones, brillo, texto animado)
  fonts/          Inter, Sora y JetBrains Mono autoalojadas (licencia SIL OFL)
  lib/site.ts     datos editables
public/           logos
```

## Animaciones

- `RevealText`: los titulares suben palabra por palabra.
- `Hero`: capturas con parallax y tarjeta de automatización que cambia sola.
- `Marquee`: cinta en movimiento con lo que construimos.
- `Projects`: visor de capturas que rota solo, con pestañas.
- `BuildStory`: al hacer scroll se ilumina cada frase y el celular se arma por partes.
- `Process`: la línea de tiempo se llena con el scroll.
- Todo respeta la opción del sistema "reducir movimiento".

## Seguridad

`next.config.ts` envía cabeceras de seguridad: Content-Security-Policy,
X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy y HSTS.
Si agregas un script externo (analítica, chat, etc.), añade su dominio a la CSP.

## Publicar en Vercel

1. Sube el proyecto a un repositorio de GitHub.
2. En vercel.com: **Add New → Project**, importa el repo y despliega (no requiere configuración).
3. En **Settings → Domains** conecta tu dominio.
4. Actualiza `url` en `src/lib/site.ts` con el dominio final.
