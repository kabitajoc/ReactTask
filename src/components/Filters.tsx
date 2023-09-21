// components/Filters.tsx
import React, { useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { CountryData } from "../types";
type FiltersProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSortKey: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  setConfirmedSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSortOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
};

const Filters: React.FC<FiltersProps> = ({
  searchTerm,
  setSearchTerm,
  setConfirmedSearchTerm,
  setSelectedCountry,
  setSortKey,
  setSortOrder,
  setStartDate,
  setEndDate,
}) => {
  const { data, isLoading, isError } = useFetchData();
  const [dropdownCountries, setDropdownCountries] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (searchTerm.length >= 2 && data?.aggregated) {
      const countryList = data.aggregated.map(
        (entry: CountryData) => entry.country
      );
      const filteredList = countryList.filter((country: string) =>
        country.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      setDropdownCountries(filteredList);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [searchTerm, data]);

  const handleCountryClick = (country: string) => {
    setSearchTerm(country);
    setConfirmedSearchTerm(country);
    setSelectedCountry(country);
    setSortKey("country");
    setSortOrder("asc");
    setShowDropdown(false);
  };

  if (isLoading) return <p>Loading filters...</p>;
  if (isError) return <p>Error loading filters</p>;
  return (
    <div className="mb-8 flex justify-between items-center">
      <div style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="Search by country..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            if ("" === e.target.value) {
              setSearchTerm("");
              setConfirmedSearchTerm("");
              setSelectedCountry("");
            }
          }}
          className="border p-2 rounded"
        />

        {showDropdown && (
          <ul
            style={{
              position: "absolute",
              zIndex: 1,
              width: "100%",
              border: "1px solid black",
              maxHeight: "100px",
              overflowY: "auto",
            }}
          >
            {dropdownCountries.length ? (
              dropdownCountries.map((country, index) => (
                <li key={index} onClick={() => handleCountryClick(country)}>
                  {country}
                </li>
              ))
            ) : (
              <li>Country not found</li>
            )}
          </ul>
        )}
      </div>

      {/* Start Date Selector */}
      <input
        type="date"
        onChange={(e) => setStartDate(e.target.value)}
        className="border p-2 rounded"
      />

      {/* End Date Selector */}
      <input
        type="date"
        onChange={(e) => setEndDate(e.target.value)}
        className="border p-2 rounded"
      />

      {/* Sort Key Selector */}
      <select
        onChange={(e) => setSortKey(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="country">Sort by Country</option>
        <option value="iso_code">Sort by ISO Code</option>
      </select>

      {/* Sort Order Selector */}
      <select
        onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
        className="border p-2 rounded"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default Filters;
