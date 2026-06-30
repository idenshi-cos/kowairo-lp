"use client";
import { useInView } from "@/app/hooks/useInView";

const steps = [
  {
    step: 1,
    title: "会話・音声を記録",
    description: "訪問中の会話やメモを入力。<br/>いつも通りのケアの中で大丈夫です。",
  },
  {
    step: 2,
    title: "AIが整理・要約",
    description: "記録に必要な情報、生活情報、<br/>気づきポイントをAIが整理します。",
  },
  {
    step: 3,
    title: "記録・共有文を作成",
    description: "看護記録・報告書・主治医／<br/>ケアマネ向け共有文に活用できます。",
  },
  {
    step: 4,
    title: "チームで共有・活用",
    description: "必要な人に、必要な情報が届く。<br/>気づきがチームのケアになります。",
  },
];

export default function HowItWorksSection() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: stepsRef, inView: stepsIn } = useInView();
  const { ref: noteRef, inView: noteIn } = useInView();

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-wide">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`max-w-2xl mb-16 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label">HOW IT WORKS</span>
          <h2 className="section-title">
            訪問中の会話が、
            <br />
            <span className="text-teal">記録・報告・共有</span>につながる
          </h2>
          <p className="section-subtitle">
            既存の電子カルテ・レセコンの入れ替えは不要。今日からすぐに使えます。
          </p>
        </div>

        <div
          ref={stepsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {steps.map((step, i) => (
            <div
              key={step.step}
              className={`transition-all duration-700 ${stepsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <p className="text-7xl font-black leading-none mb-5" style={{ color: '#4A90D9', opacity: 0.18 }}>
                {String(step.step).padStart(2, "0")}
              </p>
              <h3 className="text-lg font-bold text-navy mb-3">{step.title}</h3>
              <p className="text-body text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: step.description }} />
            </div>
          ))}
        </div>

        <div
          ref={noteRef as React.RefObject<HTMLDivElement>}
          className={`mt-16 border-t border-gray-100 pt-10 transition-all duration-700 ${noteIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="font-bold text-navy mb-1">既存システムはそのまま使えます</p>
          <div className="text-body text-sm max-w-2xl space-y-1">
            <p>電子カルテ・レセコンの入れ替えは不要です。</p>
            <p>kowairoが生成した記録・共有文をコピー＆ペーストで転記するだけ。導入のハードルを極限まで下げました。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
