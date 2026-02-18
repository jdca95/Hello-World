"use client";

import { useState } from "react";

// Colores de placeholder para diferentes tipos de unidades
const placeholderItems = [
  {
    id: 1,
    alt: "Contenedor en puerto",
    label: "Contenedores",
    bg: "from-navy-800 to-navy-600",
    icon: "📦",
    size: "lg", // ocupa 2 columnas en desktop
  },
  {
    id: 2,
    alt: "Caja seca en carretera",
    label: "Caja Seca",
    bg: "from-blue-700 to-blue-500",
    icon: "🚛",
    size: "sm",
  },
  {
    id: 3,
    alt: "Caja refrigerada",
    label: "Refrigerada",
    bg: "from-cyan-700 to-cyan-500",
    icon: "❄️",
    size: "sm",
  },
  {
    id: 4,
    alt: "Plataforma con maquinaria",
    label: "Plataformas",
    bg: "from-orange-700 to-orange-500",
    icon: "🏗️",
    size: "sm",
  },
  {
    id: 5,
    alt: "Flota Transportes SLM",
    label: "Nuestra Flota",
    bg: "from-navy-700 to-navy-500",
    icon: "🚚",
    size: "sm",
  },
  {
    id: 6,
    alt: "Entrega en destino",
    label: "Entregas puntuales",
    bg: "from-steel-700 to-steel-500",
    icon: "✅",
    size: "lg",
  },
];

// Tip: Para usar fotos reales, coloca las imágenes en /public/images/
// y reemplaza el componente PlaceholderCard por una etiqueta <Image />
// de next/image con src="/images/foto1.jpg"

function PlaceholderCard({
  item,
  onClick,
}: {
  item: (typeof placeholderItems)[0];
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="gallery-item w-full text-left focus:outline-none
                 focus:ring-2 focus:ring-orange-brand focus:ring-offset-2 rounded-2xl"
      aria-label={`Ver imagen: ${item.alt}`}
    >
      <div
        className={`placeholder-img bg-gradient-to-br ${item.bg}
                    w-full aspect-video flex flex-col items-center justify-center
                    rounded-2xl relative overflow-hidden`}
      >
        {/* Grid pattern overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-10"
             xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-${item.id}`} width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${item.id})`} />
        </svg>

        {/* Content */}
        <span className="text-4xl mb-3 relative z-10">{item.icon}</span>
        <span className="text-white font-display font-bold text-sm relative z-10">
          {item.label}
        </span>
        <span className="text-white/50 text-xs mt-1 relative z-10">
          [Subir foto aquí]
        </span>

        {/* Hover overlay */}
        <div className="gallery-overlay">
          <div>
            <p className="text-white font-semibold text-sm">{item.alt}</p>
            <p className="text-white/70 text-xs">Transportes SLM</p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (id: number) => setLightbox(id);
  const closeLightbox = () => setLightbox(null);

  const currentItem = placeholderItems.find((i) => i.id === lightbox);

  return (
    <section id="galeria" className="section-padding bg-steel-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-brand font-semibold text-sm
                           tracking-widest uppercase mb-3">
            Nuestra flota
          </span>
          <h2 className="section-title">Galería</h2>
          <p className="section-subtitle mx-auto">
            Conoce nuestras unidades y operaciones. Flota moderna y bien mantenida
            para garantizar la seguridad de tu carga.
          </p>
          {/* Upload hint */}
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full
                          bg-orange-50 border border-orange-200 text-orange-700 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
            </svg>
            Sube tus fotos reales en <code className="font-mono font-bold">public/images/</code>
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholderItems.map((item) => (
            <div
              key={item.id}
              className={item.size === "lg" ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <PlaceholderCard item={item} onClick={() => openLightbox(item.id)} />
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-10 bg-white rounded-2xl border border-steel-200 p-6">
          <h3 className="font-display font-bold text-navy-900 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-orange-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Cómo agregar fotos reales
          </h3>
          <ol className="text-steel-500 text-sm space-y-1 list-decimal list-inside">
            <li>Coloca tus imágenes en <code className="bg-steel-100 px-1 rounded font-mono">public/images/</code></li>
            <li>
              En <code className="bg-steel-100 px-1 rounded font-mono">components/Gallery.tsx</code>,
              reemplaza el array <code className="bg-steel-100 px-1 rounded font-mono">placeholderItems</code> con los paths reales
            </li>
            <li>Usa el componente <code className="bg-steel-100 px-1 rounded font-mono">{"<Image src='/images/foto.jpg' .../>"}</code> de Next.js</li>
          </ol>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center
                     bg-black/80 backdrop-blur-sm p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.alt}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`bg-gradient-to-br ${currentItem.bg} aspect-video
                          flex flex-col items-center justify-center`}
            >
              <span className="text-7xl mb-4">{currentItem.icon}</span>
              <span className="text-white font-display font-bold text-xl">
                {currentItem.label}
              </span>
              <span className="text-white/60 text-sm mt-1">[Foto próximamente]</span>
            </div>
            <div className="p-4 flex items-center justify-between">
              <p className="text-navy-900 font-semibold">{currentItem.alt}</p>
              <button
                onClick={closeLightbox}
                className="text-steel-500 hover:text-navy-900 p-2 rounded-lg
                           hover:bg-steel-100 transition-colors"
                aria-label="Cerrar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
