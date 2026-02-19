# Transportes SLM — Landing Page

Landing page moderna para **Transportes SLM**, empresa de transporte de carga en el noroeste de México (Baja California, Baja California Sur, Sonora y Chihuahua).

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**

## Estructura del proyecto

```
transportes-slm/
├── public/
│   └── images/
│       ├── logo-placeholder.svg    # Logo placeholder (reemplazar con el real)
│       └── gallery/                # Carpeta para fotos de galería
├── src/
│   ├── app/
│   │   ├── globals.css             # Paleta de colores + estilos globales
│   │   ├── layout.tsx              # Layout principal + SEO/OpenGraph
│   │   └── page.tsx                # Página principal (ensambla secciones)
│   └── components/
│       ├── Navbar.tsx              # Navbar fija con links y botón Cotizar
│       ├── Hero.tsx                # Hero con CTAs (WhatsApp + formulario)
│       ├── Servicios.tsx           # 4 cards de servicios
│       ├── Cobertura.tsx           # Cobertura por estados
│       ├── PorQueNosotros.tsx      # Ventajas competitivas
│       ├── Galeria.tsx             # Grid de galería (placeholders)
│       ├── Contacto.tsx            # Formulario de contacto (mailto)
│       ├── Footer.tsx              # Footer con copyright dinámico
│       └── WhatsAppButton.tsx      # Botón flotante de WhatsApp
```

## Instalación

```bash
# Clonar el repositorio
git clone <url-del-repo>
cd transportes-slm

# Instalar dependencias
npm install
```

## Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build de producción

```bash
npm run build
npm start
```

## Personalización

### Logo
Reemplaza `public/images/logo-placeholder.svg` con el logo real (PNG o SVG). Actualiza la referencia en `src/components/Navbar.tsx`.

### Fotos de galería
Agrega las fotos a `public/images/gallery/` y actualiza el array en `src/components/Galeria.tsx` para usar `<Image>` de Next.js en lugar de los placeholders.

### Colores
La paleta se define en `src/app/globals.css` dentro del bloque `@theme inline`. Ajusta los valores para que coincidan con el logo real:

```css
--color-primary: #0B2545;       /* Azul oscuro principal */
--color-primary-light: #134078; /* Azul medio */
--color-accent: #1B6FE3;       /* Azul accent */
--color-accent-light: #4A90E8; /* Azul accent claro */
```

### WhatsApp
El número de WhatsApp está configurado en `Hero.tsx` y `WhatsAppButton.tsx`. Actualmente: `526461388345`.

### Correo de contacto
El formulario envía por `mailto:` a `diego.castro.rgz@gmail.com`. Modificar en `src/components/Contacto.tsx`.

## Deploy a Vercel

1. Sube el repositorio a GitHub
2. Ve a [vercel.com](https://vercel.com) e importa el proyecto
3. Configura el **Root Directory** como `transportes-slm` (si el repo tiene más carpetas)
4. Framework Preset: **Next.js** (se detecta automáticamente)
5. Haz clic en **Deploy**

## Deploy a Netlify

1. Sube el repositorio a GitHub
2. Ve a [netlify.com](https://netlify.com) y conecta el repositorio
3. Configura:
   - **Base directory**: `transportes-slm`
   - **Build command**: `npm run build`
   - **Publish directory**: `transportes-slm/.next`
4. Instala el plugin **@netlify/plugin-nextjs** (Netlify lo sugiere automáticamente para proyectos Next.js)
5. Haz clic en **Deploy site**

Alternativamente, usa el CLI de Netlify:

```bash
npm install -g netlify-cli
cd transportes-slm
netlify init
netlify deploy --prod
```
