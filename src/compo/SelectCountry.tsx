import React, { useEffect, useState } from "react";
import Select from "react-select";

const SelectCountry = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/DikenMaharjan/95754f5efce430c608c7996602b63041/raw/7b1519fa02751628fab5a32275a4729ec7d11c4e/vaccinations.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        console.log(setCountries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);
  return (
    <Select
      options={countries}
      value={selectedCountry}
      onChange={(selectedOption) => setSelectedCountry(selectedOption)}
    />
  );
};

export default SelectCountry;
