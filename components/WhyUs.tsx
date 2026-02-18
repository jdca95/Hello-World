"use client";

const bullets = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Puntualidad garantizada",
    description:
      "Cumplimos los tiempos acordados. Cada entrega es monitoreada desde el origen hasta el destino final.",
    stat: "98%",
    statLabel: "entregas a tiempo",
    color: "text-navy-700 bg-navy-100",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
      </svg>
    ),
    title: "Seguimiento en tiempo real",
    description:
      "Mantente informado del estatus de tu carga en todo momento. Actualizaciones proactivas durante el trayecto.",
    stat: "24/7",
    statLabel: "monitoreo activo",
    color: "text-blue-700 bg-blue-100",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Prueba de entrega (POD)",
    description:
      "Entregamos documentación completa: firma del receptor, fotografías y hora exacta de entrega.",
    stat: "100%",
    statLabel: "POD documentado",
    color: "text-cyan-700 bg-cyan-100",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: "Atención directa",
    description:
      "Sin intermediarios. Hablas directamente con quien toma las decisiones para una comunicación ágil y efectiva.",
    stat: "1",
    statLabel: "punto de contacto",
    color: "text-orange-700 bg-orange-100",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: "Seguridad de la carga",
    description:
      "Unidades con GPS, operadores certificados y protocolos de seguridad para proteger tu mercancía en todo el trayecto.",
    stat: "0",
    statLabel: "incidentes en 2024",
    color: "text-green-700 bg-green-100",
  },
];

export default function WhyUs() {
  return (
    <section
      id="por-que-nosotros"
      className="section-padding bg-gradient-hero hero-pattern relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[800px] h-[800px] rounded-full
                        bg-navy-700/10 blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-brand font-semibold text-sm
                           tracking-widest uppercase mb-3">
            Nuestro compromiso
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            ¿Por qué elegir <span className="text-orange-brand">Transportes SLM</span>?
          </h2>
          <p className="text-steel-300 text-lg max-w-2xl mx-auto">
            Más que transporte — somos tu socio logístico en el noroeste de México.
            Cada servicio está respaldado por años de experiencia en la región.
          </p>
        </div>

        {/* Bullets grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bullets.map((item, i) => (
            <div
              key={item.title}
              className={`bg-white/5 backdrop-blur-sm border border-white/10
                          rounded-2xl p-6 hover:bg-white/10
                          transition-all duration-300 hover:-translate-y-1
                          ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${item.color}
                              flex items-center justify-center mb-4`}>
                {item.icon}
              </div>

              {/* Stat */}
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-display font-black text-white">
                  {item.stat}
                </span>
                <span className="text-steel-300 text-xs font-medium">
                  {item.statLabel}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-white mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-steel-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-14 text-center">
          <blockquote className="text-steel-200 text-lg italic max-w-2xl mx-auto">
            &ldquo;Tu carga es nuestra responsabilidad desde que sale de origen hasta que
            llega a su destino.&rdquo;
          </blockquote>
          <cite className="text-orange-brand text-sm font-semibold not-italic mt-2 block">
            — Equipo Transportes SLM
          </cite>
        </div>
      </div>
    </section>
  );
}
