"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ContactBlock() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    // ✅ validation simple
    if (!form.email || !form.message) {
      setError("Email and message are required");
      return;
    }

    setLoading(true);

    try {
      console.log("SENDING:", form); // 🔥 debug

      const res = await axios.post("/api/contact", form);

      console.log("RESPONSE:", res.data); // 🔥 debug

      setSuccess("Message sent successfully!");

      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });

    } catch (err: any) {
      console.log("ERROR RESPONSE:", err?.response?.data); // 🔥 IMPORTANT

      setError(
        err?.response?.data?.error || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`${inter.className} py-16 md:py-24 bg-[#f7f7f7]`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="grid lg:grid-cols-2 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">

          {/* LEFT IMAGE */}
          <div className="relative h-[320px] sm:h-[400px] lg:h-auto">
            <Image
              src="/images/contact.jpg"
              alt="contact"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/30 md:bg-black/20" />

            <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-end text-white">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-5 md:mb-6">

                <div className="flex items-start gap-3">
                  <div className="p-2.5 md:p-3 rounded-lg bg-[#C9A227] text-white">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">Call Now!</p>
                    <p className="text-xs md:text-sm text-white/80">
                      +90 538 507 39 47
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 md:p-3 rounded-lg bg-[#C9A227] text-white">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">E-mail Us!</p>
                    <p className="text-xs md:text-sm text-white/80">
                      info@parfumexp.com
                    </p>
                  </div>
                </div>

              </div>

              <div className="flex items-start gap-3 border-t border-white/20 pt-4 md:pt-6">
                <div className="p-2.5 md:p-3 rounded-lg bg-[#C9A227] text-white">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Our Location!</p>
                  <p className="text-xs md:text-sm text-white/80">
                    WOW İstanbul Hotel, Turkey
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-14">

            <p className="text-[#C9A227] text-sm mb-2 md:mb-3">• Contact Us</p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight mb-3 md:mb-4">
              Get in touch with our team anytime today
            </h2>

            <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8">
              Our team is always here to listen and support you.
            </p>

            <form onSubmit={handleSubmit} className="grid gap-4 md:gap-5">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" className="h-11 md:h-12 bg-gray-100 border-0" />
                <Input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" className="h-11 md:h-12 bg-gray-100 border-0" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input name="phone" value={form.phone} onChange={handleChange} placeholder="Mobile Number" className="h-11 md:h-12 bg-gray-100 border-0" />
                <Input name="email" value={form.email} onChange={handleChange} placeholder="E-mail Address" className="h-11 md:h-12 bg-gray-100 border-0" />
              </div>

              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="min-h-[120px] md:min-h-[140px] bg-gray-100 border-0"
              />

              {success && <p className="text-green-600 text-sm">{success}</p>}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button
                type="submit"
                disabled={loading}
                className="w-full sm:w-fit bg-[#C9A227] hover:bg-[#b8921f] text-white px-6 h-11 md:h-10 rounded-lg"
              >
                {loading ? "Sending..." : "Send A Message"}
              </Button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}