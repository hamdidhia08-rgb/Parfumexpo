'use client';

import { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { Label } from "@/Components/ui/label";
import { Mail, Phone, Globe, User2 } from "lucide-react";
import CountrySelect from "./CountrySelect";

export default function VisitorForm({ onSuccess }: any) {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    country: "",
    first_visit: "",
    source: "",
    interest: "perfume",
    accepted_terms: false,
  });

  // 🔹 handle change
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 🔹 validation
  const validate = () => {
    if (!form.full_name) return "Full name is required";
    if (!form.email) return "Email is required";
    if (!form.country) return "Country is required";
    if (!form.accepted_terms) return "You must accept terms";
    return null;
  };

  // 🔹 submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      await axios.post("/api/visitor", form);

      toast.success("Registered successfully 🎉");

      // 🔥 ENVOI AU PARENT (IMPORTANT)
      onSuccess(form);

    } catch (err: any) {
      console.error(err);
      toast.error(err?.response?.data?.error || "Something went wrong ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-8">

      {/* ERROR MESSAGE */}
      {error && (
        <div className="text-red-500 text-sm bg-red-50 border border-red-200 p-3 rounded-xl">
          {error}
        </div>
      )}

      {/* PERSONAL INFO */}
      <div className="grid gap-4">
        <div className="grid md:grid-cols-2 gap-4">

          <div className="relative">
            <User2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <Input
              name="full_name"
              value={form.full_name}
              onChange={handleChange}
              placeholder="Full Name"
              className="h-12 pl-10"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="h-12 pl-10"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <Input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="h-12 pl-10"
            />
          </div>

          {/* COUNTRY */}
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={16} />
            <CountrySelect
              onChange={(val: any) =>
                setForm({ ...form, country: val?.value || "" })
              }
            />
          </div>

        </div>
      </div>

      {/* VISIT INFO */}
      <div className="grid md:grid-cols-2 gap-4">
        <Input
          name="first_visit"
          value={form.first_visit}
          onChange={handleChange}
          placeholder="Is this your first visit?"
          className="h-12"
        />
        <Input
          name="source"
          value={form.source}
          onChange={handleChange}
          placeholder="How did you hear about the exhibition?"
          className="h-12"
        />
      </div>

      {/* INTEREST */}
      <RadioGroup
        defaultValue="perfume"
        onValueChange={(value) => setForm({ ...form, interest: value })}
        className="grid md:grid-cols-3 gap-4"
      >
        <Label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">
          <RadioGroupItem value="perfume" />
          Perfume
        </Label>

        <Label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">
          <RadioGroupItem value="trade" />
          Trade
        </Label>

        <Label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">
          <RadioGroupItem value="investment" />
          Investment
        </Label>
      </RadioGroup>

      {/* AGREEMENT */}
      <label className="flex items-center gap-2 text-sm text-gray-600">
        <input
          type="checkbox"
          name="accepted_terms"
          checked={form.accepted_terms}
          onChange={handleChange}
          className="accent-[#C9A227]"
        />
        I agree to the terms and conditions
      </label>

      {/* BUTTON */}
      <Button
        disabled={loading}
        className="
          h-12 bg-[#C9A227] hover:bg-[#b8921f]
          text-white rounded-xl
          flex items-center justify-center gap-2
          disabled:opacity-70 disabled:cursor-not-allowed
        "
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          "Register as Visitor"
        )}
      </Button>

    </form>
  );
}