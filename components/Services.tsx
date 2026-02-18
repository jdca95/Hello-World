"use client";

const services = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        {/* Container / Shipping box icon */}
        <rect x="4" y="16" width="56" height="36" rx="3" stroke="currentColor" strokeWidth="3"/>
        <line x1="4" y1="28" x2="60" y2="28" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="4" y1="40" x2="60" y2="40" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="18" y1="16" x2="18" y2="52" stroke="currentColor" strokeWidth="2"/>
        <line x1="32" y1="16" x2="32" y2="52" stroke="currentColor" strokeWidth="2"/>
        <line x1="46" y1="16" x2="46" y2="52" stroke="currentColor" strokeWidth="2"/>
        <rect x="28" y="12" width="8" height="6" rx="1" fill="currentColor"/>
      </svg>
    ),
    title: "Contenedores",
    description:
      "Transporte de contenedores de 20 y 40 pies desde y hacia puertos, patios y destinos en el noroeste de México. Manejo seguro y eficiente.",
    features: ["20' y 40' HC", "Puerto a destino", "Patio a patio"],
    color: "from-navy-800 to-navy-700",
    accent: "bg-navy-100 text-navy-700",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        {/* Dry van / box truck icon */}
        <rect x="4" y="18" width="42" height="30" rx="2" stroke="currentColor" strokeWidth="3"/>
        <path d="M46 28 L60 32 L60 48 L46 48 Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <rect x="48" y="32" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="2"/>
        <circle cx="14" cy="52" r="6" stroke="currentColor" strokeWidth="3"/>
        <circle cx="14" cy="52" r="2" fill="currentColor"/>
        <circle cx="52" cy="52" r="6" stroke="currentColor" strokeWidth="3"/>
        <circle cx="52" cy="52" r="2" fill="currentColor"/>
        <line x1="46" y1="18" x2="46" y2="48" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Caja Seca",
    description:
      "Ideal para mercancía general, manufactura y productos no perecederos. Unidades modernas con capacidad de hasta 24 toneladas.",
    features: ["Hasta 24 ton", "Merch. general", "Manufactura"],
    color: "from-blue-600 to-blue-500",
    accent: "bg-blue-50 text-blue-700",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        {/* Refrigerated truck icon */}
        <rect x="4" y="18" width="42" height="30" rx="2" stroke="currentColor" strokeWidth="3"/>
        <path d="M46 28 L60 32 L60 48 L46 48 Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <rect x="48" y="32" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="2"/>
        <circle cx="14" cy="52" r="6" stroke="currentColor" strokeWidth="3"/>
        <circle cx="14" cy="52" r="2" fill="currentColor"/>
        <circle cx="52" cy="52" r="6" stroke="currentColor" strokeWidth="3"/>
        <circle cx="52" cy="52" r="2" fill="currentColor"/>
        {/* Snowflake */}
        <line x1="25" y1="25" x2="25" y2="41" stroke="currentColor" strokeWidth="2"/>
        <line x1="17" y1="33" x2="33" y2="33" stroke="currentColor" strokeWidth="2"/>
        <line x1="19" y1="27" x2="31" y2="39" stroke="currentColor" strokeWidth="2"/>
        <line x1="31" y1="27" x2="19" y2="39" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Caja Refrigerada",
    description:
      "Transporte de productos perecederos con temperatura controlada. Perfecto para alimentos, farmacéuticos y productos sensibles al calor.",
    features: ["Temp. controlada", "Alimentos/Pharma", "Cadena de frío"],
    color: "from-cyan-700 to-cyan-600",
    accent: "bg-cyan-50 text-cyan-700",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        {/* Flatbed platform icon */}
        <rect x="4" y="38" width="56" height="8" rx="2" stroke="currentColor" strokeWidth="3"/>
        <path d="M8 38 L8 22 L28 22 L28 38" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <rect x="30" y="26" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
        <circle cx="14" cy="52" r="6" stroke="currentColor" strokeWidth="3"/>
        <circle cx="14" cy="52" r="2" fill="currentColor"/>
        <circle cx="40" cy="52" r="6" stroke="currentColor" strokeWidth="3"/>
        <circle cx="40" cy="52" r="2" fill="currentColor"/>
        <circle cx="56" cy="52" r="6" stroke="currentColor" strokeWidth="3"/>
        <circle cx="56" cy="52" r="2" fill="currentColor"/>
        {/* Chains/straps */}
        <line x1="34" y1="26" x2="34" y2="46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
        <line x1="44" y1="26" x2="44" y2="46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
      </svg>
    ),
    title: "Plataformas",
    description:
      "Transporte de maquinaria pesada, estructuras metálicas y carga sobredimensionada en plataformas lowboy y extendidas.",
    features: ["Carga especial", "Maquinaria", "Sobredimensionada"],
    color: "from-orange-600 to-orange-500",
    accent: "bg-orange-50 text-orange-700",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-steel-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-brand font-semibold text-sm
                           tracking-widest uppercase mb-3">
            Lo que ofrecemos
          </span>
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle mx-auto text-steel-500">
            Contamos con unidades especializadas para cada tipo de carga.
            Cobertura en el noroeste de México con puntualidad garantizada.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-service group flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color}
                             text-white flex items-center justify-center mb-6
                             group-hover:scale-110 transition-transform duration-300 shadow-md`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl text-navy-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-steel-500 text-sm leading-relaxed flex-1 mb-5">
                {service.description}
              </p>

              {/* Features */}
              <ul className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className={`text-xs font-medium px-3 py-1 rounded-full ${service.accent}`}
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-steel-500 mb-4">
            ¿Necesitas un servicio personalizado?
          </p>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Solicitar cotización
          </a>
        </div>
      </div>
    </section>
  );
}
