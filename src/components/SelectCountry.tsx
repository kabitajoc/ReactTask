import React, { useState } from "react";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "Australia",
];

const SelectCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="flex-col">
      <label htmlFor="countrySelect" className="font-bold">
        Select country
      </label>
      <select
        id="countrySelect"
        value={selectedCountry}
        onChange={handleCountryChange}
        className="border border-gray-400 rounded-md m-2 p-1"
      >
        <option value="">Select a country</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
      {/* <p>You selected: {selectedCountry}</p> */}
    </div>
  );
};

export default SelectCountry;
