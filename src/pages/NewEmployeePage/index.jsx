import { Link } from "react-router-dom";

import logo from "../../logo.svg";
import "./index.css";

import NewEmployeeForm from "../../components/NewEmployeeForm";

function NewEmployeePage() {
  return (
    <div className="App">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>

        <NewEmployeeForm />

        <button onclick="saveEmployee()">Save</button>
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </div>
  );
}

export default NewEmployeePage;
