import DataTable from "react-data-table-component";

import { format } from "date-fns";
import moment from "moment";

import { useEffect, useState } from "react";
//import { dataTableLabels } from "../../Data/data";

const columns = [
  {
    name: "First Name",
    selector: (row) => row.firstName,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.lastName,
    sortable: true,
  },
  {
    name: "Start Date",
    selector: (row) => row.startDate,
    sortable: true,
  },
  {
    name: "Department",
    selector: (row) => row.department,
    sortable: true,
  },
  {
    name: "Date of Birth",
    selector: (row) => row.birthdate,
    sortable: true,
  },
  {
    name: "Street",
    selector: (row) => row.street,
    sortable: true,
  },
  {
    name: "City",
    selector: (row) => row.city,
    sortable: true,
  },
  {
    name: "State",
    selector: (row) => row.state,
    sortable: true,
  },
  {
    name: "Zipcode",
    selector: (row) => row.zipCode,
    sortable: true,
  },
];

export default function CurrentEmployee() {
  const [employeesList, setEmployeesList] = useState([]);
  /*const [key, setKey] = useState([]);*/

  useEffect(() => {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    employees = employees.map((employee) => ({
      ...employee,
      birthdate: moment(employee.birthdate).format("MM/DD/yyyy"),
      startDate: moment(employee.startDate).format("MM/DD/yyyy"),
    }));

    setEmployeesList(employees);
    /*setKey(key + 1);*/
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-title">Current Employees</div>
        <div className="header-separator" />
      </header>
      <DataTable columns={columns} data={employeesList} />

      <br />
    </>
  );
}
