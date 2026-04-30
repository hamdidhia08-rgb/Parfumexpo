import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.hostinger.com",

  port: Number(process.env.SMTP_PORT) || 465,

  secure: true, // ✅ obligatoire pour port 465

  auth: {
    user: process.env.SMTP_USER, // ex: info@parfumexp.com
    pass: process.env.SMTP_PASS, // mot de passe email
  },

  tls: {
    rejectUnauthorized: false, // 🔥 évite certains bugs SSL (Hostinger)
  },
});