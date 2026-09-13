import Image from "next/image";

const footerLinks = [
  { label: "特徴", href: "#features" },
  { label: "多職種連携", href: "#collaboration" },
  { label: "料金", href: "#pricing" },
  { label: "よくある質問", href: "#faq" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function DoctorFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-body py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">
          <div>
            <div className="mb-3">
              <Image
                src="/images/kowairo-logo.png"
                alt="kowairo"
                width={120}
                height={36}
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-body">
              訪問診療医の会話を、記録・指示書・多職種<br />
              共有に活かし、チームの連携につなげるAIサービス。
            </p>
            <p className="text-xs mt-3">
              <a href="/" className="text-teal hover:underline underline-offset-2">
                訪問看護向けのkowairoはこちら
              </a>
            </p>
            <div className="mt-6">
              <Image
                src="/images/idenshi-logo.png"
                alt="株式会社医伝士"
                width={100}
                height={32}
                className="object-contain"
              />
            </div>
            <p className="text-xs mt-2 text-body/60">代表取締役医師：宗 大貴</p>
            <div className="text-xs mt-4 text-body/60 space-y-0.5 not-italic">
              <p>〒104-0033 東京都中央区新川2-10-1-1315</p>
              <p>TEL：03-6555-2104</p>
              <p>Mail：info@idenshi.net</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm hover:text-teal transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-body/60">
          <p>&copy; 2025 株式会社医伝士 All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-teal transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-teal transition-colors">利用規約</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
