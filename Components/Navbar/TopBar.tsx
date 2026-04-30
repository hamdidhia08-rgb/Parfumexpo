import { MapPin, Mail } from "lucide-react";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function TopBar() {
  return (
    <div className={`${interTight.className} w-full bg-[#22201D] text-white h-[39px] hidden md:flex items-center`}>
      <div className="max-w-[94%] mx-auto w-full flex justify-between items-center text-[13px] font-medium">

        {/* LEFT */}
        <div className="flex items-center gap-5">

          {/* SOCIAL */}
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-[#C9A227] transition">
              FB
            </a>
            <a href="#" className="hover:text-[#C9A227] transition">
              IG
            </a>
            <a href="#" className="hover:text-[#C9A227] transition">
              TW
            </a>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-2 border-l border-white/15 pl-4">
            <span className="text-white/70">Call Us:</span>
            <a href="tel:+905537431488" className="text-[#C9A227] hover:text-white">
              +90 553 743 14 88
            </a>
          </div>
        </div>

        {/* CENTER */}
        <div className="text-center">
          <span className="uppercase tracking-[0.22em] text-[11px] font-semibold">
            Luxury Fragrance Exhibition •{" "}
            <span className="text-[#C9A227]">Istanbul 2026</span>
          </span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 hover:text-[#C9A227] transition cursor-pointer">
            <MapPin size={13} />
            <span>Find Us</span>
          </div>

          <div className="flex items-center gap-2 hover:text-[#C9A227] transition">
            <Mail size={13} />
            <a href="mailto:info@ask-istanbul.com">info@ask-istanbul.com</a>
          </div>
        </div>

      </div>
    </div>
  );
}