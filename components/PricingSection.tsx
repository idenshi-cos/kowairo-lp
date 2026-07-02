"use client";
import { Check } from "lucide-react";
import { useInView } from "@/app/hooks/useInView";

const points = [
  "利用時間・機能はすべてのプランで無制限",
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
            シンプルな1プラン。使う人数に応じたわかりやすい料金体系です。
          </p>
        </div>

        <div
          className={`max-w-2xl mx-auto bg-cream rounded-3xl border border-gray-100 p-8 md:p-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Price */}
          <div className="text-center pb-8 mb-8 border-b border-gray-200">
            <div className="flex items-end justify-center gap-2">
              <span className="text-5xl md:text-6xl font-black text-navy leading-none">¥3,500</span>
              <span className="text-body font-bold mb-1">／ 名・月</span>
            </div>
            <p className="text-body text-sm mt-4">
              最低ご利用料金：<span className="text-navy font-bold">¥25,000 ／ 月</span>
            </p>
            <p className="text-body/50 text-xs mt-1">※税抜。1アカウント＝1名。</p>
          </div>
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
