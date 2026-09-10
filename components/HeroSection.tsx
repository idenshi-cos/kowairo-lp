import { ArrowRight } from "lucide-react";
export default function HeroSection() {
  return <section className="deck-hero">
    <div className="deck-watercolor" aria-hidden="true" />
    <div className="container-wide deck-hero-inner">
      <p className="deck-eyebrow">在宅医療のAIインフラ</p>
      <p className="deck-wordmark">kowairo<span>コワイロ</span></p>
      <h1>いつもの会話から、<br />記録も、申し送りも。</h1>
      <p className="deck-hero-description">利用者さんの背景を踏まえた記録づくりから、<br className="hidden sm:block" />医師・ケアマネジャーへの共有まで。<br />訪問看護の現場に立つ人を、AIで支えます。</p>
      <div className="deck-hero-actions"><a className="btn-primary" href="#contact">デモ・導入を相談する <ArrowRight size={18} aria-hidden="true" /></a><a className="deck-light-link" href="#how-it-works">実際のアプリを見る <ArrowRight size={16} aria-hidden="true" /></a></div>
      <p className="deck-hero-note">iPhone・iPad対応 ／ 今の電子カルテと併用 ／ 月契約</p>
    </div>
    <div className="deck-hero-bottom" aria-hidden="true" />
  </section>;
}
