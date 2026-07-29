"use client";
import { Check } from "lucide-react";
import { useInView } from "@/app/hooks/useInView";

const items = [
  "訪問診療の記録・文書作成の負担を減らしたい",
  "訪問看護指示書や情報提供書の作成を効率化したい",
  "ケアマネジャーや訪問看護師との連携をもっとスムーズにしたい",
  "多職種カンファレンスの準備をラクにしたい",
  "常勤・非常勤が混在する体制でも、記録の質を一定に保ちたい",
  "在宅患者さんやご家族への説明の質を高めたい",
  "連携の速さ・丁寧さを、クリニックの強みにしたい",
];

export default function DoctorRecommendSection() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: listRef, inView: listIn } = useInView();

  return (
    <section id="recommend" className="section-padding bg-cream">
      <div className="container-narrow">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label">RECOMMEND</span>
          <h2 className="section-title">
            こんなクリニックに
            <br className="md:hidden" />
            <span className="text-teal">おすすめです</span>
          </h2>
        </div>

        <div
          ref={listRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          {items.map((item, i) => (
            <div
              key={item}
              className={`flex items-center gap-4 bg-white rounded-xl border border-gray-100 shadow-sm px-6 py-5 transition-all duration-700 ${listIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${i === items.length - 1 ? "md:col-span-2" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="w-7 h-7 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                <Check size={16} className="text-teal" />
              </span>
              <p className="text-navy font-bold text-sm md:text-base leading-snug">{item}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-body text-sm mt-10">
          ひとつでも当てはまったら、まずは無料デモでkowairoの活用方法をご相談ください。
        </p>
      </div>
    </section>
  );
}
