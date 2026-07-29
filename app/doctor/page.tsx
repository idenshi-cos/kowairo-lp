import type { Metadata } from "next";
import DoctorHeader from "@/components/doctor/DoctorHeader";
import DoctorHeroSection from "@/components/doctor/DoctorHeroSection";
import DoctorChallengeSection from "@/components/doctor/DoctorChallengeSection";
import DoctorFeaturesSection from "@/components/doctor/DoctorFeaturesSection";
import DoctorCollaborationSection from "@/components/doctor/DoctorCollaborationSection";
import DoctorHowItWorksSection from "@/components/doctor/DoctorHowItWorksSection";
import DoctorROISection from "@/components/doctor/DoctorROISection";
import DoctorFounderSection from "@/components/doctor/DoctorFounderSection";
import DoctorRecommendSection from "@/components/doctor/DoctorRecommendSection";
import DoctorFlowSection from "@/components/doctor/DoctorFlowSection";
import DoctorPricingSection from "@/components/doctor/DoctorPricingSection";
import DoctorFAQSection from "@/components/doctor/DoctorFAQSection";
import DoctorCTASection from "@/components/doctor/DoctorCTASection";
import DoctorContactSection from "@/components/doctor/DoctorContactSection";
import DoctorFooter from "@/components/doctor/DoctorFooter";

const CREAM = "#FAF8F4";
const WHITE = "#FFFFFF";
const TEAL = "#4A90D9";
const NAVY = "#1F2A44";

export const metadata: Metadata = {
  title: "kowairo（コワイロ）| 訪問診療医のためのAI記録・多職種連携支援アプリ",
  description:
    "訪問診療医が抱える記録・指示書作成の負担を、AIがサポート。ケアマネジャーや訪問看護師との連携もスムーズになるよう、多職種連携を意識して設計。料金は基本¥40,000＋常勤医師¥20,000／非常勤医師¥10,000。",
  openGraph: {
    title: "kowairo（コワイロ）| 訪問診療医のためのAI記録・多職種連携支援アプリ",
    description:
      "訪問診療医の会話を、記録・指示書・多職種共有に活かすAIサービス。ケアマネジャー・訪問看護師との連携もそのままスムーズに。",
    type: "website",
  },
};

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

export default function DoctorPage() {
  return (
    <>
      <DoctorHeader />
      <main>
        <DoctorHeroSection />
        <Wave from={CREAM} to={WHITE} />
        <DoctorChallengeSection />
        <Wave from={WHITE} to={CREAM} />
        <DoctorFeaturesSection />
        <Wave from={CREAM} to={NAVY} />
        <DoctorCollaborationSection />
        <Wave from={NAVY} to={WHITE} />
        <DoctorHowItWorksSection />
        <Wave from={WHITE} to={CREAM} />
        <DoctorROISection />
        <Wave from={CREAM} to={WHITE} />
        <DoctorFounderSection />
        <Wave from={WHITE} to={CREAM} />
        <DoctorRecommendSection />
        <DoctorFlowSection />
        <Wave from={CREAM} to={WHITE} />
        <DoctorPricingSection />
        <DoctorFAQSection />
        <Wave from={WHITE} to={TEAL} />
        <DoctorCTASection />
        <DoctorContactSection />
      </main>
      <DoctorFooter />
    </>
  );
}
