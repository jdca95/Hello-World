const placeholders = [
  { id: 1, alt: "Contenedor en tránsito", label: "Contenedores" },
  { id: 2, alt: "Caja seca en carretera", label: "Caja Seca" },
  { id: 3, alt: "Unidad refrigerada", label: "Caja Refrigerada" },
  { id: 4, alt: "Plataforma con carga", label: "Plataformas" },
  { id: 5, alt: "Flota estacionada", label: "Nuestra Flota" },
  { id: 6, alt: "Operación logística", label: "Operación" },
  { id: 7, alt: "Ruta en Baja California", label: "Rutas BC" },
  { id: 8, alt: "Entrega exitosa", label: "Entregas" },
];

export default function Galeria() {
  return (
    <section id="galeria" className="bg-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">
            Galería
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            Nuestra operación en imágenes
          </h2>
          <p className="mt-4 text-lg text-steel">
            Conoce nuestra flota, rutas y el profesionalismo de cada servicio
            que realizamos.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {placeholders.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/80 to-primary-light/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index === 0 || index === 5
                  ? "sm:col-span-2 sm:row-span-2"
                  : ""
              }`}
            >
              {/* Placeholder visual */}
              <div
                className={`flex items-center justify-center ${
                  index === 0 || index === 5
                    ? "aspect-square sm:aspect-auto sm:h-full sm:min-h-[320px]"
                    : "aspect-[4/3]"
                }`}
              >
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M6.75 3h10.5A2.25 2.25 0 0119.5 5.25v13.5A2.25 2.25 0 0117.25 21H6.75A2.25 2.25 0 014.5 18.75V5.25A2.25 2.25 0 016.75 3zm3.75 6.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                    />
                  </svg>
                  <p className="mt-2 text-sm font-medium text-white/60">
                    {item.label}
                  </p>
                </div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                <p className="p-4 text-sm font-semibold text-white">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-steel-light">
          Próximamente más fotos de nuestra operación. ¡Estamos en constante
          crecimiento!
        </p>
      </div>
    </section>
  );
}
