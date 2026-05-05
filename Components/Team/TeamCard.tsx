'use client';

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function TeamCard({
  name,
  role,
  image,
  facebook,
  instagram,
  twitter,
  phone,
  isArabic,
}: any) {

  const openWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!phone) return;
    const formattedPhone = phone.replace(/\D/g, "");
    window.open(`https://wa.me/${formattedPhone}`, "_blank");
  };

  return (
    <div className="w-[300px] bg-white rounded-md overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.08)] cursor-pointer group">

      <div className="relative h-[380px] overflow-hidden">

        {/* IMAGE */}
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* 🔥 SOCIALS FIX */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 flex flex-col z-20
          ${
            isArabic
              ? "left-0 translate-x-[-100%] group-hover:translate-x-0"
              : "right-0 translate-x-[100%] group-hover:translate-x-0"
          }
          transition-transform duration-300 ease-in-out bg-[#FFC400] shadow-lg`}
        >

          {facebook && (
            <a
              href={facebook}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="w-11 h-11 flex items-center justify-center text-white border-b border-white/30 hover:bg-black/20 transition"
            >
              <FaFacebookF size={14} />
            </a>
          )}

          {twitter && (
            <a
              href={twitter}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="w-11 h-11 flex items-center justify-center text-white border-b border-white/30 hover:bg-black/20 transition"
            >
              <FaTwitter size={14} />
            </a>
          )}

          {instagram && (
            <a
              href={instagram}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="w-11 h-11 flex items-center justify-center text-white border-b border-white/30 hover:bg-black/20 transition"
            >
              <FaInstagram size={14} />
            </a>
          )}

          {phone && (
            <button
              onClick={openWhatsApp}
              className="w-11 h-11 flex items-center justify-center text-white hover:bg-black/20 transition"
            >
              <FaWhatsapp size={14} />
            </button>
          )}

        </div>

        {/* ROLE BADGE */}
        <span
          className={`absolute bottom-0 ${
            isArabic ? "right-0 pr-[14px] pl-[48px]" : "left-0 pl-[14px] pr-[48px]"
          } bg-[#FFC400] text-black text-[15px] font-semibold py-[10px] z-10`}
          style={{
            clipPath: isArabic
              ? "polygon(10% 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(0 0, 90% 0, 100% 100%, 0 100%)",
          }}
        >
          {role}
        </span>

      </div>

      {/* NAME */}
      <div className="p-4 text-center">
        <h3 className="text-[18px] font-bold text-[#111] leading-relaxed">
          {name}
        </h3>
      </div>

    </div>
  );
}