import Image from "next/image";
const steps = [
  ["録音を開始", "利用者さんを選んで開始。看護30分・リハ20分など、自動停止の設定も可能です。", "image6.png"],
  ["いつも通りケアと会話", "バイタルやメモ、表情など、言葉にならない情報もその場で書き添えられます。", "image7.png"],
  ["記録を確認・修正", "会話をSOAP形式に整理。気になる点は「今日のポイント」で確認できます。", "image8.png"],
  ["共有文書を生成", "医師用・ケアマネ用レポートをワンタップで生成。確認後、申し送りに活用します。", "image9.png"],
];
export default function HowItWorksSection() { return <section id="how-it-works" className="section-padding bg-white"><div className="container-wide"><span className="section-label">HOW IT WORKS</span><h2 className="section-title">開始を押して、話して、止める。<br />訪問の流れに、自然になじむ。</h2><p className="section-subtitle">実際のアプリ画面で見る、記録から共有までの流れ。</p><div className="deck-screens">{steps.map(([title,body,src],i)=><article key={title}><span className="deck-step">{i+1}</span><div className="deck-screen"><Image src={'/images/deck/'+src} alt={title+'のアプリ画面'} width={450} height={900} sizes="(max-width: 600px) 80vw, (max-width: 900px) 40vw, 250px" /></div><h3>{title}</h3><p>{body}</p></article>)}</div><a href="/manual/" className="deck-link">操作マニュアルを見る</a></div></section>; }
