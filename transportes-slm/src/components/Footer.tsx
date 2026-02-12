export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-extrabold text-white">
              Transportes <span className="text-accent">SLM</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Transporte de carga confiable en el noroeste de México. Operando
              desde Ensenada, Baja California.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-300">
              Navegación
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#servicios", label: "Servicios" },
                { href: "#cobertura", label: "Cobertura" },
                { href: "#galeria", label: "Galería" },
                { href: "#contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-300">
              Servicios
            </h4>
            <ul className="space-y-2">
              {[
                "Contenedores",
                "Caja Seca",
                "Caja Refrigerada",
                "Plataformas",
              ].map((s) => (
                <li key={s}>
                  <span className="text-sm text-gray-400">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-300">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="tel:+526461388345"
                  className="transition-colors hover:text-white"
                >
                  646 138 8345
                </a>
              </li>
              <li>
                <a
                  href="mailto:diego.castro.rgz@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  diego.castro.rgz@gmail.com
                </a>
              </li>
              <li>Ensenada, Baja California</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {year} Transportes SLM. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
