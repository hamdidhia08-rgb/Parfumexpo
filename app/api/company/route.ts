import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { transporter } from "@/lib/mailer";
import QRCode from "qrcode";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      first_name,
      last_name,
      title,
      position,
      email,
      mobile,
      company_phone,
      fax,
      company_name,
      country,
      region,
      city,
      postal_code,
      address,
      website,
      facebook,
      linkedin,
      instagram,
      youtube,
      twitter,
      activity_type,
      stand,
      stand_type,
      stand_size,
      stand_location,
      notes,
      accepted,
    } = data;

    // ✅ VALIDATION
    if (!first_name || !email || !company_name) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    if (accepted !== true) {
      return NextResponse.json(
        { error: "You must accept terms" },
        { status: 400 }
      );
    }

    // ✅ INSERT DB
    await pool.query(
      `INSERT INTO companies (
        first_name, last_name, title, position,
        email, mobile, company_phone, fax,
        company_name, country, region, city, postal_code, address,
        website, facebook, linkedin, instagram, youtube, twitter,
        activity_type, stand, stand_type, stand_size, stand_location,
        notes, accepted
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        first_name || "",
        last_name || "",
        title || "",
        position || "",
        email || "",
        mobile || "",
        company_phone || "",
        fax || "",
        company_name || "",
        country || "",
        region || "",
        city || "",
        postal_code || "",
        address || "",
        website || "",
        facebook || "",
        linkedin || "",
        instagram || "",
        youtube || "",
        twitter || "",
        activity_type || "",
        stand ?? "no",
        stand_type || "",
        stand_size || "",
        stand_location || "",
        notes || "",
        accepted ? 1 : 0,
      ]
    );

    // 🔥 QR DATA (COMPANY)
    const qrData = JSON.stringify({
      name: `${first_name} ${last_name}`,
      email,
      company: company_name,
      country,
      stand: stand || "no",
    });

    const qrBuffer = await QRCode.toBuffer(qrData);

    // ✨ EMAIL TEMPLATE (PRO VERSION)
    const html = `
<div style="font-family: Arial, sans-serif; background:#0f172a; padding:40px; color:#fff;">
  <div style="max-width:600px; margin:auto; background:#111827; border-radius:16px; padding:30px; text-align:center;">
    
    <h1 style="color:#C9A227; margin-bottom:10px;">
      Parfum Expo ✨
    </h1>

    <!-- DATE -->
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
      Welcome, ${first_name} ${last_name} 👋
    </h2>

    <p style="color:#d1d5db; line-height:1.6;">
      Your company <strong>${company_name}</strong> has been successfully registered 
      for the <strong>Perfume Expo</strong>.
    </p>

    <p style="color:#d1d5db; margin-top:10px;">
      We are excited to have you among our exhibitors and partners.
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
        Registration Confirmed 🎉
      </span>
    </div>

    <!-- QR -->
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

    // 📩 SEND EMAIL
    await transporter.sendMail({
      from: `"Perfume Expo" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Company Registration - Perfume Expo ✨",
      html,

      attachments: [
        {
          filename: "qrcode.png",
          content: qrBuffer,
          cid: "qrcode",
        },
      ],
    });

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("COMPANY ERROR:", error);

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