import React from 'react';
import { CountryData } from '../types';

type DateRangeTableProps = {
  data: CountryData[];
};

const DateRangeTable: React.FC<DateRangeTableProps> = ({ data }) => {
  return (
    <div className="flex flex-col mb-8">
      {/* Header */}
      <div className="flex justify-between border-b-2 py-2 font-bold">
        <div className="w-1/5">Country</div>
        <div className="w-1/5">Date</div>
        <div className="w-1/5">Total Vaccinations</div>
        <div className="w-1/5">People Vaccinated</div>
        <div className="w-1/5">Daily Vaccinations</div>
      </div>
      {/* Rows */}
      {data.map((countryData, index) =>
        countryData.data.map((dateData, dateIndex) => (
          <div
            key={`${index}-${dateIndex}`}
            className="flex justify-between border-b-2 py-2"
          >
            <div className="w-1/5">{countryData.country}</div>
            <div className="w-1/5">{dateData.date}</div>
            <div className="w-1/5">{dateData.total_vaccinations || 'N/A'}</div>
            <div className="w-1/5">{dateData.people_vaccinated || 'N/A'}</div>
            <div className="w-1/5">{dateData.daily_vaccinations || 'N/A'}</div>
          </div>
        )),
      )}
    </div>
  );
};

export default DateRangeTable;