"use client";
import Image from "next/image";
import { ChevronDown, MessageCircle, PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const item = () =>
    `transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;
  const style = (delay: number): React.CSSProperties => ({ transitionDelay: `${delay}ms` });

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Left panel */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-[55%] px-8 md:px-16 lg:px-20 pt-24 pb-16 bg-cream">
        {/* Tag */}
        <div className={item()} style={style(100)}>
          <div className="inline-flex items-center bg-teal/10 text-teal font-bold text-sm px-4 py-2 rounded-full w-fit mb-8">
            訪問看護のための AI記録・多職種連携支援アプリ
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-navy leading-[1.2] mb-6">
          <span className={`block ${item()}`} style={style(250)}>
            会話の中にある、
          </span>
          <span className={`block ${item()}`} style={style(420)}>
            <span className="text-teal">「次のケア」</span>につながる情報を。
          </span>
        </h1>

        <div className={item()} style={style(580)}>
          <p className="text-body text-lg md:text-xl leading-relaxed mb-4 max-w-lg">
            訪問看護師・セラピストが持つ大切な生活情報を、<br />
            記録・報告・多職種共有に活かすAIサービス。
          </p>
          <p className="text-body/70 text-base leading-relaxed mb-10 max-w-lg">
            話すだけで記録作成をサポート。日々の会話で得た生活情報を、次のケアにつながる共有へ。
          </p>
        </div>

        {/* CTA buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 mb-12 ${item()}`} style={style(720)}>
          <a href="#contact" className="btn-primary gap-2">
            <MessageCircle size={18} />
            無料デモ・導入相談をする
          </a>
          <a href="#demo" className="btn-secondary gap-2">
            <PlayCircle size={18} />
            デモ動画を見る
          </a>
        </div>

        {/* Stats row */}
        <div className={`flex flex-wrap gap-8 ${item()}`} style={style(880)}>
          <div>
            <p className="text-5xl font-black text-teal leading-none">80<span className="text-2xl">%</span></p>
            <p className="text-body text-sm mt-1">記録時間削減</p>
          </div>
          <div className="w-px bg-gray-200" />
          <div>
            <p className="text-5xl font-black text-coral leading-none">¥<span>48,000</span></p>
            <p className="text-body text-sm mt-1">節約効果/月・1名</p>
          </div>
          <div className="w-px bg-gray-200" />
          <div>
            <p className="text-5xl font-black text-mustard leading-none">即<span className="text-xl">日</span></p>
            <p className="text-body text-sm mt-1">導入可能</p>
          </div>
        </div>
        <p className={`text-xs text-body/60 mt-5 ${item()}`} style={style(1000)}>
          現役の訪問診療医が、在宅医療の現場で感じてきたジレンマから開発しました。
        </p>
        <p className={`text-xs text-body/40 mt-1 ${item()}`} style={style(1100)}>
          ※記録時間の数値は当社PoC実績（n=20人、3ヶ月）
        </p>

      </div>

      {/* Mobile photo collage + mockup - スマホのみ表示 */}
      <div className="lg:hidden w-full bg-navy relative overflow-hidden" style={{ height: 320 }}>
        {[
          { src: "/images/nurse-visit.jpg", style: { top: "-10%", left: "-5%",  width: 155, height: 107, rotate: "-7deg"  } },
          { src: "/images/visit-1.jpg",     style: { top: "-8%",  right: "-4%", width: 145, height: 100, rotate: "9deg"   } },
          { src: "/images/visit-6.jpg",     style: { top: "30%",  left: "-4%",  width: 148, height: 102, rotate: "6deg"   } },
          { src: "/images/visit-5.jpg",     style: { top: "35%",  right: "-4%", width: 142, height: 98,  rotate: "-8deg"  } },
          { src: "/images/visit-2.jpg",     style: { bottom: "-8%", left: "20%", width: 150, height: 103, rotate: "-5deg" } },
          { src: "/images/visit-7.jpg",     style: { bottom: "-10%", left: "-4%", width: 148, height: 102, rotate: "7deg" } },
          { src: "/images/visit-3.jpg",     style: { bottom: "-8%", right: "-4%", width: 145, height: 100, rotate: "-6deg"} },
        ].map((photo, i) => (
          <div
            key={i}
            className={`absolute rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
            style={{
              top: photo.style.top,
              left: photo.style.left,
              right: photo.style.right,
              bottom: photo.style.bottom,
              width: photo.style.width,
              height: photo.style.height,
              transform: `rotate(${photo.style.rotate})`,
              transitionDelay: `${300 + i * 80}ms`,
            }}
          >
            <Image src={photo.src} alt="訪問看護の現場" fill className="object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-navy/50 z-10" />
        <div
          className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "800ms" }}
        >
          <Image
            src="/images/app-mockup-transparent.png"
            alt="kowairoアプリ画面"
            width={220}
            height={260}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Right panel - scattered photo collage + centered mockup */}
      <div className="hidden lg:flex lg:w-[45%] bg-navy items-center justify-center relative overflow-hidden">

        {/* Scattered photos — 縦方向にずらして均等散布 */}
        {[
          { src: "/images/nurse-visit.jpg", style: { top: "-8%",  left: "0%",   width: 235, height: 162, rotate: "-9deg"  } },
          { src: "/images/visit-1.jpg",     style: { top: "-4%",  right: "-2%", width: 220, height: 152, rotate: "11deg"  } },
          { src: "/images/visit-8.jpg",     style: { top: "12%",  left: "28%",  width: 218, height: 150, rotate: "5deg"   } },
          { src: "/images/visit-6.jpg",     style: { top: "28%",  left: "-2%",  width: 225, height: 155, rotate: "7deg"   } },
          { src: "/images/visit-5.jpg",     style: { top: "36%",  right: "-2%", width: 215, height: 148, rotate: "-10deg" } },
          { src: "/images/visit-2.jpg",     style: { top: "50%",  left: "22%",  width: 210, height: 145, rotate: "-6deg"  } },
          { src: "/images/visit-7.jpg",     style: { top: "62%",  left: "-2%",  width: 228, height: 157, rotate: "8deg"   } },
          { src: "/images/visit-3.jpg",     style: { top: "68%",  right: "-2%", width: 220, height: 152, rotate: "-8deg"  } },
          { src: "/images/visit-4.jpg",     style: { bottom: "-5%",left: "25%", width: 225, height: 155, rotate: "6deg"   } },
        ].map((photo, i) => (
          <div
            key={i}
            className={`absolute rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
            style={{
              top: photo.style.top,
              left: photo.style.left,
              right: photo.style.right,
              bottom: photo.style.bottom,
              width: photo.style.width,
              height: photo.style.height,
              transform: `rotate(${photo.style.rotate})`,
              transitionDelay: `${200 + i * 100}ms`,
            }}
          >
            <Image src={photo.src} alt="訪問看護の現場" fill className="object-cover" />
          </div>
        ))}

        {/* Dark overlay to unify photos and make mockup pop */}
        <div className="absolute inset-0 bg-navy/50 z-10" />

        {/* Centered mockup on top */}
        <div
          className={`relative z-20 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "800ms" }}
        >
          <Image
            src="/images/app-mockup-transparent.png"
            alt="kowairoアプリ画面"
            width={420}
            height={490}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#demo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-body/50 hover:text-teal transition-colors"
      >
        <span className="text-xs mb-1">スクロール</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
