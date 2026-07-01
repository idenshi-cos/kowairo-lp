"use client";
import { useInView } from "@/app/hooks/useInView";

const challenges = [
  {
    num: "01",
    title: "日々の記録や月末の報告書に、現場の時間が取られている",
    accentColor: "#4A90D9",
  },
  {
    num: "02",
    title: "カルテ情報をFAXやチャット用に入力し直すのが面倒",
    accentColor: "#E5876B",
  },
  {
    num: "03",
    title: "主治医・ケアマネへの報告文を考えるのに手間がかかる",
    accentColor: "#D4A03B",
  },
  {
    num: "04",
    title: "訪問看護で見ている生活情報が、医師やケアマネに十分届いていない",
    accentColor: "#4A90D9",
  },
  {
    num: "05",
    title: "採用や利用者紹介において、他社との差別化に悩んでいる",
    accentColor: "#E5876B",
  },
];

export default function ChallengeSection() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: listRef, inView: listIn } = useInView();
  const { ref: noteRef, inView: noteIn } = useInView();

  return (
    <section id="challenge" className="section-padding bg-white">
      <div className="container-wide">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-14 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label">CHALLENGE</span>
          <h2 className="section-title">
            こんなこと、<span className="text-coral">ありませんか？</span>
          </h2>
          <p className="section-subtitle">
            訪問看護師やセラピストは、利用者さんに一番近い場所で、医療情報だけでは拾いきれない大切な情報を日々見ています。
          </p>
        </div>

        <div
          ref={listRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {challenges.map((item, i) => (
            <div
              key={item.title}
              className={`flex items-start gap-5 bg-cream rounded-2xl border border-gray-100 p-6 transition-all duration-700 ${listIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span
                className="text-4xl font-black leading-none flex-shrink-0"
                style={{ color: item.accentColor, opacity: 0.3 }}
              >
                {item.num}
              </span>
              <p className="text-navy font-bold leading-relaxed pt-1">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Supplementary message */}
        <div
          ref={noteRef as React.RefObject<HTMLDivElement>}
          className={`mt-10 bg-teal/5 border border-teal/15 rounded-2xl px-7 py-6 transition-all duration-700 ${noteIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-body leading-relaxed">
            その情報が、主治医やケアマネジャーへ十分に届かないことがあります。
            <br className="hidden md:block" />
            <span className="text-navy font-bold">現場の気づきを、チームのケアへ。</span>
            kowairoが、その橋渡しをします。
          </p>
        </div>

        {/* Bridge */}
        <div className="mt-10 flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-200" />
          <div className="flex items-center gap-2 text-teal font-black text-2xl whitespace-nowrap">
            kowairoが解決します
          </div>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
      </div>
    </section>
  );
}
