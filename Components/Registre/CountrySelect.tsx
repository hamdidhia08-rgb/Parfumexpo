'use client';

import Select from "react-select";
import countryList from "react-select-country-list";
import { useMemo, useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";

type CountryOption = {
  value: string;
  label: string;
};

type Props = {
  onChange?: (value: CountryOption | null) => void;
};

export default function CountrySelect({ onChange }: Props) {

  const { t } = useTranslation();
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    const updateLang = () => {
      setIsArabic(i18n.language === "ar");
    };

    updateLang();
    i18n.on("languageChanged", updateLang);
    return () => i18n.off("languageChanged", updateLang);
  }, []);

  const options = useMemo(() => {
    return countryList().getData() as CountryOption[];
  }, []);

  return (
    <Select
      options={options}
      onChange={onChange}
      placeholder={t("visitorForm.country")}
      className="text-sm"

      isRtl={isArabic} // ✅ IMPORTANT

      formatOptionLabel={(option) => (
        <div className={`flex items-center gap-2 ${isArabic ? "flex-row-reverse text-right" : ""}`}>
          <img
            src={`https://flagcdn.com/w20/${option.value.toLowerCase()}.png`}
            alt={option.label}
            className="w-5 h-4 object-cover rounded-sm"
          />
          {option.label}
        </div>
      )}

      styles={{
        control: (base, state) => ({
          ...base,
          height: 48,
          minHeight: 48,
          borderRadius: "0.75rem",

          // ✅ padding RTL fix
          paddingLeft: isArabic ? "8px" : "32px",
          paddingRight: isArabic ? "32px" : "8px",

          borderColor: "#e5e7eb",
          boxShadow: state.isFocused ? "0 0 0 1px #C9A227" : "none",
          "&:hover": { borderColor: "#C9A227" },
        }),

        valueContainer: (base) => ({
          ...base,
          height: 48,
          direction: isArabic ? "rtl" : "ltr",
        }),

        indicatorsContainer: (base) => ({
          ...base,
          height: 48,
        }),

        menu: (base) => ({
          ...base,
          zIndex: 9999,
          direction: isArabic ? "rtl" : "ltr",
        }),
      }}
    />
  );
}