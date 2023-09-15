import React from "react";

const Table = () => {
  return (
    <div className="flex flex-col">
      {/* Table Header */}
      <div className="grid grid-cols-5 bg-gray-200 font-bold p-2">
        <div className="p-2">Column 1</div>
        <div className="p-2">Column 2</div>
        <div className="p-2">Column 3</div>
        <div className="p-2">Column 4</div>
        <div className="p-2">Column 5</div>
      </div>

      {/* Table Rows */}
      <div className="flex">
        <div className="p-2 border border-gray-300">Row 1, Cell 1</div>
        <div className="p-2 border border-gray-300">Row 1, Cell 2</div>
        <div className="p-2 border border-gray-300">Row 1, Cell 3</div>
        <div className="p-2 border border-gray-300">Row 1, Cell 4</div>
        <div className="p-2 border border-gray-300">Row 1, Cell 5</div>
      </div>

      <div className="flex">
        <div className="p-2 border border-gray-300">Row 2, Cell 1</div>
        <div className="p-2 border border-gray-300">Row 2, Cell 2</div>
        <div className="p-2 border border-gray-300">Row 2, Cell 3</div>
        <div className="p-2 border border-gray-300">Row 2, Cell 4</div>
        <div className="p-2 border border-gray-300">Row 2, Cell 5</div>
      </div>

      {/* Add more rows as needed */}
    </div>
  );
};

export default Table;
