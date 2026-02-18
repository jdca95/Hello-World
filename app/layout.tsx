import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Transportes SLM | Transporte de Carga en Baja California y Noroeste",
  description:
    "Transportes SLM ofrece servicios de transporte de carga en Baja California, Baja California Sur, Sonora y Chihuahua. Contenedores, caja seca, caja refrigerada y plataformas. Operamos desde Ensenada, BC.",
  keywords:
    "transportes SLM, transporte de carga, Baja California, Ensenada, contenedores, caja seca, caja refrigerada, plataformas, Sonora, Chihuahua, flete, logística",
  authors: [{ name: "Transportes SLM" }],
  creator: "Transportes SLM",
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
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
