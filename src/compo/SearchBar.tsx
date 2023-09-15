import React from "react";

const SearchBar = () => {
  return (
    <div className=" mb-4 ">
      <input style={{ width: "18px" }} type="text" placeholder="🔍" disabled />
      <input className="w-full p-2" type="text" placeholder="search here" />
    </div>
  );
};

export default SearchBar;
