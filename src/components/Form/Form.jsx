import { useState } from "react";
import { Link } from "react-router-dom";
import { statesUSA, departments } from "../../Data/data";

//CONTAINERS
import CreateSelect from "../Select/CreateSelect";
import CreateDatePicker from "../DatePicker/CreateDatePicker";
import Input from "../Input/Input";

const initialStateEmployee = {
  firstName: "",
  lastName: "",
  birthdate: new Date(),
  startDate: new Date(),
  street: "",
  city: "",
  state: "",
  zipCode: "",
  department: "",
};

function Form() {
  const [newEmployee, setNewEmployee] = useState(initialStateEmployee);

  const formSubmit = (e) => {
    e.preventDefault();
    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    employees.push(newEmployee);
    localStorage.setItem("employees", JSON.stringify(employees));
    setNewEmployee(initialStateEmployee);
    console.log(employees);
  };

  return (
    <div className="new-employee">
      <main className="main-new-employee">
        <Link to={`/employees`}>
          <span>New employee</span>
        </Link>
        <form action="" className="form-classic" onSubmit={formSubmit}>
          <div className="row">
            <div className="row-50">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <Input
                inputType="text"
                inputName="firstName"
                newEmployee={newEmployee}
                setNewEmployee={setNewEmployee}
              />
            </div>
            <div className="row-50">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <Input
                inputType="text"
                inputName="lastName"
                newEmployee={newEmployee}
                setNewEmployee={setNewEmployee}
              />
            </div>
            <div className="row-50">
              <label htmlFor="birthdate" className="form-label">
                Birthdate
              </label>

              <CreateDatePicker
                inputName="birthdate"
                newEmployee={newEmployee}
                setNewEmployee={setNewEmployee}
              />
            </div>
            <div className="row-50">
              <label htmlFor="startDate" className="form-label">
                Start date
              </label>

              <CreateDatePicker
                inputName="startDate"
                newEmployee={newEmployee}
                setNewEmployee={setNewEmployee}
              />
            </div>
          </div>
          <div className="row border-style">
            <div className="row-50">
              <label htmlFor="street" className="form-label">
                Street
              </label>
              <Input
                inputType="text"
                inputName="street"
                newEmployee={newEmployee}
                setNewEmployee={setNewEmployee}
              />
            </div>
            <div className="row-50">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <Input
                inputType="text"
                inputName="city"
                newEmployee={newEmployee}
                setNewEmployee={setNewEmployee}
              />
            </div>
            <div className="row-50">
              <label htmlFor="state" className="form-label">
                State
              </label>

              <CreateSelect
                inputName="state"
                options={statesUSA}
                newEmployee={newEmployee}
                setNewEmployee={setNewEmployee}
              />
            </div>
            <div className="row-50">
              <label htmlFor="zipCode" className="form-label">
                Zip Code
              </label>
              <Input
                inputType="number"
                inputName="zipCode"
                newEmployee={newEmployee}
                setNewEmployee={setNewEmployee}
              />
            </div>
          </div>
          <div className="row">
            <div className="row-100">
              <label
                htmlFor="department"
                className="form-label department-label"
              >
                Department
              </label>

              <CreateSelect
                inputName="department"
                options={departments}
                newEmployee={newEmployee}
                setNewEmployee={setNewEmployee}
              />
            </div>
          </div>
          <button className="btn-submit" type="submit">
            Save
          </button>
        </form>
      </main>
    </div>
  );
}

export default Form;
