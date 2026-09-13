"use client";
import { useInView } from "@/app/hooks/useInView";
import { Mic, FileText, Share2, MousePointerClick, Smartphone, ShieldCheck } from "lucide-react";

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
    title: "診察の会話から、診療記録の下書きを作成",
    description:
      "訪問診療中の会話をAIが整理し、診療記録の下書きを自動作成。わざわざ口述する必要はありません。訪問後の記録時間を大きく圧縮します。",
    color: "#4A90D9",
  },
  {
    icon: FileText,
    label: "DOCUMENT",
    title: "訪問看護指示書・情報提供書の作成をサポート",
    description:
      "診察内容から、訪問看護指示書や診療情報提供書のドラフトを作成。ゼロから書き起こす手間を減らし、必要な項目を整理します。",
    color: "#E5876B",
  },
  {
    icon: Share2,
    label: "SHARE",
    title: "ケアマネジャー・訪問看護師への共有文まで作成",
    description:
      "診察内容を、ケアマネジャーや訪問看護師に伝わる文章へ整え、チャット・MCS・FAXでの共有もスムーズに。多職種カンファレンス用の要約にも活用できます。",
    color: "#D4A03B",
  },
];

export default function DoctorFeaturesSection() {
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
            kowairoで、診療の会話を
            <br className="hidden md:block" />
            <span className="text-teal">多職種に届く情報へ。</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            記録・文書作成・共有までを一気通貫で。訪問診療に特化した設計です。
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
          今お使いの電子カルテ・レセコンはそのまま。生成した記録はコピー＆ペーストで転記できます。
        </p>
      </div>
    </section>
  );
}
