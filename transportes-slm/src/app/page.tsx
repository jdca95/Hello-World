import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Cobertura from "@/components/Cobertura";
import PorQueNosotros from "@/components/PorQueNosotros";
import Galeria from "@/components/Galeria";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Cobertura />
        <PorQueNosotros />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
