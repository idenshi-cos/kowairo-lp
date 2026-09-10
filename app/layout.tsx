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
  title: "kowairo（コワイロ）| 訪問看護の音声アシスタント",
  description:
    "訪問看護の会話から、記録・報告書・サマリの下書きを作成するAI音声アシスタント。今の電子カルテと併用でき、記録づくりを支えます。",
  openGraph: {
    title: "kowairo（コワイロ）| 訪問看護の音声アシスタント",
    description:
      "「話す」が、そのまま「記録」になる。訪問看護の付加価値を生み出さない時間をなくし、スタッフを楽にする音声アシスタント。",
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
