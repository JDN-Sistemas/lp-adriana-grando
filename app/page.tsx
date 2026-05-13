import Navbar from "@/components/Navbar";
import HeroAboutSection from "@/components/HeroAboutSection";
import ServicesSection from "@/components/ServicesSection";
import ClinicSection from "@/components/ClinicSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroAboutSection />
        <ServicesSection />
        <ClinicSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
