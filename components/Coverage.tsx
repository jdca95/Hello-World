const states = [
  {
    name: "Baja California",
    abbr: "BC",
    cities: ["Ensenada", "Tijuana", "Mexicali", "Tecate", "San Quintín"],
    gradient: "from-navy-800 to-navy-700",
    note: "Base de operaciones",
  },
  {
    name: "Baja California Sur",
    abbr: "BCS",
    cities: ["La Paz", "Los Cabos", "Ciudad Constitución", "Loreto", "Mulegé"],
    gradient: "from-blue-600 to-blue-500",
    note: "Cobertura peninsular",
  },
  {
    name: "Sonora",
    abbr: "SON",
    cities: ["Hermosillo", "Nogales", "Guaymas", "Ciudad Obregón", "San Luis RC"],
    gradient: "from-cyan-700 to-cyan-600",
    note: "Frontera y puerto",
  },
  {
    name: "Chihuahua",
    abbr: "CHIH",
    cities: ["Ciudad Juárez", "Chihuahua", "Delicias", "Cuauhtémoc", "Parral"],
    gradient: "from-orange-600 to-orange-500",
    note: "Corredor industrial",
  },
];

export default function Coverage() {
  return (
    <section id="cobertura" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-brand font-semibold text-sm
                           tracking-widest uppercase mb-3">
            Dónde operamos
          </span>
          <h2 className="section-title">Cobertura</h2>
          <p className="section-subtitle mx-auto">
            Con base en <strong className="text-navy-800">Ensenada, Baja California</strong>,
            operamos rutas en todo el noroeste de México con flota propia y
            alianzas estratégicas de transporte.
          </p>
        </div>

        {/* Map + states layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Mexico map placeholder — izquierda */}
          <div className="lg:col-span-2 flex flex-col items-center">
            <div className="relative w-full max-w-xs mx-auto">
              {/* SVG map placeholder (Baja California + noroeste de Mexico) */}
              <div className="bg-steel-50 rounded-3xl p-6 border border-steel-100 shadow-card">
                <svg
                  viewBox="0 0 300 380"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                >
                  {/* México mainland rough shape */}
                  <path
                    d="M80 20 L220 20 L280 80 L300 160 L260 200 L250 280 L200 340 L160 370
                       L120 340 L80 300 L40 250 L20 180 L30 100 Z"
                    fill="#e2e8ed" stroke="#c8d2db" strokeWidth="1.5"
                  />
                  {/* Sonora region */}
                  <path
                    d="M80 20 L160 20 L180 80 L160 140 L100 150 L60 120 L30 80 Z"
                    fill="#0891b2" opacity="0.7"
                  />
                  {/* Chihuahua region */}
                  <path
                    d="M160 20 L220 20 L240 30 L260 80 L220 120 L180 120 L160 80 Z"
                    fill="#ea580c" opacity="0.65"
                  />
                  {/* Baja California peninsula */}
                  <path
                    d="M20 60 L50 50 L70 80 L75 130 L70 180 L60 220 L50 260
                       L40 280 L25 285 L15 260 L10 210 L10 150 L15 100 Z"
                    fill="#1a4680" opacity="0.85"
                  />
                  {/* BCS lower part */}
                  <path
                    d="M40 200 L60 210 L70 220 L70 260 L65 300 L55 330
                       L40 340 L28 320 L25 285 L35 250 Z"
                    fill="#2563eb" opacity="0.7"
                  />

                  {/* Labels */}
                  <text x="35" y="145" fontSize="7" fill="white" fontWeight="bold"
                        fontFamily="system-ui" textAnchor="middle">BC</text>
                  <text x="43" y="275" fontSize="7" fill="white" fontWeight="bold"
                        fontFamily="system-ui" textAnchor="middle">BCS</text>
                  <text x="110" y="95" fontSize="7" fill="white" fontWeight="bold"
                        fontFamily="system-ui" textAnchor="middle">SON</text>
                  <text x="205" y="75" fontSize="7" fill="white" fontWeight="bold"
                        fontFamily="system-ui" textAnchor="middle">CHIH</text>

                  {/* Star for Ensenada */}
                  <path
                    d="M36 168 L38 163 L40 168 L45 168 L41 171 L43 176 L38 173 L33 176 L35 171 L31 168 Z"
                    fill="#f97316"
                  />
                </svg>

                {/* Legend */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {[
                    { color: "bg-navy-700", label: "BC" },
                    { color: "bg-blue-600", label: "BCS" },
                    { color: "bg-cyan-700", label: "Sonora" },
                    { color: "bg-orange-600", label: "Chihuahua" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-sm ${item.color}`} />
                      <span className="text-xs text-steel-600 font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-steel-200">
                  <span className="w-3 h-3 rounded-full bg-orange-brand flex-shrink-0" />
                  <span className="text-xs text-steel-600">Base: Ensenada, BC</span>
                </div>
              </div>
            </div>
          </div>

          {/* States list — derecha */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {states.map((state) => (
              <div
                key={state.name}
                className="rounded-2xl border border-steel-100 overflow-hidden
                           shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                {/* State header */}
                <div className={`bg-gradient-to-r ${state.gradient} px-5 py-4`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white/70 text-xs font-medium uppercase tracking-wider">
                        {state.note}
                      </span>
                      <h3 className="text-white font-display font-bold text-lg leading-tight">
                        {state.name}
                      </h3>
                    </div>
                    <div className="text-white/30 font-display font-black text-3xl">
                      {state.abbr}
                    </div>
                  </div>
                </div>
                {/* Cities */}
                <div className="bg-white px-5 py-4">
                  <ul className="space-y-1.5">
                    {state.cities.map((city) => (
                      <li key={city} className="flex items-center gap-2 text-steel-600 text-sm">
                        <svg className="w-3.5 h-3.5 text-orange-brand flex-shrink-0"
                             fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"/>
                        </svg>
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info bar */}
        <div className="mt-12 bg-navy-950 rounded-2xl px-8 py-6 flex flex-col sm:flex-row
                        items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-brand/20 flex items-center
                            justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-orange-brand" fill="none"
                   stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <p className="text-steel-200 text-sm">
              <span className="text-white font-semibold">¿Tu ruta no está en la lista?</span>{" "}
              Contáctanos — evaluamos rutas especiales según volumen y frecuencia.
            </p>
          </div>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary flex-shrink-0"
          >
            Consultar ruta
          </a>
        </div>
      </div>
    </section>
  );
}
