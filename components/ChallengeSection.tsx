const issues = [
  ["時間圧迫", "記録が、訪問のあとに残る", "訪問後にまとめて記録すると、休憩や退勤後の時間まで圧迫してしまう。"],
  ["記憶頼り", "大切な言葉を取りこぼす", "数件前の会話は記憶が曖昧に。本人の希望や迷いが、記録に残りにくい。"],
  ["質の属人化", "書き方も、情報量も違う", "忙しさから記録が簡素になり、スタッフごとに内容の詳しさがばらつく。"],
  ["連携の負荷", "同じ内容を、何度も入力", "電子カルテに加えて連携ツールにも転記。申し送りまでに手間がかかる。"],
];
export default function ChallengeSection() { return <section id="challenge" className="section-padding bg-cream"><div className="container-wide"><span className="section-label">ISSUE</span><h2 className="section-title">記録の負担が、<br className="sm:hidden" />現場の余裕を奪っている。</h2><p className="section-subtitle">訪問が終わっても、仕事は終わらない。そんな毎日を変えるために。</p><div className="deck-issues">{issues.map(([tag,title,body],i)=><article key={tag}><span className="deck-number">0{i+1}</span><p className="deck-tag">{tag}</p><h3>{title}</h3><p>{body}</p></article>)}</div><div className="deck-impact"><h3>その負担は、管理者の時間にも。</h3><p>記録の確認や修正に追われると、スタッフの教育や地域との連携まで手が回りにくくなります。記録を早く終えることは、現場とチームに向き合う時間を取り戻すことにつながります。</p></div></div></section>; }
