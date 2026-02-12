const estados = [
  {
    nombre: "Baja California",
    ciudades: "Ensenada, Tijuana, Mexicali, Tecate, Rosarito",
  },
  {
    nombre: "Baja California Sur",
    ciudades: "La Paz, Los Cabos, Ciudad Constitución, Guerrero Negro",
  },
  {
    nombre: "Sonora",
    ciudades: "Hermosillo, Nogales, Ciudad Obregón, Guaymas, Puerto Peñasco",
  },
  {
    nombre: "Chihuahua",
    ciudades: "Chihuahua, Ciudad Juárez, Delicias, Cuauhtémoc",
  },
];

export default function Cobertura() {
  return (
    <section id="cobertura" className="bg-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: info */}
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-accent">
              Cobertura
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
              Presencia en el noroeste de México
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              Operamos desde{" "}
              <span className="font-semibold text-primary">
                Ensenada, Baja California
              </span>
              , con cobertura en los principales corredores logísticos del
              noroeste del país. Nuestra ubicación estratégica nos permite
              ofrecer tiempos de tránsito competitivos y servicio eficiente en
              toda la región.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {estados.map((estado) => (
                <div
                  key={estado.nombre}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <svg
                        className="h-5 w-5 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-primary">{estado.nombre}</h3>
                  </div>
                  <p className="mt-2 text-sm text-steel">{estado.ciudades}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual map placeholder */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-light p-8 shadow-2xl">
              {/* Stylized map representation */}
              <div className="flex h-full flex-col items-center justify-center text-center">
                <svg
                  className="mb-6 h-24 w-24 text-white/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-white">
                  4 Estados
                </h3>
                <p className="mt-2 text-white/70">
                  Baja California &bull; Baja California Sur
                  <br />
                  Sonora &bull; Chihuahua
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  Base: Ensenada, BC
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl bg-accent/20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-accent/20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
