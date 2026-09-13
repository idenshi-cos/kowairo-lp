const benefits = [
  ["記録を、その日のうちに。", "訪問中の会話を記録・報告書の下書きに活用。あとから記憶をたどって書く負担を減らします。"],
  ["確認しやすく、伝わる記録へ。", "必要な情報を整理し、スタッフ間で共有しやすい記録づくりを支えます。生成内容は確認・修正して使います。"],
  ["生まれた時間を、現場のために。", "利用者さんへのケア、スタッフ教育、地域との連携。記録の先にある大切な仕事へ、時間を向けられるように。"],
];
export default function FeaturesSection() { return <section id="features" className="section-padding bg-white"><div className="container-wide"><span className="section-label">VALUE</span><h2 className="section-title">記録を終えることが、<br />一日のゴールにならないように。</h2><div className="deck-benefits">{benefits.map(([title,body],i)=><article key={title}><span className="deck-step">{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>; }
