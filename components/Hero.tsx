"use client";

const WA_NUMBER = "526461388345";
const WA_MSG = encodeURIComponent(
  "Hola, quiero una cotización. Servicio: __. Ruta: __. Fecha: __."
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector("#contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero hero-pattern"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle top-right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full
                        bg-navy-700/30 blur-3xl" />
        {/* Medium circle bottom-left */}
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full
                        bg-blue-brand/20 blur-3xl" />
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]"
             xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Orange accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r
                        from-transparent via-orange-brand to-transparent opacity-60" />
      </div>

      {/* Animated truck illustration (SVG) */}
      <div className="absolute right-0 bottom-0 w-full h-full pointer-events-none hidden lg:block">
        <div className="absolute bottom-0 right-0 w-[700px] opacity-[0.07]">
          <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Simplified truck silhouette */}
            <rect x="0" y="200" width="580" height="160" rx="8" fill="white"/>
            <rect x="580" y="240" width="180" height="120" rx="8" fill="white"/>
            <rect x="600" y="260" width="140" height="80" rx="4" fill="#020f2e"/>
            <circle cx="120" cy="370" r="45" fill="#020f2e" stroke="white" strokeWidth="12"/>
            <circle cx="120" cy="370" r="22" fill="white"/>
            <circle cx="460" cy="370" r="45" fill="#020f2e" stroke="white" strokeWidth="12"/>
            <circle cx="460" cy="370" r="22" fill="white"/>
            <circle cx="660" cy="370" r="45" fill="#020f2e" stroke="white" strokeWidth="12"/>
            <circle cx="660" cy="370" r="22" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 py-32 text-center lg:text-left">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                          bg-white/10 backdrop-blur-sm border border-white/20
                          text-steel-100 text-sm font-medium mb-8
                          animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-orange-brand animate-pulse" />
            Operamos desde Ensenada, Baja California
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black
                         text-white leading-none mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}>
            Transportes
            <span className="block text-orange-brand mt-1">SLM</span>
          </h1>

          {/* Subtitle */}
          <p className="text-steel-200 text-xl sm:text-2xl font-light leading-relaxed
                        mb-10 max-w-2xl animate-fade-up"
             style={{ animationDelay: "0.2s" }}>
            Transporte de carga en{" "}
            <span className="text-white font-medium">Baja California</span>,{" "}
            <span className="text-white font-medium">Baja California Sur</span>,{" "}
            <span className="text-white font-medium">Sonora</span> y{" "}
            <span className="text-white font-medium">Chihuahua</span>.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-12
                          animate-fade-up"
               style={{ animationDelay: "0.3s" }}>
            {[
              { value: "4", label: "Estados cubiertos" },
              { value: "24/7", label: "Seguimiento de carga" },
              { value: "100%", label: "Compromiso de entrega" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-3xl font-display font-black text-orange-brand">
                  {stat.value}
                </div>
                <div className="text-steel-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start
                          animate-fade-up"
               style={{ animationDelay: "0.4s" }}>
            {/* WhatsApp CTA */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4
                         rounded-xl bg-[#25D366] hover:bg-[#20c05c]
                         text-white font-bold text-base
                         shadow-lg hover:shadow-green-500/30
                         transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L.057 23.428a.5.5 0 00.604.617l5.7-1.496A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.943 0-3.765-.524-5.33-1.432l-.382-.225-3.946 1.035 1.052-3.844-.248-.396A9.936 9.936 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Cotizar por WhatsApp
            </a>

            {/* Form CTA */}
            <button
              onClick={scrollToContact}
              className="btn-secondary"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Cotizar aquí
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col
                      items-center gap-2 text-steel-400 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
