"use client";

import { Inter } from "next/font/google";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Footer() {
  return (
    <footer className={`${inter.className} relative bg-[#121211] text-white px-6 md:px-16 py-14 overflow-hidden`}>

<div className="absolute inset-0 pointer-events-none opacity-20">
  <Image
    src="/images/patern.webp"
    alt="background pattern"
    fill
    className="object-center"
  />
</div>
      {/* DARK OVERLAY (important pour lisibilité) */}

      {/* CONTENT */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* LOGO + DESCRIPTION */}
        <div>
          <Link href="/" className="flex items-center gap-3 group mb-4">
            
            <div className="w-10 h-10 rounded-full bg-[#C9A227] flex items-center justify-center shadow-lg shadow-[#C9A227]/20">
              <Image
                src="/images/icon.png"
                alt="Logo"
                width={35}
                height={35}
                className="object-contain"
              />
            </div>

            <span className="text-2xl font-bold tracking-tight transition-colors duration-300 text-white group-hover:text-[#C9A227]">
              Perfum Expo
              <span className="text-[#C9A227]">.</span>
            </span>
          </Link>

          <p className="text-gray-400 text-sm leading-relaxed">
            Discover a unique experience in the world of perfumes.
            Elegance, luxury, and quality combined to offer you the best.
          </p>

          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#C9A227] hover:text-black transition duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* LINKS 1 */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Navigation</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Register</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* LINKS 2 */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition">Shipping</a></li>
            <li><a href="#" className="hover:text-white transition">Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms</a></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to receive the latest offers and updates.
          </p>

          <div className="flex items-center bg-white rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 text-black outline-none"
            />
            <button className="bg-[#C9A227] text-black px-4 py-2 font-semibold hover:bg-yellow-400 transition">
              OK
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="relative z-10 border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Perfume Expo. All rights reserved.
      </div>
    </footer>
  );
}