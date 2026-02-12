import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transportes SLM | Transporte de Carga en el Noroeste de México",
  description:
    "Transporte de carga confiable en Baja California, Baja California Sur, Sonora y Chihuahua. Contenedores, caja seca, caja refrigerada y plataformas. Cotiza ahora.",
  keywords: [
    "transporte de carga",
    "transporte Baja California",
    "transporte Sonora",
    "transporte Chihuahua",
    "contenedores",
    "caja seca",
    "caja refrigerada",
    "plataformas",
    "transporte Ensenada",
    "logística noroeste México",
    "Transportes SLM",
  ],
  authors: [{ name: "Transportes SLM" }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Transportes SLM",
    title: "Transportes SLM | Transporte de Carga en el Noroeste de México",
    description:
      "Transporte de carga confiable en Baja California, Baja California Sur, Sonora y Chihuahua. Cotiza ahora.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
