// src/components/inputs/LocationSelector.tsx

"use client";

import { useMemo } from "react";
import CustomSearchSelectInput, {
  Option,
} from "@/components/inputs/CustomSearchSelectInput";
import { Country, State, City } from "country-state-city";

type LocationSelectorProps = {
  value: { country: string; state: string; city: string }; // e.g., { country: 'BD', state: '13', city: 'Dhaka' }
  onChange: (newValue: {
    country: string;
    state: string;
    city: string;
  }) => void;
  errors: {
    country?: { message?: string };
    state?: { message?: string };
    city?: { message?: string };
  };
  cityFullWidth?: boolean;
};

const LocationSelector = ({
  value,
  onChange,
  errors,
  cityFullWidth,
}: LocationSelectorProps) => {
  const countryOptions: Option[] = useMemo(() => {
    return Country.getAllCountries().map((country) => ({
      label: country.name,
      value: country.isoCode,
    }));
  }, []);

  const stateOptions: Option[] = useMemo(() => {
    if (!value.country) return [];
    return State.getStatesOfCountry(value.country).map((state) => ({
      label: state.name,
      value: state.isoCode,
    }));
  }, [value.country]);

  const cityOptions: Option[] = useMemo(() => {
    if (!value.country || !value.state) return [];
    return City.getCitiesOfState(value.country, value.state).map((city) => ({
      label: city.name,
      value: city.name,
    }));
  }, [value.country, value.state]);

  const handleCountryChange = (countryCode: string) => {
    onChange({ country: countryCode, state: "", city: "" });
  };

  const handleStateChange = (stateCode: string) => {
    onChange({ ...value, state: stateCode, city: "" });
  };

  const handleCityChange = (cityName: string) => {
    onChange({ ...value, city: cityName });
  };

  return (
    <>
      {/* Country Selector */}
      <CustomSearchSelectInput
        label="Country"
        placeholder="Select your country"
        searchPlaceholder="Search country..."
        options={countryOptions}
        value={value.country}
        onChange={handleCountryChange}
        error={errors.country?.message}
      />

      {/* State Selector */}
      <CustomSearchSelectInput
        label="State / Region"
        placeholder={
          !value.country ? "Select a country first" : "Select your state"
        }
        searchPlaceholder="Search state..."
        options={stateOptions}
        value={value.state}
        onChange={handleStateChange}
        error={errors.state?.message}
        disabled={!value.country}
      />

      {/* City Selector */}
      {/* City */}
      <div className={`${cityFullWidth ? "sm:col-span-2" : ""} `}>
        <CustomSearchSelectInput
          label="City"
          placeholder={
            !value.state ? "Select a state first" : "Select your city"
          }
          searchPlaceholder="Search city..."
          options={cityOptions}
          value={value.city}
          onChange={handleCityChange}
          error={errors.city?.message}
          disabled={!value.state}
        />
      </div>
    </>
  );
};

export default LocationSelector;
