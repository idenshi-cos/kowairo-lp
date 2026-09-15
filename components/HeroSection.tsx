import { ArrowRight } from "lucide-react";
export default function HeroSection() {
  return <section className="deck-hero">
    <div className="container-wide deck-hero-inner">
      <div className="deck-hero-copy">
      <p className="deck-eyebrow">訪問看護の記録・報告書作成を支援</p>
      <p className="deck-wordmark">kowairo<span>コワイロ</span></p>
      <h1>いつもの会話から、<br />記録も、申し送りも。</h1>
      <p className="deck-hero-description">日々の記録づくりから、<br className="hidden sm:block" />医師・ケアマネジャーへの共有まで。<br />訪問看護の現場に立つ人を、AIで支えます。</p>
      <div className="deck-hero-actions"><a className="btn-primary" href="#contact">デモ・導入を相談する <ArrowRight size={18} aria-hidden="true" /></a><a className="deck-light-link" href="#demo">紹介動画を見る <ArrowRight size={16} aria-hidden="true" /></a></div>
      <p className="deck-hero-note">月4,000円／人（税別）・月契約 ／ 電子カルテの入替不要</p>
      </div>
      <img className="deck-hero-devices" src="/images/kowairo-devices.png" alt="iPadとiPhoneで表示したkowairoの画面" width={2700} height={2700} fetchPriority="high" />
    </div>
    <div className="deck-hero-bottom" aria-hidden="true" />
  </section>;
}
