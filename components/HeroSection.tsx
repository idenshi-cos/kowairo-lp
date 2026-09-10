import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
export default function HeroSection() {
  return <section className="kowairo-hero">
    <div className="hero-layout container-wide">
      <div className="hero-copy">
        <p className="hero-eyebrow">訪問看護のための AI音声アシスタント</p>
        <h1>記録に追われる時間を、<br /><span>向き合う時間へ。</span></h1>
        <p className="hero-description">いつもの会話から、訪問看護記録の下書きへ。<br className="hidden sm:block" />kowairoが記録づくりを支え、<br className="hidden sm:block" />目の前の利用者さまに集中できる毎日を。</p>
        <div className="hero-actions"><a href="#contact" className="btn-primary gap-3">導入について相談する <ArrowRight size={18} aria-hidden="true" /></a><a href="#how-it-works" className="hero-text-link">使い方を見る <ArrowRight size={16} aria-hidden="true" /></a></div>
        <ul className="hero-checks">{["今の電子カルテと併用", "iPhone・iPad対応", "医師が開発・監修"].map(label => <li key={label}><Check size={16} aria-hidden="true" />{label}</li>)}</ul>
      </div>
      <div className="hero-visual">
        <div className="hero-photo"><Image src="/images/nurse-visit.jpg" alt="利用者さまと向き合う訪問看護の現場" fill priority sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" /></div>
        <div className="hero-photo-caption"><span>会話は、ケアの一部だから。</span><p>いつもの訪問に、kowairoを。</p></div>
        <div className="hero-app"><Image src="/images/app-mockup-transparent.png" alt="kowairoのアプリ画面" width={420} height={490} priority sizes="(max-width: 767px) 180px, 235px" /></div>
      </div>
    </div>
    <div className="hero-proof container-wide">
      <div className="hero-proof-label">現場から生まれた、<br />記録の新しいかたち。</div>
      <div><strong>80<span>%</span></strong><p>記録時間を削減 ※1</p></div>
      <div><strong>48<span>分 / 日</span></strong><p>1名あたりの削減時間 ※1</p></div>
      <div><strong>そのまま</strong><p>既存の電子カルテを活用</p></div>
      <p className="hero-proof-note">※1 当社PoC実績（20人・3ヶ月）。記録時間1日60分→12分。効果は利用状況により異なります。</p>
    </div>
  </section>;
}
