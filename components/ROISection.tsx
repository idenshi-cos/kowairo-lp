"use client";
import { useState } from "react";
import { useInView } from "@/app/hooks/useInView";
import { useCountUp } from "@/app/hooks/useCountUp";

const benefits = [
  {
    title: "現場とチームに効く",
    items: [
      "記録・報告書作成の負担を軽減",
      "主治医・ケアマネへの共有がスムーズに",
      "現場の気づきがチーム全体に伝わる",
    ],
    color: "#4A90D9",
  },
  {
    title: "ケアの質が上がる",
    items: [
      "利用者さんの生活背景や価値観をケアに活かしやすく",
      "ACPや看取りに必要な情報を残しやすく",
      "本人・ご家族が納得した最期につながる",
    ],
    color: "#E5876B",
  },
  {
    title: "信頼が積み上がる",
    items: [
      "クリニック・ケアマネとの密な連携を強みに",
      "「丁寧に見ている価値」が外部に伝わる",
      "患者さんの幸福に貢献するステーションとして信頼向上",
    ],
    color: "#D4A03B",
  },
];

export default function ROISection() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: benefitsRef, inView: benefitsIn } = useInView();
  const { ref: statRef, inView: statIn } = useInView();

  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const count80 = useCountUp(80, 1600, statIn);

  return (
    <section id="roi" className="section-padding bg-cream">
      <div className="container-wide">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`max-w-2xl mb-16 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label">BENEFITS</span>
          <h2 className="section-title">
            記録の効率化だけでは、
            <br />
            <span className="text-teal">ありません。</span>
          </h2>
          <p className="section-subtitle">
            記録・報告の負担を軽くしながら、現場の気づきをチームに届け、
            利用者さんへのケアの質と、ステーションへの信頼を育てます。
          </p>
        </div>

        {/* Benefits */}
        <div
          ref={benefitsRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-700 ${benefitsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {benefits.map((b, i) => {
            const isHovered = hoveredBenefit === i;
            return (
              <div
                key={b.title}
                className="rounded-2xl p-7 border transition-all duration-300 cursor-default"
                style={{
                  backgroundColor: isHovered ? b.color : "#ffffff",
                  borderColor: isHovered ? b.color : "#e5e7eb",
                  boxShadow: isHovered ? `0 8px 24px ${b.color}40` : "0 1px 4px rgba(0,0,0,0.06)",
                }}
                onMouseEnter={() => setHoveredBenefit(i)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: isHovered ? "rgba(255,255,255,0.25)" : b.color,
                      color: "#ffffff",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-bold text-base transition-colors duration-300"
                    style={{ color: isHovered ? "#ffffff" : "#1F2A44" }}
                  >
                    {b.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {b.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs leading-relaxed transition-colors duration-300"
                      style={{ color: isHovered ? "rgba(255,255,255,0.9)" : "#6b7280" }}
                    >
                      <span
                        className="mt-0.5 shrink-0 font-bold transition-colors duration-300"
                        style={{ color: isHovered ? "rgba(255,255,255,0.9)" : b.color }}
                      >✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Efficiency proof — supporting, not headline */}
        <div
          ref={statRef as React.RefObject<HTMLDivElement>}
          className={`mt-6 bg-navy rounded-2xl px-8 py-7 flex flex-col md:flex-row md:items-center gap-6 transition-all duration-700 ${statIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-end gap-3 flex-shrink-0">
            <span className="text-6xl font-black text-teal leading-none">{count80}</span>
            <span className="text-2xl font-black text-white/60 mb-2">%</span>
          </div>
          <div className="md:border-l md:border-white/10 md:pl-6">
            <p className="text-white font-bold mb-1">もちろん、記録の効率化も。</p>
            <p className="text-white/70 text-sm leading-relaxed">
              1日1時間かかっていた記録が<strong className="text-white"> 約12分</strong>に（記録時間 約80%削減）。
              看護師時給3,000円換算で、<strong className="text-white">月間約48,000円／1名</strong>のコスト効果。残業削減にも直結します。
            </p>
            <p className="text-white/40 text-xs mt-2">※記録時間の数値は当社PoC実績（n=20人、3ヶ月）</p>
          </div>
        </div>
      </div>
    </section>
  );
}
