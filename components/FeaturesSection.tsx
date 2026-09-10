import Image from "next/image";
const features = [
  ["話すだけで、記録づくりが始まる", "訪問中にiPhone・iPadで録音。いつものケアと会話を、そのまま記録の材料にします。"],
  ["利用者さんの背景を踏まえて整理", "フェイスシート・指示書・お薬手帳を取り込み、病歴や生活背景を踏まえてSOAP形式の記録を作成します。"],
  ["医師・ケアマネジャーへの共有まで", "連携先に合わせた報告書を生成。受信側は無料・返信不要で、申し送りを支えます。"],
  ["本人の希望を、多職種で共有", "会話から価値観や希望を拾い、ACP（これからの医療やケアについての話し合い）に活かせる情報を蓄積します。"],
];
export default function FeaturesSection() { return <section id="features" className="section-padding bg-white"><div className="container-wide"><span className="section-label">SERVICE</span><h2 className="section-title">書くところから、<br />届けるところまで。</h2><p className="section-subtitle">記録の本質は「申し送り」。kowairoが、記録・文書作成・共有をつなぎます。</p><div className="deck-service"><div className="deck-service-image"><Image src="/images/deck/image4.png" alt="kowairoのiPad・iPhoneアプリ画面" width={2350} height={2480} sizes="(max-width: 767px) 90vw, 420px" /><p className="deck-caption">iPhone・iPadで利用できます</p></div><div className="deck-feature-list">{features.map(([title,body],i)=><article key={title}><span className="deck-step">{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></div></div></section>; }
