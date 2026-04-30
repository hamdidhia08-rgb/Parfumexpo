'use client'

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function MapSection() {
  return (
    <section className={`py-10 ${inter.className}`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Visit Us in Istanbul
          </h2>

          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            Yeşilköy, Atatürk Havalimanı Yolu No:15-17-19, Bakırköy / Istanbul
          </p>
        </div>

        {/* MAP */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps?q=Yeşilköy, Atatürk Havalimanı Yolu No:15-17-19, 34149 Bakırköy İstanbul&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full h-[400px] md:h-[500px]"
          ></iframe>
        </div>

      </div>
    </section>
  );
}