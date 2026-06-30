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
  title: "kowairo（コワイロ）| 現場の気づきをチームのケアへ",
  description:
    "訪問看護師・リハビリ職が持つ大切な生活情報を、記録・報告・主治医／ケアマネ共有に活かすAIサービス。会話の中にある「次のケア」につながる情報を、信頼関係・ACP・看取りの質向上へ。",
  openGraph: {
    title: "kowairo（コワイロ）| 現場の気づきをチームのケアへ",
    description:
      "訪問看護師・リハビリ職の気づきを、記録・報告・主治医／ケアマネ共有に活かすAIサービス。現場の会話を、次のケアにつながる共有へ。",
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
        {children}
      </body>
    </html>
  );
}
