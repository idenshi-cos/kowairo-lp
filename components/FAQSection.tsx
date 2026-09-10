"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "訪問時の録音には、患者さん（ご利用者）の同意が必要ですか？",
    a: "書面での同意取得は必須ではありません。「録音していること」がご利用者に伝わり、拒否できる状況があれば問題ないとされています。実際の運用としては、新規ご契約時の重要事項説明書に一文加える、既存のご利用者には口頭でお伝えする、または名札やバッジに「録音しています」と記載しておく、といった方法で十分です。\n\nご利用者からは「何に使われるか」「証拠として残されるのか」という点が不安要素になりやすいため、「ケアの質を高めるための記録作成補助として使っています」とお伝えいただくのが効果的で、実際の出力結果をお見せいただけると安心されます。先行導入ステーション様では、この説明で録音をお断りされた事例はこれまでありません。\n\nご希望のステーション様には、重要事項説明書に追記する文例や、口頭説明用のスクリプトをご提供しています。",
  },
  {
    q: "録音された会話データはどのように管理されますか？個人情報が漏れる心配はありませんか？",
    a: "録音データは国内のAWSサーバー上で暗号化して保管され、貴ステーションの登録ユーザー以外はアクセスできません。通信もすべて暗号化されており、外部に漏れる仕組みにはなっていません。\n\n録音データの利用目的は、ご契約ステーション内でのケア記録作成・ケアの質向上に限定しています。第三者への提供や、他の目的での利用は一切ありません。録音データは文字起こし・SOAP化が完了後に自動削除する設定も可能で、ステーションごとに保管期間をカスタマイズいただけます。\n\n医療情報の取り扱いガイドライン（医療情報システムの安全管理に関するガイドライン）に準拠した設計を行っており、医師である代表が直接監修しています。",
  },
  {
    q: "今使っている電子カルテと一緒に使えますか？",
    a: "はい、ほとんどの電子カルテと併用可能です。kowairoで生成されたSOAP形式の記録は、テキストとしてコピー＆ペーストでどの電子カルテにも転記いただけます。カイポケ／iBOW／ワイズマンなど主要な訪問看護向け電子カルテでの利用実績があります。",
  },
  {
    q: "使えるスマートフォンの機種に制限はありますか？",
    a: "iPhone・iPadに対応しています。Androidは現時点では非対応ですが、今後の対応を予定しています。Androidでのご利用をご希望の場合は、お気軽にお問い合わせください。",
  },
  {
    q: "スタッフがITに不慣れでも使えますか？",
    a: "はい、ご安心ください。新しいツールの導入は、ただでさえ忙しい医療現場にとって一時的な負担になりがちです。だからこそkowairoは、看護師の皆さまが迷いなく使えることを最優先に設計しています。\n\n操作は「録音ボタンを押す」「終了ボタンを押す」の2ステップ。マニュアルを読み込まなくても、初日から直感的にお使いいただけるUIにこだわりました。導入時には現地またはオンラインでの操作研修（30分程度）を無料でご提供しており、導入後もチャットでいつでもご質問いただけます。",
  },
  {
    q: "無料トライアル期間中に費用はかかりますか？トライアル後、自動で課金されますか？",
    a: "トライアル期間中の費用は一切かかりません。トライアル終了後に自動で有料プランへ移行することもなく、継続をご希望の場合のみ改めて契約手続きをお願いしています。安心してお試しください。",
  },
  {
    q: "契約後、解約したい場合はどうすればいいですか？",
    a: "契約期間は1年プランと1ヶ月プランからお選びいただけます。1年プランは月額料金がお得になり、1ヶ月プランは短期間でのお試しに適しています。いずれも更新月の1ヶ月前までにご連絡いただければ解約可能です。\n\n「合わなければやめられる」状態を保ちつつ、長くお使いいただける品質をご提供することが当社の方針です。",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">
            よくある
            <span className="text-teal"> ご質問</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-cream rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-bold text-navy text-sm md:text-base leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-teal transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div id={`faq-answer-${i}`} className="px-6 pb-5 border-t border-gray-100">
                  <div className="text-body text-sm leading-relaxed pt-4 space-y-3">
                    {faq.a.split("\n\n").map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
