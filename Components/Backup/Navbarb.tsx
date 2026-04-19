import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/', hasDropdown: true },
    { name: 'About', href: '/about' },
    { name: 'Exhibitors', href: '/exhibitors' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`${inter.className} fixed top-0 left-0 w-full z-50 bg-white/[0.03] backdrop-blur-xl border-b border-white/10 shadow-2xl`}>
      <nav className="container mx-auto flex items-center justify-between py-5 px-8">
        
        {/* LOGO PARFUM */}
        <Link href="/" className="flex items-center gap-3">
          
          {/* ICON (flacon parfum stylé) */}
          <div className="w-10 h-10 rounded-full bg-[#FF4D8D] flex items-center justify-center shadow-lg shadow-pink-500/30">
            <svg 
              className="w-5 h-5 text-white" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              {/* Bottle */}
              <rect x="7" y="8" width="10" height="12" rx="2"></rect>
              {/* Neck */}
              <line x1="10" y1="4" x2="14" y2="4"></line>
              <line x1="12" y1="4" x2="12" y2="8"></line>
              {/* Spray */}
              <circle cx="12" cy="2.5" r="1"></circle>
            </svg>
          </div>

          <span className="text-2xl font-bold text-white tracking-tight">
            Parfume<span className="text-[#FF4D8D]">.</span>
          </span>
        </Link>

        {/* MENU */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="group flex items-center gap-1.5 text-white/80 hover:text-white transition-all text-[15px] font-medium"
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" strokeWidth={2} />
              )}
            </Link>
          ))}
        </div>

          {/* BUTTON ROSE AFFINÉ */}
<div className="hidden lg:block">
  <button className="bg-[#FF4D8D] hover:bg-[#e8437c] text-white px-7 py-2 rounded-full font-semibold text-[14px] transition-all shadow-md shadow-pink-500/10 active:scale-95">
    Join the Expo
  </button>
</div>
      </nav>
    </header>
  );
};

export default Navbar;