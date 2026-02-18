import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Transportes SLM | Transporte de Carga en Baja California y Noroeste",
  description:
    "Transportes SLM ofrece servicios de transporte de carga en Baja California, Baja California Sur, Sonora y Chihuahua. Contenedores, caja seca, caja refrigerada y plataformas. Operamos desde Ensenada, BC.",
  keywords:
    "transportes SLM, transporte de carga, Baja California, Ensenada, contenedores, caja seca, caja refrigerada, plataformas, Sonora, Chihuahua, flete, logística",
  authors: [{ name: "Transportes SLM" }],
  creator: "Transportes SLM",
  metadataBase: new URL("https://transportesslm.com"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://transportesslm.com",
    siteName: "Transportes SLM",
    title: "Transportes SLM | Transporte de Carga Profesional",
    description:
      "Servicio de transporte de carga confiable en el noroeste de México. Contenedores, caja seca, refrigerada y plataformas. Operamos desde Ensenada, BC.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Transportes SLM - Transporte de Carga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transportes SLM | Transporte de Carga",
    description:
      "Transporte de carga confiable en Baja California, BC Sur, Sonora y Chihuahua.",
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
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
