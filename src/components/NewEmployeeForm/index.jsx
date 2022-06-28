import { React, useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";

import Modal from "../../components/Modal/";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const states = [
  {
    label: "Alabama",
    value: "AL",
  },
  {
    label: "Alaska",
    value: "AK",
  },
  {
    label: "American Samoa",
    value: "AS",
  },
  {
    label: "Arizona",
    value: "AZ",
  },
  {
    label: "Arkansas",
    value: "AR",
  },
  {
    label: "California",
    value: "CA",
  },
  {
    label: "Colorado",
    value: "CO",
  },
  {
    label: "Connecticut",
    value: "CT",
  },
  {
    label: "Delaware",
    value: "DE",
  },
  {
    label: "District Of Columbia",
    value: "DC",
  },
  {
    label: "Federated States Of Micronesia",
    value: "FM",
  },
  {
    label: "Florida",
    value: "FL",
  },
  {
    label: "Georgia",
    value: "GA",
  },
  {
    label: "Guam",
    value: "GU",
  },
  {
    label: "Hawaii",
    value: "HI",
  },
  {
    label: "Idaho",
    value: "ID",
  },
  {
    label: "Illinois",
    value: "IL",
  },
  {
    label: "Indiana",
    value: "IN",
  },
  {
    label: "Iowa",
    value: "IA",
  },
  {
    label: "Kansas",
    value: "KS",
  },
  {
    label: "Kentucky",
    value: "KY",
  },
  {
    label: "Louisiana",
    value: "LA",
  },
  {
    label: "Maine",
    value: "ME",
  },
  {
    label: "Marshall Islands",
    value: "MH",
  },
  {
    label: "Maryland",
    value: "MD",
  },
  {
    label: "Massachusetts",
    value: "MA",
  },
  {
    label: "Michigan",
    value: "MI",
  },
  {
    label: "Minnesota",
    value: "MN",
  },
  {
    label: "Mississippi",
    value: "MS",
  },
  {
    label: "Missouri",
    value: "MO",
  },
  {
    label: "Montana",
    value: "MT",
  },
  {
    label: "Nebraska",
    value: "NE",
  },
  {
    label: "Nevada",
    value: "NV",
  },
  {
    label: "New Hampshire",
    value: "NH",
  },
  {
    label: "New Jersey",
    value: "NJ",
  },
  {
    label: "New Mexico",
    value: "NM",
  },
  {
    label: "New York",
    value: "NY",
  },
  {
    label: "North Carolina",
    value: "NC",
  },
  {
    label: "North Dakota",
    value: "ND",
  },
  {
    label: "Northern Mariana Islands",
    value: "MP",
  },
  {
    label: "Ohio",
    value: "OH",
  },
  {
    label: "Oklahoma",
    value: "OK",
  },
  {
    label: "Oregon",
    value: "OR",
  },
  {
    label: "Palau",
    value: "PW",
  },
  {
    label: "Pennsylvania",
    value: "PA",
  },
  {
    label: "Puerto Rico",
    value: "PR",
  },
  {
    label: "Rhode Island",
    value: "RI",
  },
  {
    label: "South Carolina",
    value: "SC",
  },
  {
    label: "South Dakota",
    value: "SD",
  },
  {
    label: "Tennessee",
    value: "TN",
  },
  {
    label: "Texas",
    value: "TX",
  },
  {
    label: "Utah",
    value: "UT",
  },
  {
    label: "Vermont",
    value: "VT",
  },
  {
    label: "Virgin Islands",
    value: "VI",
  },
  {
    label: "Virginia",
    value: "VA",
  },
  {
    label: "Washington",
    value: "WA",
  },
  {
    label: "West Virginia",
    value: "WV",
  },
  {
    label: "Wisconsin",
    value: "WI",
  },
  {
    label: "Wyoming",
    value: "WY",
  },
];
const departments = [
  {
    label: "Sales",
    value: "Sales",
  },
  {
    label: "Marketing",
    value: "Marketing",
  },
  {
    label: "Engineering",
    value: "Engineering",
  },
  {
    label: "Human Resources",
    value: "Human Resources",
  },
  {
    label: "Legal",
    value: "Legal",
  },
];

function NewEmployeeForm() {
  const [stateSelection, setStateSelection] = useState(null);
  const [deptSelection, setDeptSelection] = useState(null);
  const [dateOfBirthField, setDateOfBirthField] = useState(new Date());
  const [startDateField, setStartDateField] = useState(new Date());
  const [displayModal, setDisplayModal] = useState(false);

  const saveEmployee = (e) => {
    e.preventDefault();

    setDisplayModal(true);

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const dateOfBirth = document.getElementById("date-of-birth");
    const startDate = document.getElementById("start-date");
    const street = document.getElementById("street");
    const city = document.getElementById("city");
    const zipCode = document.getElementById("zip-code");

    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const employee = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: dateOfBirth.value,
      startDate: startDate.value,
      department: deptSelection,
      street: street.value,
      city: city.value,
      state: stateSelection,
      zipCode: zipCode.value,
    };
    console.log(employee);
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
  };

  const changeStateSelection = (e) => {
    setStateSelection(e.value);
  };

  const changeDeptSelection = (e) => {
    setDeptSelection(e.value);
  };
  return (
    <form action="#" id="create-employee" className="form">
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" />

      <label htmlFor="last-name">Last Name</label>
      <input type="text" id="last-name" />

      <label htmlFor="date-of-birth">Date of Birth</label>
      <DatePicker
        id="date-of-birth"
        selected={dateOfBirthField}
        onChange={(date: Date) => setDateOfBirthField(date)}
      />

      <label htmlFor="start-date">Start Date</label>
      <DatePicker
        id="start-date"
        selected={startDateField}
        onChange={(date: Date) => setStartDateField(date)}
      />

      <fieldset className="address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input id="street" type="text" />

        <label htmlFor="city">City</label>
        <input id="city" type="text" />

        <label htmlFor="state">State</label>
        <Select
          name="state"
          id="state"
          className="dropdown"
          options={states}
          onChange={changeStateSelection}
        />

        <label htmlFor="zip-code">Zip Code</label>
        <input id="zip-code" type="number" />
      </fieldset>

      <label htmlFor="department">Department</label>
      <Select
        name="department"
        id="department"
        className="dropdown"
        options={departments}
        onChange={changeDeptSelection}
      />
      {/* <select>
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select> */}
      <div className="button-container">
        <button onClick={saveEmployee} className="submit-button">
          Save
        </button>
        <Modal title="Employee Created!" show={displayModal} />
      </div>
    </form>
  );
}

export default NewEmployeeForm;
