"use client";

import { useState, useEffect } from "react";

const WA_NUMBER = "526461388345";
const WA_MSG = encodeURIComponent(
  "Hola, quiero una cotización. Servicio: __. Ruta: __. Fecha: __."
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(true);

  useEffect(() => {
    // Show button after slight delay
    const t1 = setTimeout(() => setVisible(true), 1200);
    // Auto-hide tooltip after 5s
    const t2 = setTimeout(() => setTooltip(false), 5000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3
                  transition-all duration-500
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {/* Tooltip */}
      <div
        className={`bg-white text-navy-900 text-sm font-medium px-4 py-2
                    rounded-xl shadow-card border border-steel-100
                    transition-all duration-300 whitespace-nowrap
                    ${tooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}`}
      >
        <span>¡Cotiza por WhatsApp!</span>
        {/* Arrow */}
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2
                        w-3 h-3 bg-white border-t border-r border-steel-100
                        rotate-45" />
      </div>

      {/* Button */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cotizar por WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20c05c]
                   shadow-lg hover:shadow-green-500/40
                   flex items-center justify-center
                   transition-all duration-200 hover:scale-110 wa-pulse"
        onClick={() => setTooltip(false)}
      >
        <svg
          className="w-7 h-7 text-white relative z-10"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L.057 23.428a.5.5 0 00.604.617l5.7-1.496A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.943 0-3.765-.524-5.33-1.432l-.382-.225-3.946 1.035 1.052-3.844-.248-.396A9.936 9.936 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>
    </div>
  );
}
