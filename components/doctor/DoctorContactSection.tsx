"use client";
import { useState } from "react";
import { MessageCircle, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useInView } from "@/app/hooks/useInView";

type Status = "idle" | "loading" | "success" | "error";

export default function DoctorContactSection() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: formRef, inView: formIn } = useInView();

  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    clinic: "",
    role: "",
    fulltimeCount: "",
    parttimeCount: "",
    email: "",
    phone: "",
    message: "",
    purpose: "無料デモ希望",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "1f4fa5b5-d4c0-4604-87ca-4c0ef668abe5",
          subject: `【kowairo医師版】${form.purpose}：${form.clinic}`,
          from_name: form.name,
          name: form.name,
          clinic: form.clinic,
          role: form.role || "未入力",
          fulltime_count: form.fulltimeCount || "未入力",
          parttime_count: form.parttimeCount || "未入力",
          email: form.email,
          phone: form.phone || "未入力",
          purpose: form.purpose,
          message: form.message || "（本文なし）",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({
          name: "",
          clinic: "",
          role: "",
          fulltimeCount: "",
          parttimeCount: "",
          email: "",
          phone: "",
          message: "",
          purpose: "無料デモ希望",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-narrow">
        {/* Heading */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label">CONTACT</span>
          <h2 className="section-title">
            導入相談・
            <span className="text-teal">お問い合わせ</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            クリニックの診療体制や連携先の状況に合わせて個別にご提案します。
            <br />
            まずはお気軽にご相談ください。通常2営業日以内にご返信します。
          </p>
        </div>

        {/* Form */}
        <div
          ref={formRef as React.RefObject<HTMLDivElement>}
          className={`max-w-2xl mx-auto transition-all duration-700 ${formIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {status === "success" ? (
            <div className="bg-teal/5 border border-teal/20 rounded-3xl p-12 text-center">
              <CheckCircle size={48} className="text-teal mx-auto mb-4" />
              <h3 className="text-xl font-black text-navy mb-2">送信が完了しました</h3>
              <p className="text-body text-sm">
                お問い合わせありがとうございます。
                <br />
                担当者より2営業日以内にご連絡いたします。
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-teal text-sm font-medium underline underline-offset-2"
              >
                別の内容で送る
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8 md:p-10 space-y-5">
              {/* 氏名 */}
              <div>
                <label className="block text-sm font-bold text-navy mb-1.5">
                  お名前 <span className="text-coral text-xs">必須</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="山田 太郎"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal bg-white transition"
                />
              </div>

              {/* クリニック名 */}
              <div>
                <label className="block text-sm font-bold text-navy mb-1.5">
                  クリニック名 <span className="text-coral text-xs">必須</span>
                </label>
                <input
                  type="text"
                  name="clinic"
                  value={form.clinic}
                  onChange={handleChange}
                  required
                  placeholder="〇〇在宅クリニック"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal bg-white transition"
                />
              </div>

              {/* 役職 */}
              <div>
                <label className="block text-sm font-bold text-navy mb-1.5">
                  役職 <span className="text-gray-400 text-xs font-normal">任意</span>
                </label>
                <input
                  type="text"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  placeholder="院長 / 医師 / 事務長 など"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal bg-white transition"
                />
              </div>

              {/* 医師人数 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-navy mb-1.5">
                    常勤医師数 <span className="text-gray-400 text-xs font-normal">任意</span>
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    name="fulltimeCount"
                    value={form.fulltimeCount}
                    onChange={handleChange}
                    placeholder="例：2"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal bg-white transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-1.5">
                    非常勤医師数 <span className="text-gray-400 text-xs font-normal">任意</span>
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    name="parttimeCount"
                    value={form.parttimeCount}
                    onChange={handleChange}
                    placeholder="例：1"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal bg-white transition"
                  />
                </div>
              </div>

              {/* メール */}
              <div>
                <label className="block text-sm font-bold text-navy mb-1.5">
                  メールアドレス <span className="text-coral text-xs">必須</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="taro@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal bg-white transition"
                />
              </div>

              {/* 電話番号 */}
              <div>
                <label className="block text-sm font-bold text-navy mb-1.5">
                  電話番号 <span className="text-gray-400 text-xs font-normal">任意</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="03-0000-0000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal bg-white transition"
                />
              </div>

              {/* メッセージ */}
              <div>
                <label className="block text-sm font-bold text-navy mb-1.5">
                  ご相談内容 <span className="text-gray-400 text-xs font-normal">任意</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="気になること、診療体制の状況など何でもご記入ください。"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal bg-white transition resize-none"
                />
              </div>

              {/* 希望内容 */}
              <div>
                <label className="block text-sm font-bold text-navy mb-1.5">
                  ご希望内容 <span className="text-coral text-xs">必須</span>
                </label>
                <select
                  name="purpose"
                  value={form.purpose}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal bg-white transition"
                >
                  <option value="無料デモ希望">無料デモを希望したい</option>
                  <option value="資料希望">サービス資料がほしい</option>
                  <option value="まずは相談したい">まずは相談したい</option>
                </select>
              </div>

              {/* Error */}
              {status === "error" && (
                <div className="flex items-center gap-2 text-coral text-sm bg-coral/5 border border-coral/20 rounded-xl px-4 py-3">
                  <AlertCircle size={16} className="flex-shrink-0" />
                  送信に失敗しました。時間をおいて再度お試しください。
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 bg-teal text-white font-black py-4 rounded-xl text-base hover:bg-teal-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    送信中…
                  </>
                ) : (
                  <>
                    <MessageCircle size={18} />
                    無料デモ・導入相談をする
                  </>
                )}
              </button>

              <p className="text-center text-gray-400 text-xs">
                送信後、2営業日以内に info@idenshi.net よりご返信します。
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
