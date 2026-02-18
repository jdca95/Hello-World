"use client";

import { useState, FormEvent } from "react";

const CONTACT_EMAIL = "diego.castro.rgz@gmail.com";
const CONTACT_TEL = "6461388345";
const WA_NUMBER = "526461388345";

type FormData = {
  nombre: string;
  empresa: string;
  telefono: string;
  email: string;
  servicio: string;
  ruta: string;
  mensaje: string;
};

const initialForm: FormData = {
  nombre: "",
  empresa: "",
  telefono: "",
  email: "",
  servicio: "",
  ruta: "",
  mensaje: "",
};

const serviceOptions = [
  "Contenedor 20'",
  "Contenedor 40'",
  "Caja Seca",
  "Caja Refrigerada",
  "Plataforma",
  "Otro",
];

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.nombre.trim()) newErrors.nombre = "El nombre es requerido";
    if (!form.telefono.trim()) newErrors.telefono = "El teléfono es requerido";
    if (!form.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Ingresa un email válido";
    }
    if (!form.servicio) newErrors.servicio = "Selecciona un tipo de servicio";
    if (!form.ruta.trim()) newErrors.ruta = "Indica la ruta origen-destino";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent("Cotización Transportes SLM");
    const body = encodeURIComponent(
      `Cotización Transportes SLM\n` +
      `${"=".repeat(40)}\n\n` +
      `Nombre:        ${form.nombre}\n` +
      `Empresa:       ${form.empresa || "N/A"}\n` +
      `Teléfono:      ${form.telefono}\n` +
      `Email:         ${form.email}\n` +
      `Servicio:      ${form.servicio}\n` +
      `Ruta:          ${form.ruta}\n\n` +
      `Mensaje:\n${form.mensaje || "Sin mensaje adicional"}\n\n` +
      `${"=".repeat(40)}\n` +
      `Enviado desde: transportesslm.com`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-brand font-semibold text-sm
                           tracking-widest uppercase mb-3">
            Contáctanos
          </span>
          <h2 className="section-title">Solicita tu Cotización</h2>
          <p className="section-subtitle mx-auto">
            Cuéntanos tu necesidad de transporte y te responderemos a la brevedad
            con la mejor opción para tu carga.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact info panel */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-hero rounded-2xl p-8 text-white sticky top-24">
              <h3 className="font-display font-bold text-xl mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center
                                  justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-brand" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-steel-300 text-sm mb-0.5">Teléfono</p>
                    <a
                      href={`tel:${CONTACT_TEL}`}
                      className="text-white font-semibold text-lg hover:text-orange-brand
                                 transition-colors"
                    >
                      646 138 8345
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center
                                  justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-brand" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-steel-300 text-sm mb-0.5">Correo electrónico</p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-white font-semibold hover:text-orange-brand
                                 transition-colors break-all"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center
                                  justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-brand" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-steel-300 text-sm mb-0.5">Base de operaciones</p>
                    <p className="text-white font-semibold">
                      Ensenada, Baja California
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-steel-300 text-sm mb-3">
                    ¿Prefieres chatear directamente?
                  </p>
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                      "Hola, quiero una cotización. Servicio: __. Ruta: __. Fecha: __."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl
                               bg-[#25D366] hover:bg-[#20c05c] text-white font-semibold text-sm
                               transition-all duration-200 hover:-translate-y-0.5 w-full justify-center"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L.057 23.428a.5.5 0 00.604.617l5.7-1.496A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.943 0-3.765-.524-5.33-1.432l-.382-.225-3.946 1.035 1.052-3.844-.248-.396A9.936 9.936 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                    Escribir por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8
                              text-center animate-fade-up">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center
                                justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none"
                       stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-navy-900 mb-2">
                  ¡Cotización enviada!
                </h3>
                <p className="text-steel-500">
                  Tu cliente de correo se ha abierto con la información.
                  Te responderemos a la brevedad posible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-2xl border border-steel-100 shadow-card p-8 space-y-5"
              >
                <h3 className="font-display font-bold text-xl text-navy-900 mb-1">
                  Formulario de Cotización
                </h3>
                <p className="text-steel-400 text-sm mb-6">
                  Todos los campos marcados con <span className="text-red-500">*</span> son requeridos.
                </p>

                {/* Nombre + Empresa */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-1.5">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                      className={`input-field ${errors.nombre ? "border-red-400 focus:ring-red-400" : ""}`}
                    />
                    {errors.nombre && (
                      <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-1.5">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="input-field"
                    />
                  </div>
                </div>

                {/* Teléfono + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-1.5">
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="664 123 4567"
                      className={`input-field ${errors.telefono ? "border-red-400 focus:ring-red-400" : ""}`}
                    />
                    {errors.telefono && (
                      <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="correo@empresa.com"
                      className={`input-field ${errors.email ? "border-red-400 focus:ring-red-400" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Tipo de servicio */}
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-1.5">
                    Tipo de servicio <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    className={`input-field ${errors.servicio ? "border-red-400 focus:ring-red-400" : ""}`}
                  >
                    <option value="">Selecciona un servicio...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.servicio && (
                    <p className="text-red-500 text-xs mt-1">{errors.servicio}</p>
                  )}
                </div>

                {/* Ruta */}
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-1.5">
                    Ruta / Origen → Destino <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="ruta"
                    value={form.ruta}
                    onChange={handleChange}
                    placeholder="Ej: Ensenada, BC → Hermosillo, Son"
                    className={`input-field ${errors.ruta ? "border-red-400 focus:ring-red-400" : ""}`}
                  />
                  {errors.ruta && (
                    <p className="text-red-500 text-xs mt-1">{errors.ruta}</p>
                  )}
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-1.5">
                    Información adicional
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Peso de la carga, dimensiones, fecha estimada de envío, mercancía especial..."
                    className="input-field resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary w-full justify-center py-4 text-base"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                  Enviar cotización
                </button>

                <p className="text-steel-400 text-xs text-center">
                  Al hacer clic se abrirá tu cliente de correo con todos los datos prellenados.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
