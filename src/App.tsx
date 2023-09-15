import DateRangePicker from "./components/DateRangePicker";
import SearchBar from "./components/SearchBar";
import SelectCountry from "./components/SelectCountry";
import SortbyVaccination from "./components/SortbyVaccination";
import Table from "./components/Table";

function App() {
  return (
    <>
      <div className="display-flex">
        <SearchBar />
        <SelectCountry />
        <DateRangePicker />
        <SortbyVaccination />
        <Table />
      </div>
    </>
  );
}

export default App;
