"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "できること", href: "#features" },
  { label: "多職種連携", href: "#collaboration" },
  { label: "導入の流れ", href: "#flow" },
  { label: "料金", href: "#pricing" },
  { label: "よくある質問", href: "#faq" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function DoctorHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${scrolled ? "bg-white border-gray-200 shadow-sm h-14" : "bg-cream/90 backdrop-blur-sm border-gray-100 h-16"}`}>
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        <a href="/doctor" className="flex items-center gap-2">
          <Image
            src="/images/kowairo-logo.png"
            alt="kowairo"
            width={140}
            height={40}
            className="object-contain"
          />
          <span className="hidden sm:inline-block text-[11px] font-bold text-teal bg-teal/10 rounded-full px-2.5 py-1 tracking-wide">
            医師・クリニック向け
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-body text-sm font-medium hover:text-teal transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a href="/" className="text-body/60 text-xs hover:text-teal transition-colors underline underline-offset-2">
            訪問看護向けはこちら
          </a>
          <a
            href="#contact"
            className="inline-flex items-center bg-teal text-white font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-teal-dark transition-colors"
          >
            無料デモ・相談
          </a>
        </div>
        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニュー"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-body font-medium py-2 hover:text-teal"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/"
            className="block text-body/60 text-sm py-2 underline underline-offset-2"
            onClick={() => setIsOpen(false)}
          >
            訪問看護向けはこちら
          </a>
          <a
            href="#contact"
            className="block bg-teal text-white font-bold px-5 py-3 rounded-lg text-center hover:bg-teal-dark transition-colors mt-2"
            onClick={() => setIsOpen(false)}
          >
            無料デモ・相談
          </a>
        </div>
      )}
    </header>
  );
}
