'use client';

import Select from "react-select";
import countryList from "react-select-country-list";
import { useMemo } from "react";

type CountryOption = {
  value: string;
  label: string;
};

type Props = {
  onChange?: (value: CountryOption | null) => void;
};

export default function CountrySelect({ onChange }: Props) {

  const options = useMemo(() => {
    return countryList().getData() as CountryOption[];
  }, []);

  return (
    <Select
      options={options}
      onChange={onChange}
      placeholder="Select Country"
      className="text-sm"

      formatOptionLabel={(option) => (
        <div className="flex items-center gap-2">
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
          paddingLeft: "32px",
          borderColor: "#e5e7eb",
          boxShadow: state.isFocused ? "0 0 0 1px #C9A227" : "none",
          "&:hover": { borderColor: "#C9A227" },
        }),
        valueContainer: (base) => ({
          ...base,
          height: 48,
        }),
        indicatorsContainer: (base) => ({
          ...base,
          height: 48,
        }),
        menu: (base) => ({
          ...base,
          zIndex: 9999,
        }),
      }}
    />
  );
}