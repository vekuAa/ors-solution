import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChallengesSection from "@/components/ChallengesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import MethodSection from "@/components/MethodSection";
import RoiCalculator from "@/components/RoiCalculator";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ChallengesSection />
        <BeforeAfterSection />
        <MethodSection />
        <RoiCalculator />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}