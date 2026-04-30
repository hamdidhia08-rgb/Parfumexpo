'use client';

import Image from "next/image";
import QRCode from "react-qr-code";
import { Download, ArrowLeft } from "lucide-react";
import jsPDF from "jspdf";
import QRCodeLib from "qrcode"; // ✅ IMPORTANT

export default function Voucher({ ticket, onBack }: any) {

const downloadVoucher = async () => {
  try {
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [400, 600],
    });

    // 🔥 BACKGROUND
    pdf.setFillColor(15, 23, 42);
    pdf.rect(0, 0, 400, 600, "F");

pdf.setTextColor(255, 255, 255);
pdf.setFontSize(20);
pdf.text(`Thank You, ${ticket.full_name}`, 200, 80, { align: "center" });

    // 🔥 SUBTEXT
    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(13);
    pdf.text(
      "Your registration is confirmed.\nHere is your digital invitation.",
      200,
      110,
      { align: "center" }
    );

    // 🔥 DATE
    pdf.setTextColor(201, 162, 39);
    pdf.setFontSize(12);
    pdf.text("08 — 10 JULY 2026", 200, 150, { align: "center" });

    // 🔥 QR CODE (SMALL & CENTERED)
    const qrData = JSON.stringify({
      name: ticket.full_name,
      email: ticket.email,
      country: ticket.country,
    });

    const qrImage = await QRCodeLib.toDataURL(qrData, {
      width: 140,
      margin: 1,
    });

    // background white
    pdf.setFillColor(255, 255, 255);
    pdf.roundedRect(110, 180, 180, 180, 20, 20, "F");

    pdf.addImage(qrImage, "PNG", 130, 200, 140, 140);

    // 🔥 FOOTER USER
    pdf.setTextColor(150, 150, 150);
    pdf.setFontSize(12);

    pdf.text(ticket.full_name, 200, 420, { align: "center" });
    pdf.text(ticket.email, 200, 440, { align: "center" });
    pdf.text(ticket.country, 200, 460, { align: "center" });

    pdf.save("Perfume-Expo-Voucher.pdf");

  } catch (err) {
    console.error("QR PDF ERROR:", err);
  }
};

  return (
    <div className="flex flex-col items-center text-center py-8 md:py-12">

      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        🎉 Thank You, {ticket.full_name}
      </h2>

      <p className="text-gray-500 mb-10">
        Your registration is confirmed. Here is your digital invitation.
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

        {/* LOGO */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#C9A227",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="/images/icon.png" width={26} />
          </div>

          <span className="text-xl font-bold">
            Parfum Expo<span style={{ color: "#C9A227" }}>.</span>
          </span>
        </div>

        {/* DATE */}
        <div className="mb-6">
          <span
            style={{
              padding: "6px 14px",
              fontSize: "11px",
              border: "1px solid rgba(201,162,39,0.4)",
              color: "#C9A227",
              borderRadius: "999px",
              letterSpacing: "1px",
            }}
          >
            08 — 10 JULY 2026
          </span>
        </div>

        {/* TEXT */}
        <p style={{ color: "#d1d5db", fontSize: "14px", marginBottom: "20px" }}>
          Present this QR code at the entrance.
        </p>

        {/* QR UI (just display) */}
        <div className="flex justify-center mb-6">
          <div style={{ background: "#ffffff", padding: "12px", borderRadius: "12px" }}>
            <QRCode
              value={JSON.stringify(ticket)}
              size={140}
              style={{ width: "140px", height: "140px" }}
            />
          </div>
        </div>

        {/* USER */}
        <div style={{ fontSize: "12px", color: "#9ca3af" }}>
          <p>{ticket.full_name}</p>
          <p>{ticket.email}</p>
          <p>{ticket.country}</p>
        </div>

      </div>

      {/* BUTTONS */}
      <div className="w-full max-w-md mt-6 space-y-3">

        <button
          onClick={downloadVoucher}
          className="w-full flex items-center justify-center gap-2 bg-[#C9A227] text-white py-3 rounded-xl"
        >
          <Download size={16} />
          Download Voucher
        </button>

        <button
          onClick={onBack}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-xl"
        >
          <ArrowLeft size={16} />
          Back to Register
        </button>

      </div>

    </div>
  );
}