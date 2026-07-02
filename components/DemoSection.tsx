"use client";
import { useInView } from "@/app/hooks/useInView";
import { Mic, Sparkles, Send } from "lucide-react";

const points = [
  {
    icon: Mic,
    title: "話すだけで記録",
    description: "訪問中の会話やメモを入力するだけ。",
  },
  {
    icon: Sparkles,
    title: "AIが報告書を下書き",
    description: "看護記録・月末報告書の下書きを自動生成。",
  },
  {
    icon: Send,
    title: "多職種へそのまま共有",
    description: "主治医・ケアマネ向けの共有文もワンタップ。",
  },
];

export default function DemoSection() {
  const { ref: textRef, inView: textIn } = useInView();
  const { ref: videoRef, inView: videoIn } = useInView();
  const { ref: pointsRef, inView: pointsIn } = useInView();

  return (
    <section id="demo" className="section-padding bg-navy overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div
          ref={textRef as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${textIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block text-teal-light font-bold text-sm tracking-widest uppercase mb-3">DEMO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            百聞は一見にしかず。
            <br className="md:hidden" />
            <span className="text-teal-light">実際の画面</span>でご覧ください
          </h2>
          <p className="text-white/70 text-lg mt-4 leading-relaxed">
            会話が記録になり、報告書や共有文につながる——
            kowairoの一連の流れを約1分の動画にまとめました。
          </p>
        </div>

        {/* Video (large, centered) */}
        <div
          ref={videoRef as React.RefObject<HTMLDivElement>}
          className={`max-w-5xl mx-auto transition-all duration-700 ${videoIn ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"}`}
        >
          <div className="rounded-2xl overflow-hidden bg-black shadow-2xl ring-1 ring-white/10">
            <video
              className="w-full h-auto block bg-black"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/demo/kowairo_demo_customer_v11.mp4" type="video/mp4" />
              お使いのブラウザは動画の再生に対応していません。
            </video>
          </div>
          <p className="text-white/50 text-xs text-center mt-4">
            ※動画はイメージです。実際の画面・機能は開発により変更される場合があります。
          </p>
        </div>

        {/* Points */}
        <div
          ref={pointsRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-14 transition-all duration-700 ${pointsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="flex items-start gap-4 text-left">
                <div className="w-11 h-11 rounded-xl bg-teal/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-teal-light" />
                </div>
                <div>
                  <h3 className="text-white font-bold">{p.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{p.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
