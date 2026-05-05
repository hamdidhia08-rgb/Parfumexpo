'use client';

import { Download, ArrowLeft } from "lucide-react";
import jsPDF from "jspdf";
import QRCodeLib from "qrcode";
import QRCode from "react-qr-code";

import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";
import { useEffect, useState } from "react";

export default function CompanyVoucher({ ticket, onBack }: any) {

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

  // ✅ PDF reste en anglais
  const downloadVoucher = async () => {
    try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [400, 600],
      });

      pdf.setFillColor(15, 23, 42);
      pdf.rect(0, 0, 400, 600, "F");

      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(20);
      pdf.text(`Welcome ${ticket.company_name}`, 200, 80, { align: "center" });

      pdf.setTextColor(200, 200, 200);
      pdf.setFontSize(13);
      pdf.text(
        "Your exhibitor registration is confirmed.\nSee you at Perfume Expo.",
        200,
        110,
        { align: "center" }
      );

      pdf.setTextColor(201, 162, 39);
      pdf.setFontSize(12);
      pdf.text("08 — 10 JULY 2026", 200, 150, { align: "center" });

      const qrData = JSON.stringify({
        company: ticket.company_name,
        email: ticket.email,
        stand: ticket.stand,
      });

      const qrImage = await QRCodeLib.toDataURL(qrData, {
        width: 140,
        margin: 1,
      });

      pdf.setFillColor(255, 255, 255);
      pdf.roundedRect(110, 180, 180, 180, 20, 20, "F");

      pdf.addImage(qrImage, "PNG", 130, 200, 140, 140);

      pdf.setTextColor(150, 150, 150);
      pdf.setFontSize(12);

      pdf.text(ticket.company_name, 200, 420, { align: "center" });
      pdf.text(ticket.email, 200, 440, { align: "center" });
      pdf.text(ticket.country || "", 200, 460, { align: "center" });

      pdf.save("Exhibitor-Voucher.pdf");

    } catch (err) {
      console.error("PDF ERROR:", err);
    }
  };

  return (
    <div className="flex flex-col items-center text-center py-10">

      {/* TITLE (LTR LOCKED) */}
      <h2 dir="ltr" className="text-2xl md:text-3xl font-bold mb-2">
        🎉 {t("companyVoucher.welcome")} {ticket.company_name}
      </h2>

      {/* DESC */}
      <p className="text-gray-500 mb-8">
        {t("companyVoucher.desc")}
      </p>

      {/* VOUCHER */}
      <div
        className="w-full max-w-md rounded-3xl px-6 py-8"
        style={{
          background: "#0f172a",
          color: "#ffffff",
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >

        {/* HEADER (LTR LOCKED) */}
        <h3 dir="ltr" className="text-xl font-semibold text-[#C9A227] mb-2">
          Perfume Expo Exhibitor
        </h3>

        {/* DATE (LTR LOCKED) */}
        <p dir="ltr" className="text-sm text-gray-400 mb-4">
          08 — 10 July 2026
        </p>

        {/* TEXT */}
        <p style={{ color: "#d1d5db", fontSize: "14px", marginBottom: "20px" }}>
          {t("companyVoucher.qrText")}
        </p>

        {/* QR */}
        <div className="flex justify-center mb-6">
          <div style={{ background: "#ffffff", padding: "12px", borderRadius: "12px" }}>
            <QRCode
              value={JSON.stringify({
                company: ticket.company_name,
                email: ticket.email,
                stand: ticket.stand,
              })}
              size={140}
              style={{ width: "140px", height: "140px" }}
            />
          </div>
        </div>

        {/* USER (LTR LOCKED 🔥 important) */}
        <div dir="ltr" style={{ fontSize: "12px", color: "#9ca3af" }}>
          <p>{ticket.company_name}</p>
          <p>{ticket.email}</p>
          <p>{ticket.country}</p>
        </div>

      </div>

      {/* BUTTONS */}
      <div className="w-full max-w-md mt-6 space-y-3">

        {/* DOWNLOAD (LTR) */}
        <button
          dir="ltr"
          onClick={downloadVoucher}
          className="w-full flex items-center justify-center gap-2 bg-[#C9A227] text-white py-3 rounded-xl"
        >
          <Download size={16} />
          {t("companyVoucher.download")}
        </button>

        {/* BACK (RTL friendly) */}
        <button
          onClick={onBack}
          className={`w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-xl ${
            isArabic ? "flex-row-reverse" : ""
          }`}
        >
          <ArrowLeft size={16} />
          {t("companyVoucher.back")}
        </button>

      </div>

    </div>
  );
}