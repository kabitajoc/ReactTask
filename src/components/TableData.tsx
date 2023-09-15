import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function TableData() {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get(
        "https://gist.githubusercontent.com/DikenMaharjan/95754f5efce430c608c7996602b63041/raw/7b1519fa02751628fab5a32275a4729ec7d11c4e/vaccinations.json"
      );
      const data = await response.data;
      return data;
    },
  });

  if (postQuery.isLoading) return <h1>Loading....</h1>;
  if (postQuery.isError) return <h1>Error loading data!!!</h1>;

  return (
    <div className="flex flex-col">
      <div className="flex bg-gray-200 font-bold p-2">
        <div className="flex-1 p-2 border border-gray-300">Country</div>
        <div className="flex-1 p-2 border border-gray-300">
          Date of Vaccination
        </div>
        <div className="flex-1 p-2 border border-gray-300">
          Vaccines Administered
        </div>
        <div className="flex-1 p-2 border border-gray-300">
          People Vaccinated
        </div>
      </div>
      {postQuery.data.map((item, index) => (
        <div key={index} className="flex">
          <div className="flex-1 p-2 border border-gray-300">
            {item.country}
          </div>
          <div className="flex-1 p-2 border border-gray-300">
            {/* {item[index].data[index].date} */}
          </div>
          <div className="flex-1 p-2 border border-gray-300">
            {item.vaccinesAdministered}
          </div>
          <div className="flex-1 p-2 border border-gray-300">
            {item.peopleVaccinated}
          </div>
        </div>
      ))}
      <div className="flex justify-end">
        <span>Per Page </span>
        <select>
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </select>
      </div>
    </div>
  );
}

export default TableData;
