import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChallengeSection from "@/components/ChallengeSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ROISection from "@/components/ROISection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FlowSection from "@/components/FlowSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FounderSection from "@/components/FounderSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const CREAM = "#FAF8F4";
const WHITE = "#FFFFFF";
const TEAL = "#4A90D9";

function Wave({ from, to }: { from: string; to: string }) {
  return (
    <div style={{ backgroundColor: to, marginTop: -1 }}>
      <svg
        viewBox="0 0 1440 56"
        style={{ display: "block", fill: from }}
        preserveAspectRatio="none"
        className="w-full h-10 md:h-14"
      >
        <path d="M0,0 C480,56 960,56 1440,0 L1440,0 L0,0 Z" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ChallengeSection />
        <Wave from={WHITE} to={CREAM} />
        <FeaturesSection />
        <Wave from={CREAM} to={WHITE} />
        <HowItWorksSection />
        <Wave from={WHITE} to={CREAM} />
        <ROISection />
        <TestimonialsSection />
        <Wave from={CREAM} to={WHITE} />
        <FounderSection />
        <ContactSection />
        <Wave from={WHITE} to={CREAM} />
        <FlowSection />
        <Wave from={CREAM} to={WHITE} />
        <FAQSection />
        <Wave from={WHITE} to={TEAL} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
