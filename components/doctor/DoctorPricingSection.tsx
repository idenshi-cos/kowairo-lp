"use client";
import { Check } from "lucide-react";
import { useInView } from "@/app/hooks/useInView";

const points = [
  "利用時間・機能はすべてのプランで無制限",
  "モニター導入・スモールスタートも相談可",
  "まずは無料デモで運用に合わせてご案内",
];

export default function DoctorPricingSection() {
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
            クリニック単位の基本料金に、在籍する医師数に応じた料金を加算する、シンプルな体系です。
          </p>
        </div>

        <div
          className={`max-w-2xl mx-auto bg-cream rounded-3xl border border-gray-100 p-8 md:p-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Price breakdown */}
          <div className="pb-8 mb-8 border-b border-gray-200 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-navy font-bold">基本料金</p>
                <p className="text-body/60 text-xs mt-0.5">クリニック・月</p>
              </div>
              <p className="text-3xl font-black text-navy">¥40,000</p>
            </div>
            <div className="flex items-center justify-center text-teal text-xl font-black">＋</div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-navy font-bold">常勤医師</p>
                <p className="text-body/60 text-xs mt-0.5">1名につき・月</p>
              </div>
              <p className="text-3xl font-black text-navy">¥20,000</p>
            </div>
            <div className="flex items-center justify-center text-teal text-xl font-black">＋</div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-navy font-bold">非常勤医師</p>
                <p className="text-body/60 text-xs mt-0.5">1名につき・月</p>
              </div>
              <p className="text-3xl font-black text-navy">¥10,000</p>
            </div>
            <p className="text-body/50 text-xs pt-2">※税抜。医師数は在籍する診療医の人数でご案内ください。</p>
          </div>

          {/* Example */}
          <div className="bg-white rounded-2xl border border-gray-100 px-6 py-5 mb-8">
            <p className="text-xs font-bold text-teal tracking-wide mb-2">料金シミュレーション例</p>
            <p className="text-body text-sm leading-relaxed">
              常勤医師2名・非常勤医師1名のクリニックの場合
            </p>
            <p className="text-navy font-black text-lg mt-2">
              ¥40,000 + ¥20,000×2 + ¥10,000×1 = <span className="text-teal">¥90,000 / 月</span>
            </p>
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
