import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const AboutEventGridFinal = () => {
  // URLs d'exemple - Remplacez par vos propres chemins d'images (ex: /images/about-1.webp)
  const topImageUrl = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"; 
  const bottomImageUrl = "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop";

  return (
    // Conteneur principal avec padding pour le badge et le motif
    <div className={`${inter.className} relative w-full max-w-6xl mx-auto p-12 md:p-20 font-sans`}>
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-0">
        
        {/* --- 1. IMAGE SUPÉRIEURE (GAUCHE) --- */}
        <div className="md:col-span-8 z-10 relative">
          <div className="aspect-[4/5] w-full rounded-[40px] overflow-hidden shadow-2xl shadow-purple-950/20 ring-1 ring-black/5">
            <img 
              src={topImageUrl} 
              alt="Vue floutée de table de conférence" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* --- 2. IMAGE INFÉRIEURE (DROITE) --- */}
        {/* CORRECTION ICI : Marges négatives précises et Z-index supérieur pour le chevauchement */}
        <div className="md:col-span-7 md:absolute md:right-[-20px] md:bottom-[-80px] z-20 relative mt-[-150px] md:mt-0 pl-10 md:pl-0">
          <div className="aspect-[1/1] w-full rounded-[40px] overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-black/5">
            <img 
              src={bottomImageUrl} 
              alt="Vue du public en conférence" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* --- 3. BADGE CIRCULAIRE FLOTTANT (STATIQUE) --- */}
          {/* Positionné précisément au coin de l'image du bas */}
          <div className="absolute top-[-50px] right-[-50px] w-28 h-28 md:w-36 md:h-36 z-30 flex items-center justify-center group cursor-pointer">
            {/* Anneau violet avec texte courbé */}
            <div className="absolute inset-0 rounded-full bg-[#6C5CE7] flex items-center justify-center p-2">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                </defs>
                <text className="text-[11px] font-bold uppercase tracking-[0.2em] fill-white/90">
                  <textPath href="#circlePath" startOffset="0%">
                    Contact Us • Contact Us • Contact Us • 
                  </textPath>
                </text>
              </svg>
            </div>
            
            {/* Centre blanc fixe avec icône flèche */}
            <div className="absolute w-[60%] h-[60%] rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-[#6C5CE7] rotate-[-45deg]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* --- 4. MOTIF DE POINTS DÉCORATIF --- */}
        {/* Positionné précisément dans le coin inférieur gauche de l'ensemble */}
        <div className="absolute bottom-[20px] left-[50px] z-0 opacity-60">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#A29BFE" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#dotPattern)" />
          </svg>
        </div>

      </div>
    </div>
  );
};

export default AboutEventGridFinal;