// src/components/inputs/CustomTelInput.tsx

"use client";

import { useMemo } from "react";
import CustomInput from "./CustomInput";
import { Country } from "country-state-city";
import CustomSearchSelectInput from "./CustomSearchSelectInput";

const allCountries = Country.getAllCountries();

const countryCodeOptions = (() => {
  const seen = new Set<string>();

  return allCountries
    .filter((country) => {
      const code = `+${country.phonecode}`;
      if (seen.has(code)) return false;
      seen.add(code);
      return true;
    })
    .map((country) => ({
      id: country.isoCode,
      label: `${country.name} (+${country.phonecode})`,
      value: `+${country.phonecode}`,
    }));
})();

const sortedCountryPhoneCodes = countryCodeOptions
  .map((option) => option.value)
  .sort((a, b) => b.length - a.length);

type CustomTelInputProps = {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  error?: string;
};

const CustomTelInput = ({
  label,
  value = "",
  onChange,
  onBlur,
  error,
}: CustomTelInputProps) => {
  const derivedCountryCode = useMemo(() => {
    return sortedCountryPhoneCodes.find((code) => value.startsWith(code)) || "";
  }, [value]);

  const derivedNumber = derivedCountryCode
    ? value.substring(derivedCountryCode.length)
    : "";

  const handleCountryCodeChange = (newCode: string) => {
    onChange?.(newCode + derivedNumber);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = e.target.value;
    if (/^\d*$/.test(newNumber)) {
      onChange?.(derivedCountryCode + newNumber);
    }
  };

  const isNumberInputDisabled = !derivedCountryCode;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <div className="flex items-start gap-2">
        <CustomSearchSelectInput
          className="w-[30%] shrink-0"
          placeholder="Country Code"
          searchPlaceholder="Search country..."
          notFoundText="No country found."
          options={countryCodeOptions}
          value={derivedCountryCode}
          onChange={handleCountryCodeChange}
        />

        <div className="w-full">
          <CustomInput
            type="tel"
            placeholder="Phone number"
            value={derivedNumber}
            onChange={handleNumberChange}
            onBlur={onBlur}
            disabled={isNumberInputDisabled}
            className={
              isNumberInputDisabled ? "bg-gray-100 cursor-not-allowed" : ""
            }
          />
        </div>
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default CustomTelInput;
