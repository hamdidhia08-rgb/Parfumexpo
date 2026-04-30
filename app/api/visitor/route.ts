import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { transporter } from "@/lib/mailer";
import QRCode from "qrcode";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      full_name,
      email,
      phone,
      country,
      first_visit,
      source,
      interest,
      accepted_terms,
    } = data;

    // ✅ INSERT DB
    await pool.query(
      `INSERT INTO visitors 
      (full_name, email, phone, country, first_visit, source, interest, accepted_terms)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        full_name || "",
        email || "",
        phone || "",
        country || "",
        first_visit || "",
        source || "",
        interest || "perfume",
        accepted_terms ? 1 : 0,
      ]
    );

    // 🔥 QR DATA
    const qrData = JSON.stringify({
      name: full_name,
      email,
      phone,
      country,
    });

    // ✅ IMPORTANT: BUFFER (pas DataURL)
    const qrBuffer = await QRCode.toBuffer(qrData);

    // ✨ EMAIL TEMPLATE
  const html = `
<div style="font-family: Arial, sans-serif; background:#0f172a; padding:40px; color:#fff;">
  <div style="max-width:600px; margin:auto; background:#111827; border-radius:16px; padding:30px; text-align:center;">
    
    <h1 style="color:#C9A227; margin-bottom:10px;">
      Parfum Expo ✨
    </h1>

    <!-- 🔥 DATE EVENT -->
    <div style="margin-bottom:20px;">
      <span style="
        display:inline-block;
        padding:8px 18px;
        border:1px solid rgba(201,162,39,0.4);
        color:#C9A227;
        border-radius:999px;
        font-size:13px;
        letter-spacing:1px;
      ">
        08 – 10 July 2026
      </span>
    </div>

    <h2 style="margin-bottom:20px;">
      Welcome, ${full_name} 👋
    </h2>

    <p style="color:#d1d5db; line-height:1.6;">
      We are delighted to confirm your registration for our exclusive 
      <strong>Perfume Exhibition</strong>.
    </p>

    <p style="color:#d1d5db; margin-top:10px;">
      Get ready to explore luxury fragrances, discover unique scents, 
      and connect with the finest perfume brands.
    </p>

    <div style="margin:30px 0;">
      <span style="
        display:inline-block;
        padding:12px 25px;
        background:#C9A227;
        color:#fff;
        border-radius:999px;
        font-weight:bold;
      ">
        Your Spot is Confirmed 🎉
      </span>
    </div>

    <!-- ✅ QR CODE -->
    <div style="margin:30px 0;">
      <img 
        src="cid:qrcode"
        alt="QR Code"
        style="
          width:160px;
          height:160px;
          border-radius:12px;
          background:#fff;
          padding:10px;
          display:block;
          margin:auto;
        "
      />
      <p style="color:#9ca3af; font-size:13px; margin-top:10px;">
        Scan this QR code at the entrance
      </p>
    </div>

    <p style="font-size:12px; color:#6b7280;">
      We look forward to seeing you at the event.
    </p>

  </div>
</div>
`;

    // 📩 SEND EMAIL (avec attachment CID)
    await transporter.sendMail({
      from: `"Perfume Expo" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Welcome to Perfume Expo ✨",
      html,

      attachments: [
        {
          filename: "qrcode.png",
          content: qrBuffer,
          cid: "qrcode", // 🔥 DOIT matcher src="cid:qrcode"
        },
      ],
    });

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("ERROR:", error);

    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: error.message || "Server error" },
      { status: 500 }
    );
  }
}