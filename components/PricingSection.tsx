"use client";
import { Check } from "lucide-react";
import { useInView } from "@/app/hooks/useInView";

const points = [
  "事業所規模・活用内容に応じてご提案",
  "モニター導入・スモールスタートも相談可",
  "まずは無料デモで運用に合わせてご案内",
];

export default function PricingSection() {
  const { ref, inView } = useInView();

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-narrow">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label">PRICING</span>
          <h2 className="section-title">
            料金<span className="text-teal">プラン</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            料金プランは、事業所規模・活用内容に応じてご提案します。
          </p>
        </div>

        <div
          className={`max-w-2xl mx-auto bg-cream rounded-3xl border border-gray-100 p-8 md:p-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-body leading-relaxed mb-8">
            まずは無料デモにて、現場の運用に合わせた活用方法をご相談ください。
            必要であれば、モニター導入やスモールスタートもご相談いただけます。
          </p>
          <ul className="space-y-4 mb-8">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-navy font-bold text-sm md:text-base">
                <span className="w-7 h-7 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <Check size={16} className="text-teal" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="block w-full text-center bg-teal text-white font-bold py-4 rounded-xl text-base hover:bg-teal-dark transition-colors shadow-lg"
          >
            無料デモ・導入相談をする
          </a>
        </div>
      </div>
    </section>
  );
}
