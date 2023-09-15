import DateRangePicker from "./components/DateRangePicker";
import SearchBar from "./components/SearchBar";
import SelectCountry from "./components/SelectCountry";
import SortbyVaccination from "./components/SortbyVaccination";
import Table from "./components/Table";
import TableData from "./components/TableData";
import TodoList from "./components/Todo";

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
        {/* <Table /> */}
        {/* <TodoList /> */}
        <TableData />
      </div>
    </>
  );
}

export default App;
