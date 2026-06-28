import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import RoiCalculator from "@/components/RoiCalculator";
import PremiumSection from "@/components/PremiumSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <RoiCalculator />
        <PremiumSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}