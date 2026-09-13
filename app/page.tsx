import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChallengeSection from "@/components/ChallengeSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";

import TestimonialsSection from "@/components/TestimonialsSection";
import ROISection from "@/components/ROISection";
import PricingSection from "@/components/PricingSection";
import FlowSection from "@/components/FlowSection";
import SecuritySection from "@/components/SecuritySection";
import FAQSection from "@/components/FAQSection";
import FounderSection from "@/components/FounderSection";
import CompanySection from "@/components/CompanySection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
export default function Home(){return <><Header/><main id="main-content"><HeroSection/><DemoSection/><ChallengeSection/><FeaturesSection/><TestimonialsSection/><ROISection/><PricingSection/><FlowSection/><SecuritySection/><FAQSection/><FounderSection/><details className="deck-company-details"><summary>医伝士の理念・会社情報を見る</summary><CompanySection/></details><CTASection/><ContactSection/></main><Footer/></>;}
