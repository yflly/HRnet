import { useState } from "react";
import { Link } from "react-router-dom";
import { statesUSA, departments } from "../../Data/data";
import "./Form.css";

//CONTAINERS
import CreateSelect from "../Select/CreateSelect";
import React from "react";

import Modal, { useModal } from "react-modal-yflly";

import Input from "../Input/Input";

//TEST MODAL
//import Modal from "../Modal/Modal";
//import useModal from "../Modal/useModal";

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
  const { showModal, activeModal, handleOpenModal, handleCloseModal } =
    useModal();

  const formSubmit = (e) => {
    e.preventDefault();
    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    handleOpenModal("submitModal"); //Open Modal

    employees.push(newEmployee);
    localStorage.setItem("employees", JSON.stringify(employees));
    setNewEmployee(initialStateEmployee);
    console.log(employees);
  };

  return (
    <div className="new-employee">
      <main className="main-new-employee">
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

              <input
                type="date"
                name="birthdate"
                onChange={(e) =>
                  (newEmployee.birthdate = e.currentTarget.value)
                }
              />
            </div>
            <div className="row-50">
              <label htmlFor="startDate" className="form-label">
                Start date
              </label>

              <input
                type="date"
                name="startDate"
                onChange={(e) =>
                  (newEmployee.startDate = e.currentTarget.value)
                }
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
          <div className="btn">
            <button className="btn-submit" type="submit">
              Save
            </button>
            <Modal
              isOpen={showModal && activeModal === "submitModal"}
              close={handleCloseModal}
              addCloseEscape={true}
            >
              <br />
              <h3>The employee has been registered !</h3>
              <Link to="/employees" className="buttonLink">
                <button type="button" className="buttonDefault">
                  Employee list
                </button>
              </Link>
            </Modal>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Form;
