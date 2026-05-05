"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Loader2, Globe } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/Components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import CountrySelect from "./CountrySelect";

import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";

type Props = {
  onSuccess: (data: any) => void;
};

export default function CompanyForm({ onSuccess }: Props) {
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
    if (!form.first_name) return t("companyForm.errors.firstName");
    if (!form.email) return t("companyForm.errors.email");
    if (!form.company_name) return t("companyForm.errors.company");
    if (!form.accepted) return t("companyForm.errors.terms");
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
      toast.success(t("companyForm.success"));
      onSuccess(form);
    } catch (err: any) {
      toast.error(err?.response?.data?.error || t("companyForm.error"));
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
        <Input name="first_name" placeholder={t("companyForm.firstName")} className={`h-12 ${isArabic ? "text-right" : ""}`} onChange={handleChange}/>
        <Input name="last_name" placeholder={t("companyForm.lastName")} className={`h-12 ${isArabic ? "text-right" : ""}`} onChange={handleChange}/>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input name="title" placeholder={t("companyForm.title")} className={`h-12 ${isArabic ? "text-right" : ""}`} onChange={handleChange}/>
        <Input name="position" placeholder={t("companyForm.position")} className={`h-12 ${isArabic ? "text-right" : ""}`} onChange={handleChange}/>
      </div>

      {/* CONTACT */}
      <div className="grid md:grid-cols-2 gap-4">
        <Input name="email" placeholder={t("companyForm.email")} className={`h-12 ${isArabic ? "text-right" : ""}`} onChange={handleChange}/>
        <Input name="mobile" placeholder={t("companyForm.mobile")} className={`h-12 ${isArabic ? "text-right" : ""}`} onChange={handleChange}/>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input name="company_phone" placeholder={t("companyForm.companyPhone")} className={`h-12 ${isArabic ? "text-right" : ""}`} onChange={handleChange}/>
        <Input name="fax" placeholder={t("companyForm.fax")} className={`h-12 ${isArabic ? "text-right" : ""}`} onChange={handleChange}/>
      </div>

      {/* COMPANY */}
      <Input name="company_name" placeholder={t("companyForm.company")} className={`h-12 ${isArabic ? "text-right" : ""}`} onChange={handleChange}/>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <Globe className={`absolute ${isArabic ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 text-gray-400`} size={16}/>
          <CountrySelect onChange={(val: any) => setForm({ ...form, country: val?.value || "" })}/>
        </div>
        <Input name="city" placeholder={t("companyForm.city")} className={`h-12 ${isArabic ? "text-right" : ""}`} onChange={handleChange}/>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input name="region" placeholder={t("companyForm.region")} className={`h-12 ${isArabic ? "text-right" : ""}`} onChange={handleChange}/>
        <Input name="postal_code" placeholder={t("companyForm.postal")} className={`h-12 ${isArabic ? "text-right" : ""}`} onChange={handleChange}/>
      </div>

      <Input name="address" placeholder={t("companyForm.address")} className={`h-12 ${isArabic ? "text-right" : ""}`} onChange={handleChange}/>

      {/* ACTIVITY */}
      <Label className={isArabic ? "text-right block" : ""}>
        {t("companyForm.activityTitle")}
      </Label>

      <RadioGroup
        onValueChange={(val) => setForm({ ...form, activity_type: val })}
        className="grid md:grid-cols-3 gap-4"
      >
        {[
          { value: "Perfume", label: t("companyForm.activity.perfume") },
          { value: "Factory", label: t("companyForm.activity.factory") },
          { value: "Packaging", label: t("companyForm.activity.packaging") },
          { value: "Oils", label: t("companyForm.activity.oils") },
          { value: "Private Label", label: t("companyForm.activity.privateLabel") },
          { value: "Other", label: t("companyForm.activity.other") },
        ].map((item) => (
          <Label key={item.value} className={`flex items-center gap-3 border rounded-xl p-4 ${isArabic ? "flex-row-reverse text-right" : ""}`}>
            <RadioGroupItem value={item.value}/>
            {item.label}
          </Label>
        ))}
      </RadioGroup>
{/* STAND */}
<Label
  className={`
    block
    ${isArabic ? "text-right font-semibold" : ""}
  `}
>
  {t("companyForm.standQuestion")}
</Label>

<RadioGroup
  defaultValue="no"
  onValueChange={(val) => setForm({ ...form, stand: val })}
  className={`flex gap-4 ${isArabic ? "flex-row-reverse justify-start" : ""}`}
>
  <Label
    className={`flex items-center gap-2 border rounded-xl p-3 cursor-pointer ${
      isArabic ? "flex-row-reverse" : ""
    }`}
  >
    <RadioGroupItem value="yes" />
    {t("companyForm.yes")}
  </Label>

  <Label
    className={`flex items-center gap-2 border rounded-xl p-3 cursor-pointer ${
      isArabic ? "flex-row-reverse" : ""
    }`}
  >
    <RadioGroupItem value="no" />
    {t("companyForm.no")}
  </Label>
</RadioGroup>

      {form.stand==="yes" && (
        <>
          {/* TYPE */}
          <Label className={isArabic ? "text-right block" : ""}>
            {t("companyForm.standType")}
          </Label>

          <RadioGroup onValueChange={(val)=>setForm({...form,stand_type:val})} className="grid md:grid-cols-3 gap-4">
            {[
              {value:"Economy",label:t("companyForm.standTypes.economy")},
              {value:"Standard",label:t("companyForm.standTypes.standard")},
              {value:"Premium",label:t("companyForm.standTypes.premium")},
            ].map((item)=>(
              <Label key={item.value} className={`flex items-center gap-3 border rounded-xl p-4 ${isArabic?"flex-row-reverse text-right":""}`}>
                <RadioGroupItem value={item.value}/>
                {item.label}
              </Label>
            ))}
          </RadioGroup>

          {/* SIZE */}
          <Label className={isArabic ? "text-right block" : ""}>
            {t("companyForm.standSize")}
          </Label>

          <RadioGroup onValueChange={(val)=>setForm({...form,stand_size:val})} className="grid md:grid-cols-2 gap-4">
            {[
              {value:"4x4",label:t("companyForm.standSizes.4x4")},
              {value:"2x4",label:t("companyForm.standSizes.2x4")},
              {value:"Corner",label:t("companyForm.standSizes.corner")},
              {value:"Custom",label:t("companyForm.standSizes.custom")},
            ].map((item)=>(
              <Label key={item.value} className={`flex items-center gap-3 border rounded-xl p-4 ${isArabic?"flex-row-reverse text-right":""}`}>
                <RadioGroupItem value={item.value}/>
                {item.label}
              </Label>
            ))}
          </RadioGroup>

          {/* LOCATION */}
          <Label className={isArabic ? "text-right block" : ""}>
            {t("companyForm.standLocation")}
          </Label>

          <RadioGroup onValueChange={(val)=>setForm({...form,stand_location:val})} className="grid md:grid-cols-3 gap-4">
            {[
              {value:"Inside",label:t("companyForm.standLocations.inside")},
              {value:"Side",label:t("companyForm.standLocations.side")},
              {value:"Front",label:t("companyForm.standLocations.front")},
            ].map((item)=>(
              <Label key={item.value} className={`flex items-center gap-3 border rounded-xl p-4 ${isArabic?"flex-row-reverse text-right":""}`}>
                <RadioGroupItem value={item.value}/>
                {item.label}
              </Label>
            ))}
          </RadioGroup>
        </>
      )}

      {/* NOTES */}
      <Textarea name="notes" placeholder={t("companyForm.notes")} className={isArabic?"text-right":""} onChange={handleChange}/>

      {/* TERMS */}
      <label className={`flex items-center gap-2 text-sm ${isArabic ? "flex-row-reverse" : ""}`}>
        <input type="checkbox" name="accepted" onChange={handleChange}/>
        {t("companyForm.terms")}
      </label>

      {/* BUTTON */}
      <Button className="h-12 bg-[#C9A227] text-white rounded-xl">
        {loading ? <Loader2 className="animate-spin"/> : t("companyForm.submit")}
      </Button>

    </form>
  );
}