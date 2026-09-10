const faqs = [
["今の電子カルテと一緒に使えますか？","使えます。生成した記録・共有文をコピー＆ペーストで転記する運用です。電子カルテ・レセコンの入れ替えは不要です。"],
["スタッフがITに不慣れでも使えますか？","録音・停止のシンプルな操作です。導入時には操作説明を支援し、現場での使い方をご案内します。"],
["対応している端末は？","iPhone・iPad（iOS）に対応しています。Android端末は今後対応予定です。"],
["訪問時の録音に、ご利用者の同意は必要ですか？","当社では、ご利用者・ご家族への説明と同意を前提に運用します。説明の進め方と同意書のテンプレートもご用意しています。"],
["解約したい場合は？","月契約のため、いつでも解約できます。年間契約による拘束はありません。手続きの詳細はお問い合わせください。"],
];
export default function FAQSection(){return <section id="faq" className="section-padding bg-white"><div className="container-narrow"><span className="section-label">FAQ</span><h2 className="section-title">ご検討時によくあるご質問。</h2><div className="deck-faq">{faqs.map(([q,a])=><details key={q}><summary><span className="deck-q">Q</span><span>{q}</span></summary><p>{a}</p></details>)}</div></div></section>; }
