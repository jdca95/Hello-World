"use client";

import { useState } from "react";

const servicioOptions = [
  "Contenedores",
  "Caja Seca",
  "Caja Refrigerada",
  "Plataformas",
  "Otro",
];

interface FormData {
  nombre: string;
  empresa: string;
  telefono: string;
  email: string;
  servicio: string;
  ruta: string;
  mensaje: string;
}

const initialForm: FormData = {
  nombre: "",
  empresa: "",
  telefono: "",
  email: "",
  servicio: "",
  ruta: "",
  mensaje: "",
};

export default function Contacto() {
  const [form, setForm] = useState<FormData>(initialForm);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Cotización Transportes SLM");
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmpresa: ${form.empresa}\nTeléfono: ${form.telefono}\nEmail: ${form.email}\nTipo de servicio: ${form.servicio}\nRuta / Origen-Destino: ${form.ruta}\n\nMensaje:\n${form.mensaje}`
    );

    window.location.href = `mailto:diego.castro.rgz@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">
            Contacto
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            Solicita tu cotización
          </h2>
          <p className="mt-4 text-lg text-steel">
            Completa el formulario y nos pondremos en contacto contigo a la
            brevedad.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          {/* Contact info */}
          <div className="space-y-6 lg:col-span-1">
            {/* Phone */}
            <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-light p-6">
              <div className="flex-shrink-0 rounded-lg bg-accent/10 p-3 text-accent">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-primary">Teléfono</h3>
                <a
                  href="tel:+526461388345"
                  className="mt-1 text-steel transition-colors hover:text-accent"
                >
                  646 138 8345
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-light p-6">
              <div className="flex-shrink-0 rounded-lg bg-accent/10 p-3 text-accent">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-primary">Correo electrónico</h3>
                <a
                  href="mailto:diego.castro.rgz@gmail.com"
                  className="mt-1 text-sm text-steel transition-colors hover:text-accent"
                >
                  diego.castro.rgz@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-light p-6">
              <div className="flex-shrink-0 rounded-lg bg-accent/10 p-3 text-accent">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
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
              <div>
                <h3 className="font-bold text-primary">Ubicación</h3>
                <p className="mt-1 text-sm text-steel">
                  Ensenada, Baja California, México
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-gray-100 bg-light p-8 shadow-sm lg:col-span-2"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-1.5 block text-sm font-semibold text-primary"
                >
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>

              {/* Empresa */}
              <div>
                <label
                  htmlFor="empresa"
                  className="mb-1.5 block text-sm font-semibold text-primary"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label
                  htmlFor="telefono"
                  className="mb-1.5 block text-sm font-semibold text-primary"
                >
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="646 123 4567"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-semibold text-primary"
                >
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>
            </div>

            {/* Tipo de servicio */}
            <div>
              <label
                htmlFor="servicio"
                className="mb-1.5 block text-sm font-semibold text-primary"
              >
                Tipo de servicio *
              </label>
              <select
                id="servicio"
                name="servicio"
                required
                value={form.servicio}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
              >
                <option value="">Selecciona un servicio</option>
                {servicioOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Ruta */}
            <div>
              <label
                htmlFor="ruta"
                className="mb-1.5 block text-sm font-semibold text-primary"
              >
                Ruta / Origen – Destino *
              </label>
              <input
                type="text"
                id="ruta"
                name="ruta"
                required
                value={form.ruta}
                onChange={handleChange}
                placeholder="Ej. Ensenada → Hermosillo"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label
                htmlFor="mensaje"
                className="mb-1.5 block text-sm font-semibold text-primary"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Detalles adicionales sobre tu carga, fechas, etc."
                className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-accent px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-xl sm:w-auto"
            >
              Enviar cotización
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
