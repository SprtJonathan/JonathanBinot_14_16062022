import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component-with-filter";

import "../NewEmployeePage/index.css";

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
    selector: (row) => row.dateOfBirth,
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
    name: "Zip Code",
    selector: (row) => row.zipCode,
    sortable: true,
  },
];

function EmployeesList() {
  const [employees, setEmployees] = useState([]);
  const [employeesFiltered, setEmployeesFiltered] = useState([]);

  //  console.log(JSON.parse(localStorage.getItem("employees")));
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("employees")) !== null) {
      setEmployees(JSON.parse(localStorage.getItem("employees")));
      setEmployeesFiltered(JSON.parse(localStorage.getItem("employees")));
    }
  }, [setEmployees, setEmployeesFiltered]);

  const resetStore = () => {
    localStorage.removeItem("employees");
  };
  function handleSearchbarChange(event) {
    if (event.target.value === "") {
      return setEmployeesFiltered(employees);
    }
    console.log(event.target.value === employees[0].firstName);
    return setEmployeesFiltered(
      employees.filter(
        (employee) =>
          employee.firstName
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          employee.lastName
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          employee.department
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          employee.dateOfBirth
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          employee.street
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          employee.city
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          employee.state
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          employee.zipCode
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
      )
    );
  }

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <div>
        Rechercher :{" "}
        <input
          type="text"
          id="employee-searchbar"
          className=""
          onChange={handleSearchbarChange}
        ></input>
      </div>
      <DataTable
        id="employee-table"
        className="display"
        columns={columns}
        data={employeesFiltered}
        pagination
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
