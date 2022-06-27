import { Link } from "react-router-dom";
import { useState } from "react";

import HRnetLogo from "../../assets/images/hrnet-logo.svg";
import Footer from "../../components/Footer";
import "./index.css";

import NewEmployeeForm from "../../components/NewEmployeeForm";

function NewEmployeePage() {
  const [showModal, useShowModal] = useState(false);

  return (
    <div className="App">
      <div className="title">
        <img className="logo" src={HRnetLogo} alt="" />
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>

        <NewEmployeeForm />
      </div>
      {showModal && (
        <div id="confirmation" className="modal">
          Employee Created!
        </div>
      )}
      <Footer />
    </div>
  );
}

export default NewEmployeePage;
