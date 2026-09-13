"use client";
import Image from "next/image";
import { useInView } from "@/app/hooks/useInView";

export default function DoctorFounderSection() {
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
            <p className="text-body font-bold mb-3">現役の訪問診療医が、同じ現場の課題から開発</p>
            <h2 className="section-title mb-8">
              記録と連携の負担を減らし、<br />
              <span className="text-teal">診療そのもの</span>に時間を戻したい。
            </h2>

            <div className="space-y-5 text-body leading-relaxed">
              <p>
                訪問診療は、限られた診療時間の中で、記録・指示書作成・多職種への情報共有までをこなす必要があります。同じ訪問診療医として、その負担を日々実感してきました。
              </p>
              <p>
                訪問看護師やケアマネジャーは、患者さんに一番近い場所で生活情報を見ています。医師が診療で得た情報も含め、多職種それぞれに「伝わる形」で共有できて初めて、在宅療養を支えるチームとして機能します。しかし、忙しさや共有フォーマットの制約で、その連携が後回しになる場面が少なくありません。
              </p>
              <p>
                「この情報をもっと早く共有できていれば、関わり方が変わったかもしれない」と感じることが何度もありました。記録・文書作成の負担をゼロに近づけ、診療で得た気づきがチーム全員の財産になる。その思いから、kowairoを作っています。
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
