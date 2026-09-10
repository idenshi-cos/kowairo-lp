import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "kowairo（コワイロ）| 在宅医療のAIインフラ",
  description:
    "訪問看護の会話と背景情報から記録を作成し、医師・ケアマネジャーへの共有まで支えるkowairo。月額4,000円／アカウント（税別）、月契約で少人数から始められます。",
  openGraph: {
    title: "kowairo（コワイロ）| 在宅医療のAIインフラ",
    description:
      "いつもの会話から、記録も、申し送りも。訪問看護の記録作成から多職種への共有まで支えます。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased bg-cream`}>
        <a className="skip-link" href="#main-content">本文へスキップ</a>
        {children}
      </body>
    </html>
  );
}
