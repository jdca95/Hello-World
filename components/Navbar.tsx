"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Galería",   href: "#galeria" },
  { label: "Contacto",  href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container-max flex items-center justify-between h-[72px] px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
          className="flex items-center gap-3 group"
          aria-label="Transportes SLM — Inicio"
        >
          <div className="relative w-10 h-10 flex-shrink-0">
            {/* Placeholder logo container — reemplazar con <Image> cuando suba el logo */}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-navy-700 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="text-white font-display font-black text-sm leading-none">SLM</span>
            </div>
          </div>
          <span className="text-white font-display font-bold text-xl tracking-wide leading-none">
            Transportes
            <span className="block text-orange-brand text-base font-semibold tracking-widest uppercase">
              SLM
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-steel-200 hover:text-white text-sm font-medium
                           relative after:absolute after:bottom-[-3px] after:left-0
                           after:h-[2px] after:w-0 after:bg-orange-brand
                           after:transition-all after:duration-200
                           hover:after:w-full transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button (desktop) */}
        <a
          href="#contacto"
          onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
          className="hidden md:inline-flex btn-primary"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Cotizar
        </a>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-navy-950/98 backdrop-blur-md border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-steel-200 hover:text-white hover:bg-white/10
                         px-4 py-3 rounded-lg text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
            className="btn-primary mt-2 justify-center"
          >
            Cotizar
          </a>
        </div>
      </div>
    </header>
  );
}
