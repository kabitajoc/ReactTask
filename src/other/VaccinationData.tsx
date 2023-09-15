import React, { useEffect, useState } from "react";

interface VaccinationData {
  country: string;
  data: {
    date: string;
    total_vaccinations: number;
  }[];
}

const VaccinationData: React.FC = () => {
  const [data, setData] = useState<VaccinationData[]>([]);
  const [fromDate, setFromDate] = useState<string | null>(null);
  const [toDate, setToDate] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the JSON data from the URL
    fetch(
      "https://gist.githubusercontent.com/DikenMaharjan/95754f5efce430c608c7996602b63041/raw/7b1519fa02751628fab5a32275a4729ec7d11c4e/vaccinations.json"
    )
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleFromDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDate(event.target.value);
  };

  // Filter the data based on the date range
  const filteredData = data.filter((item) =>
    item.data.some((dateItem) => {
      if (!fromDate && !toDate) {
        return true; // No date range specified, show all data
      }
      if (fromDate && toDate) {
        return dateItem.date >= fromDate && dateItem.date <= toDate;
      }
      if (fromDate) {
        return dateItem.date >= fromDate;
      }
      if (toDate) {
        return dateItem.date <= toDate;
      }
      return false;
    })
  );

  return (
    <div>
      <h1>Vaccination Data</h1>
      <div>
        <label>From Date: </label>
        <input
          type="date"
          value={fromDate || ""}
          onChange={handleFromDateChange}
        />
        <label>To Date: </label>
        <input type="date" value={toDate || ""} onChange={handleToDateChange} />
      </div>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            <strong>Country:</strong> {item.country}
            <ul>
              {item.data.map((dateItem, dateIndex) => (
                <li key={dateIndex}>
                  {dateItem.date >= fromDate && dateItem.date <= toDate ? (
                    <>
                      <strong>Date:</strong> {dateItem.date},{" "}
                      <strong>Total Vaccinations:</strong>{" "}
                      {dateItem.total_vaccinations}
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VaccinationData;
