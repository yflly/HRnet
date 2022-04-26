import DataTable from "react-data-table-component";
import moment from "moment";

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

export default function CurrentEmployee({ data }) {
  data = data.map((employee) => ({
    ...employee,
    birthdate: moment(employee.birthdate).format("MM/DD/yyyy"),
    startDate: moment(employee.startDate).format("MM/DD/yyyy"),
  }));
  return (
    <>
      <header className="header">
        <div className="header-title">Current Employees</div>
        <div className="header-separator" />
      </header>
      <DataTable
        columns={columns}
        data={data}
        highlightOnHover
        pagination
        striped
        paginationPerPage={10}
      />
      <br />
    </>
  );
}
