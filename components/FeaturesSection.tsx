"use client";
import { useInView } from "@/app/hooks/useInView";
import { Mic, ClipboardList, Share2 } from "lucide-react";

const features = [
  {
    icon: Mic,
    label: "RECORD",
    title: "会話・音声・メモから記録作成を支援",
    description:
      "訪問中の会話やメモをもとに、日々の看護記録・リハビリ記録の作成をサポート。話すだけで、記録の下書きができあがります。",
    color: "#4A90D9",
  },
  {
    icon: ClipboardList,
    label: "ORGANIZE",
    title: "生活情報・気づきポイントを整理",
    description:
      "食事、睡眠、活動、表情、家族関係、本人の希望など、日々のケアで得た大切な情報をAIが整理。ACPや看取りに活きる気づきも残せます。",
    color: "#E5876B",
  },
  {
    icon: Share2,
    label: "SHARE",
    title: "主治医・ケアマネへの共有文まで作成",
    description:
      "報告・相談・情報共有に使える文章へ整え、主治医やケアマネジャーとの連携をスムーズに。伝えたい情報が、必要な人に届きます。",
    color: "#D4A03B",
  },
];

export default function FeaturesSection() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: cardsRef, inView: cardsIn } = useInView();

  return (
    <section id="features" className="section-padding bg-cream">
      <div className="container-wide">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label">FEATURES</span>
          <h2 className="section-title">
            kowairoで、現場の気づきを
            <br className="hidden md:block" />
            <span className="text-teal">チームのケアへ。</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            記録・整理・共有までを一気通貫で。現場の会話を、次のケアにつながる情報に変えます。
          </p>
        </div>

        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col transition-all duration-700 ${cardsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${f.color}15` }}
                >
                  <Icon size={24} style={{ color: f.color }} />
                </div>
                <p className="text-xs font-bold tracking-widest mb-2" style={{ color: f.color }}>
                  {String(i + 1).padStart(2, "0")} · {f.label}
                </p>
                <h3 className="text-xl font-black text-navy mb-3 leading-snug">{f.title}</h3>
                <p className="text-body text-sm leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-body/60 text-sm mt-10">
          今お使いの電子カルテはそのまま。生成した記録はコピー＆ペーストで転記できます。
        </p>
      </div>
    </section>
  );
}
