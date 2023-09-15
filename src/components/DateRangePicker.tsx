import React, { useState } from "react";

const DateRangePicker: React.FC = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDate(e.target.value);
  };

  return (
    <div className="flex space-x-4">
      <p>Date Range</p>
      <div className=" flex">
        <label className="block text-gray-600">From:</label>
        <input
          type="date"
          className="border border-gray-400 rounded-md p-2"
          value={fromDate}
          onChange={handleFromDateChange}
          placeholder="From"
        />
      </div>
      <div>
        <label className="block text-gray-600">To:</label>
        <input
          type="date"
          className="border border-gray-400 rounded-md p-2"
          value={toDate}
          onChange={handleToDateChange}
          placeholder="To"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
