"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex-shrink-0">
          <Image
            src="/images/logo-placeholder.svg"
            alt="Transportes SLM"
            width={180}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-accent-light hover:shadow-lg"
          >
            Cotizar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menú"
        >
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              scrolled ? "bg-primary" : "bg-white"
            } ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              scrolled ? "bg-primary" : "bg-white"
            } ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              scrolled ? "bg-primary" : "bg-white"
            } ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white shadow-lg transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white transition-all hover:bg-accent-light"
          >
            Cotizar
          </a>
        </div>
      </div>
    </header>
  );
}
