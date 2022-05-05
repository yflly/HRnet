import DataTables from "../../components/DataTable/DataTable";
import data from "../../Data/DataMock.json";
import "./CurrentEmployee.css";
import { useState } from "react";

export default function CurrentEmployee() {
  const [foundEmployees, setFoundEmployees] = useState("");
  let localData = JSON.parse(localStorage.getItem("employees"));
  let dataArr = [];
  localData ? (dataArr = [...data, ...localData]) : (dataArr = [...data]);

  //HandleSearch lastname, firstname or department start with 3 letters
  //And display the results
  const handleSearch = (event) => {
    const query = event.target.value;

    if (query.length >= 3) {
      const results = dataArr.filter((employee) => {
        return (
          employee.lastName.toLowerCase().startsWith(query.toLowerCase()) ||
          employee.firstName.toLowerCase().startsWith(query.toLowerCase()) ||
          employee.department.toLowerCase().startsWith(query.toLowerCase())
        );
      });

      setFoundEmployees(results);
    } else {
      setFoundEmployees(dataArr);
    }
  };

  return (
    <main className="container">
      <header className="container__header">
        <h1 className="container__title">Current Employees</h1>
        <input
          type="search"
          placeholder="Search..."
          className="container__input"
          onChange={handleSearch}
        />
      </header>
      <p>{data.id}</p>
      <DataTables data={foundEmployees || dataArr} />
    </main>
  );
}
