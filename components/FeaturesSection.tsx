"use client";
import { useInView } from "@/app/hooks/useInView";
import { Mic, ClipboardList, Share2, MousePointerClick, Smartphone, ShieldCheck } from "lucide-react";

const points = [
  {
    icon: MousePointerClick,
    title: "直感的な操作性",
    description: "録音・停止のシンプル操作。ITが苦手な方でも初日から使えます。",
  },
  {
    icon: Smartphone,
    title: "どこでも利用可能",
    description: "iPhone・iPadに対応。訪問先でも移動中でも、その場で記録できます。",
  },
  {
    icon: ShieldCheck,
    title: "安心のセキュリティ",
    description: "国内サーバーで暗号化保管。医療情報ガイドラインに準拠した設計です。",
  },
];

const features = [
  {
    icon: Mic,
    label: "RECORD",
    title: "会話・音声・メモから記録作成を支援",
    description:
      "訪問中の会話やメモをもとに、日々の看護記録・月末報告書の作成をサポート。話すだけで、記録の下書きができあがります。",
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
      "報告・相談に使える文章へ整え、FAX・チャット・MCSへの共有もスムーズに。記録した情報をそのまま活かせるので、二重入力も減らせます。",
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

        {/* 3 points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`flex items-start gap-4 bg-white/60 rounded-xl border border-gray-100 px-6 py-5 transition-all duration-700 ${cardsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-teal" />
                </span>
                <div>
                  <p className="text-navy font-bold text-sm mb-1">{p.title}</p>
                  <p className="text-body text-xs leading-relaxed">{p.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-body/60 text-sm mt-8">
          今お使いの電子カルテはそのまま。生成した記録はコピー＆ペーストで転記できます。
        </p>
      </div>
    </section>
  );
}
