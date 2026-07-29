"use client";
import { useInView } from "@/app/hooks/useInView";
import { Stethoscope, Users, HeartPulse, Pill, Activity, Home } from "lucide-react";

const roles = [
  { icon: Users, label: "ケアマネジャー", desc: "ケアプランに反映しやすい状態共有文を", color: "#4A90D9" },
  { icon: HeartPulse, label: "訪問看護師", desc: "指示内容・状態変化をそのまま共有", color: "#E5876B" },
  { icon: Pill, label: "薬剤師", desc: "処方意図が伝わる情報提供を", color: "#D4A03B" },
  { icon: Activity, label: "リハビリ職", desc: "機能面の留意点をわかりやすく", color: "#4A90D9" },
  { icon: Home, label: "ご家族", desc: "説明内容を要約し、認識のズレを防止", color: "#E5876B" },
];

export default function DoctorCollaborationSection() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: diagramRef, inView: diagramIn } = useInView();

  return (
    <section id="collaboration" className="section-padding bg-navy overflow-hidden">
      <div className="container-wide">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block text-teal-light font-bold text-sm tracking-widest uppercase mb-3">
            MULTIDISCIPLINARY CARE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            <span className="text-teal-light">多職種連携</span>を前提に、
            <br />
            設計しています
          </h2>
          <p className="text-white/70 text-lg mt-4 leading-relaxed">
            訪問診療は、医師だけで完結しません。ケアマネジャー・訪問看護師・薬剤師・リハビリ職・ご家族──
            それぞれに伝わる形で情報を届けることが、在宅療養を支える力になります。
          </p>
        </div>

        <div
          ref={diagramRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 ${diagramIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Center: doctor */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center gap-2 bg-white/10 border border-white/15 rounded-2xl px-8 py-6">
              <Stethoscope size={28} className="text-teal-light" />
              <span className="text-white font-bold">訪問診療医</span>
              <span className="text-white/50 text-xs">診察 → kowairoが記録・整理</span>
            </div>
          </div>

          {/* Connector line */}
          <div className="hidden md:block h-8 w-px bg-white/15 mx-auto mb-2" />

          {/* Roles */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {roles.map((r, i) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.label}
                  className={`flex flex-col items-center text-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-6 transition-all duration-700 ${diagramIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${i === roles.length - 1 ? "col-span-2 md:col-span-1" : ""}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${r.color}25` }}
                  >
                    <Icon size={20} style={{ color: r.color }} />
                  </span>
                  <p className="text-white font-bold text-sm">{r.label}</p>
                  <p className="text-white/60 text-xs leading-relaxed">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-white/40 text-xs mt-10">
          共有先ごとにフォーマットを整える必要はありません。1つの記録から、伝わる形の共有文を作成します。
        </p>
      </div>
    </section>
  );
}
