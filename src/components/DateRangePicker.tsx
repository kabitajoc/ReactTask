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
    <div className="flex-col space-x-4">
      <h5 className=" mb-4 font-bold">Date Range</h5>
      <div className=" flex mb-4 ">
        <label className="block text-gray-600 font-medium mr-2 ">From: </label>
        <input
          type="date"
          className="border border-gray-400 rounded-md p-2 h-8 "
          value={fromDate}
          onChange={handleFromDateChange}
          placeholder="From"
        />

        <label className="block text-gray-600 mr-2 font-medium ml-4">
          To:{" "}
        </label>
        <input
          type="date"
          className="border border-gray-400 rounded-md p-2 h-8"
          value={toDate}
          onChange={handleToDateChange}
          placeholder="To"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
