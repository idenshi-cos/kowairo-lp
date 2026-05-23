"use client";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useInView } from "@/app/hooks/useInView";

export default function ContactSection() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: bodyRef, inView: bodyIn } = useInView();

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-narrow">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label">CONTACT</span>
          <h2 className="section-title">
            料金・導入について
            <span className="text-teal">お気軽にご相談ください</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            現在、ステーションの規模や状況に合わせて
            <br />
            個別にご提案させていただいています。
            <br />
            まずはお気軽にお問い合わせください。
          </p>
        </div>

        <div
          ref={bodyRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 ${bodyIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto">
            <a
              href="mailto:info@idenshi.co.jp?subject=kowairo 導入相談"
              className="inline-flex items-center justify-center gap-2 bg-teal text-white font-black px-10 py-4 rounded-xl text-lg hover:bg-teal-dark transition-colors shadow-lg mb-6"
            >
              <MessageCircle size={20} />
              導入相談する
              <ArrowRight size={18} />
            </a>

            <p className="text-body text-sm">
              <span className="font-medium">info@idenshi.co.jp</span>
              　｜　通常2営業日以内にご返信します
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
