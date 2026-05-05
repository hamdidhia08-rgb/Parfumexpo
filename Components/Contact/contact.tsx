"use client";

import Image from "next/image";
import { Inter, Cairo } from "next/font/google";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export default function ContactBlock() {
  const { t } = useTranslation();

  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    const updateLang = () => {
      const isAr = i18n.language === "ar";
      setIsArabic(isAr);
      document.documentElement.dir = isAr ? "rtl" : "ltr";
    };

    updateLang();
    i18n.on("languageChanged", updateLang);
    return () => i18n.off("languageChanged", updateLang);
  }, []);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (!form.email || !form.message) {
      setError(t("contact.errors.required"));
      return;
    }

    setLoading(true);

    try {
      await axios.post("/api/contact", form);
      setSuccess(t("contact.success"));

      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });

    } catch (err: any) {
      setError(err?.response?.data?.error || t("contact.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`${isArabic ? cairo.className : inter.className} py-16 md:py-24 bg-[#f7f7f7]`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="grid lg:grid-cols-2 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">

          {/* LEFT IMAGE */}
          <div className="relative h-[320px] sm:h-[400px] lg:h-auto">
            <Image
              src="/images/contact.jpg"
              alt="contact"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/30 md:bg-black/20" />

            <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-end text-white">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-5 md:mb-6">

                <div className={`flex items-start gap-3 ${isArabic ? " text-right" : ""}`}>
                  <div className="p-2.5 md:p-3 rounded-lg bg-[#C9A227] text-white">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">{t("contact.call")}</p>
                    <p className="text-xs md:text-sm text-white/80">
                      +90 538 507 39 47
                    </p>
                  </div>
                </div>

                <div className={`flex items-start gap-3 ${isArabic ? " text-right" : ""}`}>
                  <div className="p-2.5 md:p-3 rounded-lg bg-[#C9A227] text-white">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">{t("contact.email")}</p>
                    <p className="text-xs md:text-sm text-white/80">
                      info@parfumexp.com
                    </p>
                  </div>
                </div>

              </div>

              <div className={`flex items-start gap-3 border-t border-white/20 pt-4 md:pt-6 ${isArabic ? " text-right" : ""}`}>
                <div className="p-2.5 md:p-3 rounded-lg bg-[#C9A227] text-white">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">{t("contact.location")}</p>
                  <p className="text-xs md:text-sm text-white/80">
                    WOW İstanbul Hotel, Turkey
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-14">

            <p className={`text-[#C9A227] text-sm mb-2 md:mb-3 ${isArabic ? "text-right" : ""}`}>
              • {t("contact.badge")}
            </p>

            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight mb-3 md:mb-4 ${isArabic ? "text-right" : ""}`}>
              {t("contact.title")}
            </h2>

            <p className={`text-gray-500 text-sm md:text-base mb-6 md:mb-8 ${isArabic ? "text-right" : ""}`}>
              {t("contact.desc")}
            </p>

            <form onSubmit={handleSubmit} className="grid gap-4 md:gap-5">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input name="firstName" value={form.firstName} onChange={handleChange} placeholder={t("contact.firstName")} className={`h-11 md:h-12 bg-gray-100 border-0 ${isArabic ? "text-right" : ""}`} />
                <Input name="lastName" value={form.lastName} onChange={handleChange} placeholder={t("contact.lastName")} className={`h-11 md:h-12 bg-gray-100 border-0 ${isArabic ? "text-right" : ""}`} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input name="phone" value={form.phone} onChange={handleChange} placeholder={t("contact.phone")} className={`h-11 md:h-12 bg-gray-100 border-0 ${isArabic ? "text-right" : ""}`} />
                <Input name="email" value={form.email} onChange={handleChange} placeholder={t("contact.emailInput")} className={`h-11 md:h-12 bg-gray-100 border-0 ${isArabic ? "text-right" : ""}`} />
              </div>

              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t("contact.message")}
                className={`min-h-[120px] md:min-h-[140px] bg-gray-100 border-0 ${isArabic ? "text-right" : ""}`}
              />

              {success && <p className="text-green-600 text-sm">{success}</p>}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button
                type="submit"
                disabled={loading}
                className="w-full sm:w-fit bg-[#C9A227] hover:bg-[#b8921f] text-white px-6 h-11 md:h-10 rounded-lg"
              >
                {loading ? t("contact.sending") : t("contact.submit")}
              </Button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}