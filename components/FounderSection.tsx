"use client";
import Image from "next/image";
import { useInView } from "@/app/hooks/useInView";

export default function FounderSection() {
  const { ref: photoRef, inView: photoIn } = useInView();
  const { ref: textRef, inView: textIn } = useInView();

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div
            ref={photoRef as React.RefObject<HTMLDivElement>}
            className={`relative transition-all duration-700 ${photoIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <Image
              src="/images/ceo.jpg"
              alt="代表取締役医師 宗 大貴"
              width={560}
              height={640}
              className="w-full max-w-md mx-auto lg:mx-0 object-cover rounded-2xl"
            />
          </div>

          {/* Message */}
          <div
            ref={textRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 delay-150 ${textIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <span className="section-label">FOUNDER&apos;S STORY</span>
            <p className="text-body font-bold mb-3">現役の訪問診療医の想いから生まれたサービス</p>
            <h2 className="section-title mb-8">
              患者さんの人生を知ることが、<br />
              <span className="text-teal">信頼関係やACP</span>につながる。
            </h2>

            <div className="space-y-5 text-body leading-relaxed">
              <p>
                訪問看護師やリハビリ職の方は、患者さんに一番近い場所で、生活・表情・価値観・家族との関係といった大切な情報を日々見ています。より多くの時間を共にするからこそ、生活の中でその本音に触れています。
              </p>
              <p>
                しかし、医師への遠慮や忙しさ、共有フォーマットの制約もあり、その情報が主治医やケアマネジャーへ十分に届かない場面があります。「先生に言うほどのことじゃない」と気を遣わせてしまっている部分も、きっとあります。
              </p>
              <p>
                現役の訪問診療医として、「この情報をもっと早く知れていれば、関わり方が変わったかもしれない」と感じることが何度もありました。ずっと自宅でペットと過ごしたいと言っていたのに、ある日突然「施設入所が決まったので最後の診察になります」と言われる──本人が本当はどう過ごしたかったのか、確かめる前に時間が過ぎていく。そんな経験を、私自身、何度もしてきました。
              </p>
              <p>
                患者さんの人生を知ることは、単なる情報共有ではありません。信頼関係の構築につながり、ACPにつながり、患者さんやご家族が納得した最期を迎えることにもつながります。記録の負担をゼロに近づけ、本当に大切な気づきがチーム全員の財産になる。その思いから、kowairoを作っています。
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="font-black text-navy text-lg">宗 大貴 / Hirotaka So</p>
              <p className="text-body text-sm mt-1">株式会社医伝士 代表取締役医師</p>
              <p className="text-body text-sm mt-3 leading-relaxed">
                慶應義塾大学医学部卒業。東京ベイ・浦安市川医療センターでの初期臨床研修を経て、慶應義塾大学医学部耳鼻咽喉科学教室に入局。2024年に株式会社医伝士を創業し、現在は会社経営と並行して、都内の訪問診療クリニック・耳鼻咽喉科クリニックで現役医師として診療を続けている。
              </p>
              <p className="text-body/60 text-xs mt-3">耳鼻咽喉科専門医 / 補聴器相談医 / 緩和ケア研修会修了</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
