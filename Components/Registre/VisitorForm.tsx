'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import { Loader2, Mail, Phone, Globe, User2 } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { Label } from "@/Components/ui/label";
import CountrySelect from "./CountrySelect";

import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";

export default function VisitorForm({ onSuccess }: any) {

  const { t } = useTranslation();
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    const updateLang = () => {
      const isAr = i18n.language === "ar";
      setIsArabic(isAr);
      document.documentElement.dir = isAr ? "rtl" : "ltr";
    };

    updateLang();
    i18n.on("languageChanged", updateLang);
    return () => i18n.off("languageChanged", updateLang);
  }, []);

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

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    if (!form.full_name) return t("visitorForm.errors.name");
    if (!form.email) return t("visitorForm.errors.email");
    if (!form.country) return t("visitorForm.errors.country");
    if (!form.accepted_terms) return t("visitorForm.errors.terms");
    return null;
  };

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
      toast.success(t("visitorForm.success"));
      onSuccess(form);
    } catch (err: any) {
      toast.error(err?.response?.data?.error || t("visitorForm.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-8">

      {/* ERROR */}
      {error && (
        <div className="text-red-500 text-sm bg-red-50 border border-red-200 p-3 rounded-xl">
          {error}
        </div>
      )}

      {/* PERSONAL */}
      <div className="grid gap-4">
        <div className="grid md:grid-cols-2 gap-4">

          <div className="relative">
            <User2 className={`absolute ${isArabic ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 text-gray-400`} size={16} />
            <Input
              name="full_name"
              value={form.full_name}
              onChange={handleChange}
              placeholder={t("visitorForm.fullName")}
              className={`h-12 ${isArabic ? "pr-10 text-right" : "pl-10"}`}
            />
          </div>

          <div className="relative">
            <Mail className={`absolute ${isArabic ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 text-gray-400`} size={16} />
            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("visitorForm.email")}
              className={`h-12 ${isArabic ? "pr-10 text-right" : "pl-10"}`}
            />
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="relative">
            <Phone className={`absolute ${isArabic ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 text-gray-400`} size={16} />
            <Input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder={t("visitorForm.phone")}
              className={`h-12 ${isArabic ? "pr-10 text-right" : "pl-10"}`}
            />
          </div>

          <div className="relative">
            <Globe className={`absolute ${isArabic ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 text-gray-400 z-10`} size={16} />
            <CountrySelect
              onChange={(val: any) =>
                setForm({ ...form, country: val?.value || "" })
              }
            />
          </div>

        </div>
      </div>

      {/* VISIT */}
      <div className="grid md:grid-cols-2 gap-4">
        <Input
          name="first_visit"
          value={form.first_visit}
          onChange={handleChange}
          placeholder={t("visitorForm.firstVisit")}
          className={`h-12 ${isArabic ? "text-right" : ""}`}
        />
        <Input
          name="source"
          value={form.source}
          onChange={handleChange}
          placeholder={t("visitorForm.source")}
          className={`h-12 ${isArabic ? "text-right" : ""}`}
        />
      </div>

     {/* INTEREST */}
<RadioGroup
  defaultValue="perfume"
  onValueChange={(value) => setForm({ ...form, interest: value })}
  className="grid md:grid-cols-3 gap-4"
>
  <Label
    className={`
      flex items-center gap-3 border rounded-xl p-4 cursor-pointer
      ${isArabic ? "flex-row-reverse text-right" : ""}
    `}
  >
    <RadioGroupItem value="perfume" />
    {t("visitorForm.interests.perfume")}
  </Label>

  <Label
    className={`
      flex items-center gap-3 border rounded-xl p-4 cursor-pointer
      ${isArabic ? "flex-row-reverse text-right" : ""}
    `}
  >
    <RadioGroupItem value="trade" />
    {t("visitorForm.interests.trade")}
  </Label>

  <Label
    className={`
      flex items-center gap-3 border rounded-xl p-4 cursor-pointer
      ${isArabic ? "flex-row-reverse text-right" : ""}
    `}
  >
    <RadioGroupItem value="investment" />
    {t("visitorForm.interests.investment")}
  </Label>
</RadioGroup>

      {/* TERMS */}
      <label className={`flex items-center gap-2 text-sm text-gray-600 ${isArabic ? "flex-row-reverse" : ""}`}>
        <input
          type="checkbox"
          name="accepted_terms"
          checked={form.accepted_terms}
          onChange={handleChange}
          className="accent-[#C9A227]"
        />
        {t("visitorForm.terms")}
      </label>

      {/* BUTTON */}
      <Button
        disabled={loading}
        className="h-12 bg-[#C9A227] hover:bg-[#b8921f] text-white rounded-xl flex items-center justify-center gap-2"
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          t("visitorForm.submit")
        )}
      </Button>

    </form>
  );
}