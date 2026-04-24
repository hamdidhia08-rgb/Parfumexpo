"use client";

import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  phone?: string;
}

export default function TeamCard({
  name,
  role,
  image,
  facebook,
  instagram,
  twitter,
  phone,
}: TeamCardProps) {

  const openWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!phone) return;
    const formattedPhone = phone.replace(/\D/g, "");
    window.open(`https://wa.me/${formattedPhone}`, "_blank");
  };

  return (
    <div className="w-[300px] bg-white rounded-md overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.08)] font-inter cursor-pointer group">
      
      <div className="relative h-[380px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* SOCIALS → RIGHT */}
        <div className="absolute top-1/2 -translate-y-1/2 right-[-60px] group-hover:right-0 transition-all duration-300 bg-yellow-400 flex flex-col z-10">
          
          {facebook && (
            <a href={facebook} target="_blank" onClick={(e)=>e.stopPropagation()}
              className="w-11 h-11 flex items-center justify-center text-white border-b border-white/30">
              
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.8v-2.9h2.8V9.4c0-2.8 1.7-4.4 4.2-4.4 1.2 0 2.5.2 2.5.2v2.7h-1.4c-1.4 0-1.9.9-1.9 1.8v2.2h3.2l-.5 2.9h-2.7v7A10 10 0 0 0 22 12"/>
              </svg>

            </a>
          )}

          {twitter && (
            <a href={twitter} target="_blank" onClick={(e)=>e.stopPropagation()}
              className="w-11 h-11 flex items-center justify-center text-white border-b border-white/30">
              
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.9-2.6 1.1A4.1 4.1 0 0 0 12 8.3c0 .3 0 .6.1.9-3.4-.2-6.5-1.8-8.5-4.3-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.6 1.8 3.4-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.2 4-.3.1-.7.2-1 .2-.3 0-.5 0-.7-.1.5 1.6 2 2.7 3.7 2.7A8.3 8.3 0 0 1 2 19.5a11.7 11.7 0 0 0 6.3 1.8c7.5 0 11.7-6.2 11.7-11.7v-.5c.8-.6 1.4-1.3 2-2.2"/>
              </svg>

            </a>
          )}

          {instagram && (
            <a href={instagram} target="_blank" onClick={(e)=>e.stopPropagation()}
              className="w-11 h-11 flex items-center justify-center text-white border-b border-white/30">
              
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5.3A4.7 4.7 0 1 1 7.3 12 4.7 4.7 0 0 1 12 7.3zm6-1.8a1.2 1.2 0 1 1-1.2 1.2A1.2 1.2 0 0 1 18 5.5zM12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/>
              </svg>

            </a>
          )}

          {phone && (
            <button
              onClick={openWhatsApp}
              className="w-11 h-11 flex items-center justify-center text-white"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.5 5.9L0 24l6.2-1.6c1.7.9 3.6 1.4 5.8 1.4 6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.1-3.4-8.4z"/>
              </svg>
            </button>
          )}

        </div>

        {/* ROLE BADGE → LEFT */}
        <span
          className="absolute bottom-0 left-0 bg-[#FFC400] text-black text-[15px] font-semibold py-[10px] pl-[14px] pr-[48px] z-10"
          style={{
            clipPath: "polygon(0 0, 90% 0, 100% 100%, 0 100%)",
          }}
        >
          {role}
        </span>
      </div>

      <div className="p-4 text-center">
        <h3 className="text-[18px] font-bold text-[#111] leading-relaxed">
          {name}
        </h3>
      </div>
    </div>
  );
}