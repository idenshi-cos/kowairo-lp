"use client";
import { useInView } from "@/app/hooks/useInView";

const challenges = [
  {
    num: "01",
    title: "訪問後の診療記録・カルテ入力に、限られた時間が削られている",
    accentColor: "#4A90D9",
  },
  {
    num: "02",
    title: "訪問看護指示書や情報提供書の作成に、まとまった時間がかかる",
    accentColor: "#E5876B",
  },
  {
    num: "03",
    title: "ケアマネジャーや訪問看護師への状態共有が、電話や紙ベースで後手に回る",
    accentColor: "#D4A03B",
  },
  {
    num: "04",
    title: "多職種カンファレンスの準備に、情報を集め直す手間がかかる",
    accentColor: "#4A90D9",
  },
  {
    num: "05",
    title: "非常勤医師も含めた診療体制で、記録の質や連携にばらつきが出やすい",
    accentColor: "#E5876B",
  },
];

export default function DoctorChallengeSection() {
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
            訪問診療は、限られた診療時間の中で記録・指示書・多職種連携までこなす必要があり、医師一人にかかる負担が大きくなりがちです。
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
            記録と連携に時間を取られるほど、本来向き合いたい診療そのものの時間が削られていきます。
            <br className="hidden md:block" />
            <span className="text-navy font-bold">診療の会話を、そのままチームへの共有へ。</span>
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
