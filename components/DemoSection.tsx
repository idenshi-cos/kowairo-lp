export default function DemoSection() {
  return (
    <section id="demo" className="section-padding bg-white">
      <div className="container-wide">
        <div className="deck-demo-heading">
          <div><span className="section-label">DEMO</span><h2 className="section-title">訪問の会話が、<br />記録につながる様子を動画で。</h2></div>
          <p className="section-subtitle">訪問看護の記録・報告書作成を支えるkowairo。まずは、現場で使うイメージをご覧ください。</p>
        </div>
        <div className="deck-video-frame">
          <video controls playsInline preload="metadata" aria-label="kowairoの紹介動画" className="deck-video">
            <source src="/demo/kowairo_demo_customer_v11.mp4" type="video/mp4" />
            お使いのブラウザは動画の再生に対応していません。
            <a href="/demo/kowairo_demo_customer_v11.mp4">紹介動画を開く</a>
          </video>
        </div>
        <p className="deck-note">動画はサービスの利用イメージです。実際の画面・機能は変更される場合があります。</p>
        <p className="deck-demo-summary">訪問中の会話から記録や報告書の下書きを作成。内容を確認・修正して、今お使いの電子カルテや申し送りに活用します。</p>
      </div>
    </section>
  );
}
