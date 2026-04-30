"use client";

import { useState } from "react";
import axios from "axios";
import { Loader2, Globe } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/Components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import CountrySelect from "./CountrySelect";

type Props = {
  onSuccess: (data: any) => void;
};

export default function CompanyForm({ onSuccess }: Props) {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState<any>({
    first_name: "",
    last_name: "",
    title: "",
    position: "",
    email: "",
    mobile: "",
    company_phone: "",
    fax: "",
    company_name: "",
    country: "",
    region: "",
    city: "",
    postal_code: "",
    address: "",
    website: "",
    facebook: "",
    linkedin: "",
    instagram: "",
    youtube: "",
    twitter: "",
    activity_type: "",
    stand: "no",
    stand_type: "",
    stand_size: "",
    stand_location: "",
    notes: "",
    accepted: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    if (!form.first_name) return "First name required";
    if (!form.email) return "Email required";
    if (!form.company_name) return "Company required";
    if (!form.accepted) return "Accept terms";
    return null;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    setLoading(true);

    try {
      await axios.post("/api/company", form);

      toast.success("Registered successfully 🎉");

      onSuccess(form);

    } catch (err: any) {
      toast.error(err?.response?.data?.error || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-8">

      {error && (
        <div className="text-red-500 bg-red-50 p-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      {/* PERSONAL */}
      <div className="grid md:grid-cols-2 gap-4">
        <Input name="first_name" placeholder="First Name" className="h-12" onChange={handleChange} />
        <Input name="last_name" placeholder="Last Name" className="h-12" onChange={handleChange} />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input name="title" placeholder="Title (Mr / Mrs)" className="h-12" onChange={handleChange} />
        <Input name="position" placeholder="Position" className="h-12" onChange={handleChange} />
      </div>

      {/* CONTACT */}
      <div className="grid md:grid-cols-2 gap-4">
        <Input name="email" placeholder="Email" className="h-12" onChange={handleChange} />
        <Input name="mobile" placeholder="Mobile" className="h-12" onChange={handleChange} />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input name="company_phone" placeholder="Company Phone" className="h-12" onChange={handleChange} />
        <Input name="fax" placeholder="Fax" className="h-12" onChange={handleChange} />
      </div>

      {/* COMPANY */}
      <Input name="company_name" placeholder="Company Name" className="h-12" onChange={handleChange} />

      <div className="grid md:grid-cols-2 gap-4">

        {/* COUNTRY (SAME AS VISITOR) */}
        <div className="relative">
          <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={16} />
          <CountrySelect
            onChange={(val: any) =>
              setForm({ ...form, country: val?.value || "" })
            }
          />
        </div>

        <Input name="city" placeholder="City" className="h-12" onChange={handleChange} />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input name="region" placeholder="Region" className="h-12" onChange={handleChange} />
        <Input name="postal_code" placeholder="Postal Code" className="h-12" onChange={handleChange} />
      </div>

      <Input name="address" placeholder="Address" className="h-12" onChange={handleChange} />

      {/* SOCIAL */}
      <div className="grid md:grid-cols-3 gap-4">
        <Input name="website" placeholder="Website" className="h-12" onChange={handleChange} />
        <Input name="facebook" placeholder="Facebook" className="h-12" onChange={handleChange} />
        <Input name="linkedin" placeholder="LinkedIn" className="h-12" onChange={handleChange} />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Input name="instagram" placeholder="Instagram" className="h-12" onChange={handleChange} />
        <Input name="youtube" placeholder="YouTube" className="h-12" onChange={handleChange} />
        <Input name="twitter" placeholder="X (Twitter)" className="h-12" onChange={handleChange} />
      </div>

      {/* ACTIVITY TYPE */}
      <Label>Activity Type</Label>
      <RadioGroup
        onValueChange={(val) => setForm({ ...form, activity_type: val })}
        className="grid md:grid-cols-3 gap-4"
      >
        {["Perfume", "Factory", "Packaging", "Oils", "Private Label", "Other"].map((item) => (
          <Label key={item} className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">
            <RadioGroupItem value={item} />
            {item}
          </Label>
        ))}
      </RadioGroup>

      {/* STAND YES/NO */}
      <Label>Do you want a stand?</Label>
      <RadioGroup
        defaultValue="no"
        onValueChange={(val) => setForm({ ...form, stand: val })}
        className="flex gap-4"
      >
        <Label className="flex items-center gap-2 border rounded-xl p-3 cursor-pointer">
          <RadioGroupItem value="yes" /> Yes
        </Label>
        <Label className="flex items-center gap-2 border rounded-xl p-3 cursor-pointer">
          <RadioGroupItem value="no" /> No
        </Label>
      </RadioGroup>

      {form.stand === "yes" && (
        <>
          {/* STAND TYPE */}
          <Label>Stand Type</Label>
          <RadioGroup
            onValueChange={(val) => setForm({ ...form, stand_type: val })}
            className="grid md:grid-cols-3 gap-4"
          >
            {["Economy", "Standard", "Premium"].map((item) => (
              <Label key={item} className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">
                <RadioGroupItem value={item} />
                {item}
              </Label>
            ))}
          </RadioGroup>

          {/* SIZE */}
          <Label>Stand Size</Label>
          <RadioGroup
            onValueChange={(val) => setForm({ ...form, stand_size: val })}
            className="grid md:grid-cols-2 gap-4"
          >
            {["4x4", "2x4", "Corner", "Custom"].map((item) => (
              <Label key={item} className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">
                <RadioGroupItem value={item} />
                {item}
              </Label>
            ))}
          </RadioGroup>

          {/* LOCATION */}
          <Label>Stand Location</Label>
          <RadioGroup
            onValueChange={(val) => setForm({ ...form, stand_location: val })}
            className="grid md:grid-cols-3 gap-4"
          >
            {["Inside", "Side", "Front"].map((item) => (
              <Label key={item} className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">
                <RadioGroupItem value={item} />
                {item}
              </Label>
            ))}
          </RadioGroup>
        </>
      )}

      {/* NOTES */}
      <Textarea name="notes" placeholder="Notes..." onChange={handleChange} />

      {/* TERMS */}
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="accepted" onChange={handleChange} />
        I agree to terms
      </label>

      {/* BUTTON */}
      <Button
        disabled={loading}
        className="h-12 bg-[#C9A227] hover:bg-[#b8921f] text-white rounded-xl"
      >
        {loading ? <Loader2 className="animate-spin" /> : "Register Company"}
      </Button>

    </form>
  );
}