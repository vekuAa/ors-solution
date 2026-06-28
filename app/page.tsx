import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import RoiCalculator from "@/components/RoiCalculator";
import PremiumSection from "@/components/PremiumSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import MethodSection from "@/components/MethodSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import HiddenCostSection from "@/components/HiddenCostSection";
import SectorsSection from "@/components/SectorsSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <HiddenCostSection />
        <BeforeAfterSection />
        <RoiCalculator />
        <MethodSection />
        <PremiumSection />
        <WhyChooseSection />
        <SectorsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}