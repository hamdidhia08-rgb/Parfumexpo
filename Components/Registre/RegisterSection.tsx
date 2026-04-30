'use client';

import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/Components/ui/tabs";
import { User, Building2, Download } from "lucide-react";
import VisitorForm from "./VisitorForm";
import CompanyForm from "./CompanyForm";
import QRCode from "react-qr-code";
import Voucher from "./Voucher";
import CompanyVoucher from "./CompanyVoucher";

const inter = Inter({ subsets: ["latin"] });

export default function RegisterSection() {

const [ticket, setTicket] = useState<any>(null);
const [type, setType] = useState<"visitor" | "company" | null>(null);

// 🔥 visitor
const handleVisitorSuccess = (data: any) => {
  setTicket(data);
  setType("visitor");
};

// 🔥 company
const handleCompanySuccess = (data: any) => {
  setTicket(data);
  setType("company");
};

  // 🔥 download (print)
  const downloadVoucher = () => {
    window.print();
  };

  return (
    <section className={`relative py-16 md:py-24 bg-white overflow-hidden ${inter.className}`}>

      {/* LEFT IMAGE */}
      <Image
        src="/images/pen.png"
        alt="decoration"
        width={300}
        height={300}
        className="absolute left-0 top-40 -translate-y-1/2 hidden lg:block"
      />

      {/* RIGHT IMAGE */}
      <Image
        src="/images/badge.png"
        alt="badge"
        width={350}
        height={350}
        className="absolute right-0 top-40 -translate-y-1/2 hidden lg:block"
      />

      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[#C9A227] text-xs md:text-sm mb-2 uppercase tracking-widest">
            Join The Experience
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Register for the{" "}
            <span className="text-[#C9A227]">Perfume Expo</span>
          </h2>

          <p className="text-gray-500 mt-3 md:mt-4 max-w-xl mx-auto text-sm md:text-base">
            Secure your place in the most exclusive fragrance exhibition.
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg md:shadow-xl w-full">

          {/* 🔥 SI SUCCESS → VOUCHER */}
         {ticket ? (
                <>
                  {type === "visitor" && (
                    <Voucher
                      ticket={ticket}
                      onBack={() => {
                        setTicket(null);
                        setType(null);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    />
                  )}

                  {type === "company" && (
                    <CompanyVoucher
                      ticket={ticket}
                      onBack={() => {
                        setTicket(null);
                        setType(null);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    />
                  )}
                </>
              ) : (
            <>
              {/* 🔥 TABS NORMAL */}
              <Tabs defaultValue="visitor" className="w-full">

                <div className="flex justify-center mb-6 md:mb-10">
                  <TabsList className="flex w-full md:w-fit bg-gray-100 rounded-xl md:rounded-full p-1">

                    <TabsTrigger
                      value="visitor"
                      className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 md:px-6 py-4 rounded-xl md:rounded-full text-sm data-[state=active]:bg-[#C9A227] data-[state=active]:text-white transition"
                    >
                      <User size={16} />
                      Visitor
                    </TabsTrigger>

                    <TabsTrigger
                      value="company"
                      className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 md:px-6 py-4 rounded-xl md:rounded-full text-sm data-[state=active]:bg-[#C9A227] data-[state=active]:text-white transition"
                    >
                      <Building2 size={16} />
                      Exhibitor
                    </TabsTrigger>

                  </TabsList>
                </div>

                <TabsContent value="visitor" className="mt-4 md:mt-6">
                  <VisitorForm onSuccess={handleVisitorSuccess} />
                </TabsContent>

                <TabsContent value="company" className="mt-4 md:mt-6">
                  <CompanyForm onSuccess={handleCompanySuccess} />
                </TabsContent>

              </Tabs>
            </>
          )}

        </div>
      </div>
    </section>
  );
}