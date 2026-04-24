"use client";

import React, { useEffect, useState } from "react";

const WhatsappButtons: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsapp = () => {
    const phone = "+905385073947";
    const message = encodeURIComponent("Hello !");
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={openWhatsapp}
      aria-label="Contact via WhatsApp"
      className={`fixed bottom-26 right-2 z-[250] bg-[#25D366] p-3 rounded-full shadow-xl hover:bg-[#1ebe5b] transition-all duration-500 flex items-center justify-center
        ${showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}
      `}
    >
      <div className="relative w-9 h-9">
       <img
  src="/images/whatsup.svg"
  alt="WhatsApp"
  className="w-full h-full object-contain filter brightness-0 invert"
/>

        {/* Badge */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
          1
        </span>
      </div>
    </button>
  );
};

export default WhatsappButtons;
