import Navbar from "@/components/Navbar";
import HeroAboutSection from "@/components/HeroAboutSection";
import PsychologistBioSection from "@/components/PsychologistBioSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ClinicSection from "@/components/ClinicSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroAboutSection />
        <PsychologistBioSection />
        <ServicesSection />
        <ProcessSection />
        <ClinicSection />
        <FaqSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
