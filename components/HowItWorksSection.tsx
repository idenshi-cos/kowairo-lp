"use client";
import { useInView } from "@/app/hooks/useInView";

const steps = [
  {
    step: 1,
    title: "訪問先でアプリを起動",
    description: "訪問先に着いたらアプリを起動するだけ。\n難しい操作は一切ありません。",
  },
  {
    step: 2,
    title: "いつも通りケアと会話",
    description: "利用者様とのいつも通りの会話をバックグラウンドで<br/>録音。他のアプリとの同時使用もOKです。",
  },
  {
    step: 3,
    title: "下書きを確認して転記",
    description: "訪問終了時に停止ボタンを押すだけ。SOAP形式の\n訪問看護記録・報告書サマリが自動生成されます。\n内容を確認・修正して、電子カルテに転記します。",
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
            使い方は
            <span className="text-teal"> 3ステップ</span>
            で完了
          </h2>
          <p className="section-subtitle">
            既存の電子カルテ・レセコンの入れ替えは不要。今日からすぐに使えます。
          </p>
        </div>

        <div
          ref={stepsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {steps.map((step, i) => (
            <div
              key={step.step}
              className={`transition-all duration-700 ${stepsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <p className="text-8xl font-black leading-none mb-5" style={{ color: '#4A90D9', opacity: 0.18 }}>
                {String(step.step).padStart(2, "0")}
              </p>
              <h3 className="text-lg font-bold text-navy mb-3">{step.title}</h3>
              <p className="text-body text-sm leading-relaxed whitespace-pre-line" dangerouslySetInnerHTML={{ __html: step.description }} />
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
            <p>kowairoが生成した記録をコピー＆ペーストで転記するだけ。導入のハードルを極限まで下げました。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
