"use client";
import { ChevronDown } from "lucide-react";
import { useInView } from "@/app/hooks/useInView";

export default function CTASection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="trial" className="section-padding bg-gradient-to-br from-teal to-teal-dark relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] rounded-full bg-white/5" />
      <div className="absolute bottom-[-80px] left-[-60px] w-[280px] h-[280px] rounded-full bg-white/5" />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container-narrow relative z-10 text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
          まずは、
          <br />
          導入相談から始めましょう。
        </h2>

        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          電子カルテの入れ替えは不要。既存システムはそのまま。
          <br />
          ステーションの規模・状況に合わせて個別にご提案します。
        </p>

        {/* Scroll hint */}
        <div className="flex justify-center mb-12">
          <a href="#contact" className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors">
            <span className="text-sm">フォームはこちら</span>
            <ChevronDown size={20} className="animate-bounce" />
          </a>
        </div>

        {/* Reassurance points */}
        <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
          {["導入費用0円", "既存システムはそのまま", "即日導入可能", "手厚い運用サポート"].map((point) => (
            <div key={point} className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
