# Transportes SLM — Landing Page

Landing page profesional para **Transportes SLM**, empresa de transporte de carga en el noroeste de México. Construida con **Next.js 14 (App Router)** y **Tailwind CSS**.

---

## Stack

| Tecnología | Versión |
|---|---|
| Next.js | 14.2.x |
| React | 18 |
| Tailwind CSS | 3.4.x |
| TypeScript | 5 |

---

## Estructura del proyecto

```
transportes-slm/
├── app/
│   ├── layout.tsx        # Layout raíz + metadatos SEO + fuentes
│   ├── page.tsx          # Página principal (ensambla todos los componentes)
│   └── globals.css       # Estilos globales + utilidades Tailwind
├── components/
│   ├── Navbar.tsx        # Barra de navegación fija + menú móvil
│   ├── Hero.tsx          # Hero section con CTAs
│   ├── Services.tsx      # 4 cards de servicios
│   ├── Coverage.tsx      # Cobertura por estados + mini mapa
│   ├── WhyUs.tsx         # Por qué elegirnos (5 puntos)
│   ├── Gallery.tsx       # Galería con placeholders + lightbox
│   ├── Contact.tsx       # Formulario de cotización (mailto)
│   ├── Footer.tsx        # Footer completo
│   └── WhatsAppButton.tsx # Botón flotante de WhatsApp
├── public/
│   └── images/           # ← Sube aquí tus fotos y logo
├── tailwind.config.ts    # Colores, tipografías y animaciones custom
├── next.config.mjs       # Configuración de Next.js
└── package.json
```

---

## Instalación y uso local

### 1. Prerrequisitos

- Node.js >= 18
- npm >= 9 (o pnpm / yarn)

### 2. Clonar e instalar dependencias

```bash
git clone <url-del-repo>
cd <carpeta>
npm install
```

### 3. Correr en modo desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 4. Build de producción

```bash
npm run build
npm run start
```

---

## Personalización

### Agregar el logo real

1. Coloca tu logo en `public/logo.svg` (o `public/logo.png`)
2. Abre `components/Navbar.tsx` y reemplaza el bloque del placeholder:

```tsx
import Image from "next/image";

// Reemplaza el div de placeholder con:
<Image
  src="/logo.svg"        // o "/logo.png"
  alt="Transportes SLM"
  width={40}
  height={40}
  className="rounded-lg"
/>
```

3. Repite en `components/Footer.tsx` para el logo del footer.
4. Para extraer la paleta de colores del logo, actualiza `tailwind.config.ts`.

### Agregar fotos a la galería

1. Copia tus imágenes a `public/images/foto1.jpg`, `foto2.jpg`, etc.
2. En `components/Gallery.tsx`, reemplaza el array `placeholderItems` y el componente `PlaceholderCard`:

```tsx
import Image from "next/image";

// Reemplaza el div placeholder por:
<Image
  src="/images/foto1.jpg"
  alt={item.alt}
  fill
  className="object-cover"
/>
```

### Actualizar colores

Los colores están centralizados en `tailwind.config.ts`. Las variables principales son:

```ts
navy:   { ... }                                  // Azul marino (primario)
orange: { brand: "#f97316", hover: "#ea6c0a" }   // CTAs
steel:  { ... }                                  // Grises industriales
```

### Cambiar número de WhatsApp o email

Edita estas constantes (aparecen en varios componentes):

| Variable | Archivo | Valor actual |
|---|---|---|
| `CONTACT_TEL` | `Contact.tsx` | `6461388345` |
| `WA_NUMBER` | `Hero.tsx`, `Contact.tsx`, `WhatsAppButton.tsx`, `Footer.tsx` | `526461388345` |
| `CONTACT_EMAIL` | `Contact.tsx` | `diego.castro.rgz@gmail.com` |

---

## Deploy

### Opción A — Vercel (recomendado para Next.js)

```bash
# Instalar Vercel CLI (una sola vez)
npm i -g vercel

# Deploy desde la raíz del proyecto
vercel

# Producción
vercel --prod
```

O conecta el repositorio directamente en [vercel.com](https://vercel.com):
1. **Add New Project** → importa el repo de GitHub
2. Vercel detecta Next.js automáticamente
3. Clic en **Deploy** — listo

### Opción B — Netlify

Agrega el plugin de Next.js para Netlify:

```bash
npm install -D @netlify/plugin-nextjs
```

Crea `netlify.toml` en la raíz del proyecto:

```toml
[[plugins]]
  package = "@netlify/plugin-nextjs"

[build]
  command = "npm run build"
  publish = ".next"
```

Luego conecta el repositorio en [netlify.com](https://netlify.com):
1. **Add new site** → importa desde GitHub
2. Build command: `npm run build`
3. Publish directory: `.next`
4. **Deploy site**

---

## Favicon y OG Image

| Archivo | Dimensiones | Descripción |
|---|---|---|
| `public/favicon.ico` | 32×32 | Ícono de pestaña del navegador |
| `public/logo.svg` | — | Favicon SVG (navegadores modernos) |
| `public/apple-touch-icon.png` | 180×180 | Ícono en iOS |
| `public/og-image.jpg` | 1200×630 | Imagen para compartir en redes sociales |

---

## Licencia

Proyecto privado — © Transportes SLM. Todos los derechos reservados.
