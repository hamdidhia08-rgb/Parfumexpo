import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("BODY:", body);

    const { firstName, lastName, email, phone, message } = body;

    if (!email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const fullName = `${firstName || ""} ${lastName || ""}`;

    const adminEmail =
      process.env.CONTACT_EMAIL || process.env.SMTP_USER;

    // ✨ EMAIL ADMIN (clean & pro)
    const adminHtml = `
    <div style="font-family: Arial, sans-serif; background:#f3f4f6; padding:30px;">
      <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; padding:25px; box-shadow:0 10px 30px rgba(0,0,0,0.05);">
        
        <h2 style="margin-bottom:20px; color:#111;">
          📩 New Contact Message
        </h2>

        <div style="margin-bottom:15px;">
          <strong>Name:</strong><br/>
          <span style="color:#374151;">${fullName}</span>
        </div>

        <div style="margin-bottom:15px;">
          <strong>Email:</strong><br/>
          <span style="color:#374151;">${email}</span>
        </div>

        <div style="margin-bottom:15px;">
          <strong>Phone:</strong><br/>
          <span style="color:#374151;">${phone || "-"}</span>
        </div>

        <div style="margin-top:20px;">
          <strong>Message:</strong>
          <div style="
            margin-top:10px;
            padding:15px;
            background:#f9fafb;
            border-radius:8px;
            color:#374151;
            line-height:1.6;
          ">
            ${message}
          </div>
        </div>

      </div>
    </div>
    `;

    // 💎 EMAIL USER (premium branding)
    const userHtml = `
    <div style="font-family: Arial, sans-serif; background:#0f172a; padding:40px; color:#fff;">
      <div style="max-width:600px; margin:auto; background:#111827; border-radius:16px; padding:30px; text-align:center;">
        
        <h1 style="color:#C9A227; margin-bottom:10px;">
          Parfum Expo ✨
        </h1>

        <p style="
          color:#9ca3af;
          font-size:13px;
          margin-bottom:20px;
          letter-spacing:1px;
        ">
          LUXURY FRAGRANCE EXPERIENCE
        </p>

        <h2 style="margin-bottom:15px;">
          Hello ${firstName || "there"} 👋
        </h2>

        <p style="color:#d1d5db; line-height:1.6;">
          Thank you for reaching out to us.
        </p>

        <p style="color:#d1d5db; margin-top:10px;">
          Your message has been successfully received.  
          Our team will get back to you shortly.
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
            Message Received ✅
          </span>
        </div>

        <p style="font-size:12px; color:#6b7280;">
          © 2026 Parfum Expo — All rights reserved
        </p>

      </div>
    </div>
    `;

    // 📩 SEND ADMIN
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      subject: "New Contact Message",
      html: adminHtml,
    });

    // 📩 SEND USER
    await transporter.sendMail({
      from: `"Parfum Expo" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your message ✨",
      html: userHtml,
    });

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("❌ CONTACT ERROR:", error);

    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}