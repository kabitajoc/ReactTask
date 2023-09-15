import DateRangePicker from "./components/DateRangePicker";
import SearchBar from "./components/SearchBar";
import SelectCountry from "./components/SelectCountry";
import SortbyVaccination from "./components/SortbyVaccination";
import Table from "./components/Table";

function App() {
  return (
    <>
      <div className="flex-col m-auto">
        <div className="flex justify-between">
          <SearchBar />
          <SelectCountry />
        </div>
        <div className="flex justify-between">
          <DateRangePicker />
          <SortbyVaccination />
        </div>
        <Table />
      </div>
    </>
  );
}

export default App;
