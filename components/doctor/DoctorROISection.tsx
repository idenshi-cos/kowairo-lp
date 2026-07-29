"use client";
import { useInView } from "@/app/hooks/useInView";

const benefits = [
  {
    title: "医師の負担が減る",
    items: [
      "診療記録・指示書作成の時間を圧縮",
      "非常勤医師も含め、記録の質を一定に保ちやすい",
      "本来の診察・往診に時間を割ける",
    ],
    color: "#4A90D9",
  },
  {
    title: "多職種連携が滑らかになる",
    items: [
      "ケアマネジャー・訪問看護師への共有が迅速に",
      "カンファレンス準備の情報集めが不要に",
      "薬剤師・リハビリ職とも同じ情報を共有",
    ],
    color: "#E5876B",
  },
  {
    title: "選ばれるクリニックになる",
    items: [
      "連携の速さ・丁寧さが紹介元からの信頼に",
      "在宅患者・ご家族への説明の質が上がる",
      "採用面でも「働きやすさ」の訴求材料に",
    ],
    color: "#D4A03B",
  },
];

export default function DoctorROISection() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: benefitsRef, inView: benefitsIn } = useInView();

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
            記録・文書作成の負担を軽くしながら、多職種との連携をなめらかにし、
            クリニックへの信頼を育てます。
          </p>
        </div>

        <div
          ref={benefitsRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-700 ${benefitsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="rounded-2xl p-7 border border-gray-200 bg-white transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 text-white"
                  style={{ backgroundColor: b.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-bold text-base text-navy">{b.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {b.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-gray-500">
                    <span className="mt-0.5 shrink-0 font-bold" style={{ color: b.color }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
