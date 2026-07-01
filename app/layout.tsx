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
  title: "kowairo（コワイロ）| 訪問看護のためのAI記録・多職種連携支援アプリ",
  description:
    "訪問看護師・セラピストが持つ大切な生活情報を、記録・報告・多職種共有に活かすAIサービス。会話の中にある「次のケア」につながる情報を、信頼関係・ACP・看取りの質向上へ。FAX・チャット・MCS連携で二重入力も削減。",
  openGraph: {
    title: "kowairo（コワイロ）| 訪問看護のためのAI記録・多職種連携支援アプリ",
    description:
      "訪問看護師・セラピストの気づきを、記録・報告・多職種共有に活かすAIサービス。現場の会話を、次のケアにつながる共有へ。",
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
