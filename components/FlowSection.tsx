const steps = [
  {
    title: "ヒアリング・デモ",
    description: "現場の課題や体制をヒアリングし、実際のデモをご覧いただきます。",
    duration: "約30分",
  },
  {
    title: "契約",
    description: "ご状況に合わせた内容でご提案。納得いただいてから契約いただけます。",
    duration: "最短1日",
  },
  {
    title: "即日導入",
    description: "導入設定はシンプル。既存システムはそのままで、すぐに全スタッフが使い始められます。",
    duration: "当日〜",
  },
  {
    title: "運用サポート",
    description: "導入後もサポートチームが伴走。使い方のコツや活用方法をお伝えします。",
    duration: "継続的に",
  },
];

export default function FlowSection() {
  return (
    <section id="flow" className="section-padding bg-cream">
      <div className="container-narrow">
        <div className="max-w-2xl mb-16">
          <span className="section-label">ONBOARDING</span>
          <h2 className="section-title">
            導入までの
            <span className="text-teal"> 流れ</span>
          </h2>
          <p className="section-subtitle">
            ヒアリング・デモから即日導入まで。担当者が丁寧にサポートします。
          </p>
        </div>

        <div className="divide-y divide-gray-200">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-10 py-10 first:pt-0 last:pb-0 items-start">
              <div className="flex-shrink-0 w-28">
                <div className="text-xs font-bold text-teal/60 tracking-widest mb-1">STEP</div>
                <div className="text-4xl font-black text-teal leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-xs text-body mt-2 bg-white rounded-full px-2 py-0.5 inline-block border border-gray-200">{step.duration}</p>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-2xl font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-body text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
