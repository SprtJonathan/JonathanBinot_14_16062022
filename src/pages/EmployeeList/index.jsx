import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";

import "../NewEmployeePage/index.css";

const columns = [
  {
    name: "First Name",
    selector: (row) => row.firstName,
  },
  {
    name: "Last Name",
    selector: (row) => row.lastName,
  },
  {
    name: "Start Date",
    selector: (row) => row.startDate,
  },
  {
    name: "Department",
    selector: (row) => row.department,
  },
  {
    name: "Date of Birth",
    selector: (row) => row.dateOfBirth,
  },
  {
    name: "Street",
    selector: (row) => row.street,
  },
  {
    name: "City",
    selector: (row) => row.city,
  },
  {
    name: "State",
    selector: (row) => row.state,
  },
  {
    name: "Zip Code",
    selector: (row) => row.zipCode,
  },
];

function EmployeesList() {
  const [employees, setEmployees] = useState([]);

  console.log(JSON.parse(localStorage.getItem("employees")));
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("employees")) !== null) {
      setEmployees(JSON.parse(localStorage.getItem("employees")));
    }
  }, [setEmployees]);

  const resetStore = () => {
    localStorage.removeItem("employees");
  };

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <DataTable
        id="employee-table"
        className="display"
        columns={columns}
        data={employees}
      />
      <div className="button-container">
        <Link to="/" className="submit-button">
          Home
        </Link>
      </div>

      {/*   Button used for testing purposes */}
      <div className="button-container">
        <button onClick={resetStore} className="submit-button">
          Clear Local Storage
        </button>
      </div>
    </div>
  );
}

export default EmployeesList;
