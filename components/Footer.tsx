const currentYear = new Date().getFullYear();

const navLinks = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Galería",   href: "#galeria" },
  { label: "Contacto",  href: "#contacto" },
];

const services = [
  "Contenedores 20' y 40'",
  "Caja Seca",
  "Caja Refrigerada",
  "Plataformas",
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 text-steel-300">
      {/* Main footer */}
      <div className="container-max px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-navy-700
                              flex items-center justify-center shadow-md">
                <span className="text-white font-display font-black text-sm">SLM</span>
              </div>
              <div>
                <span className="text-white font-display font-bold text-lg block leading-none">
                  Transportes
                </span>
                <span className="text-orange-brand font-display font-semibold text-sm
                                 tracking-widest uppercase">
                  SLM
                </span>
              </div>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed mb-6">
              Soluciones de transporte de carga confiable en el noroeste de México.
              Base de operaciones en Ensenada, Baja California.
            </p>
            {/* Contact info */}
            <div className="space-y-2">
              <a
                href="tel:6461388345"
                className="flex items-center gap-2 text-sm hover:text-orange-brand transition-colors"
              >
                <svg className="w-4 h-4 text-orange-brand flex-shrink-0"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                646 138 8345
              </a>
              <a
                href="mailto:diego.castro.rgz@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-orange-brand transition-colors break-all"
              >
                <svg className="w-4 h-4 text-orange-brand flex-shrink-0"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                diego.castro.rgz@gmail.com
              </a>
              <p className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-orange-brand flex-shrink-0"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Ensenada, Baja California
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm
                           uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-steel-400 hover:text-white text-sm
                               transition-colors hover:translate-x-0.5
                               inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-orange-brand
                                     transition-all duration-200 overflow-hidden" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm
                           uppercase tracking-wider mb-4">
              Servicios
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick("#servicios")}
                    className="text-steel-400 hover:text-white text-sm
                               transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-brand flex-shrink-0" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm
                           uppercase tracking-wider mb-4">
              Cobertura
            </h3>
            <ul className="space-y-2">
              {[
                "Baja California",
                "Baja California Sur",
                "Sonora",
                "Chihuahua",
              ].map((state) => (
                <li key={state} className="flex items-center gap-1.5 text-steel-400 text-sm">
                  <span className="w-1 h-1 rounded-full bg-orange-brand flex-shrink-0" />
                  {state}
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/526461388345?text=${encodeURIComponent(
                "Hola, quiero una cotización. Servicio: __. Ruta: __. Fecha: __."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-lg
                         bg-[#25D366] hover:bg-[#20c05c] text-white font-semibold text-sm
                         transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L.057 23.428a.5.5 0 00.604.617l5.7-1.496A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.943 0-3.765-.524-5.33-1.432l-.382-.225-3.946 1.035 1.052-3.844-.248-.396A9.936 9.936 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-5
                        flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-steel-500 text-sm text-center sm:text-left">
            © {currentYear} Transportes SLM. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1 text-steel-600 text-xs">
            <span>Ensenada, Baja California, México</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
