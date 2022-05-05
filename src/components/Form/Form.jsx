import { useState } from "react";
import { Link } from "react-router-dom";
import { statesUSA, departments } from "../../Data/data";
import "./Form.css";
import "../Modal/Modal.css";

//CONTAINERS
import CreateSelect from "../Select/CreateSelect";
import React from "react";
import { Modal } from "modal-by-yflly";

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

const Form = () => {
  //function Form() {
  const [newEmployee, setNewEmployee] = useState(initialStateEmployee);
  const [isOpen, setOpen] = useState();

  //toggleModal When the modal is open
  const toggleModal = () => {
    setOpen(!isOpen);
  };

  //Form Submit for add a new employee with confirmation modal
  const formSubmit = (e) => {
    e.preventDefault();
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(newEmployee);
    localStorage.setItem("employees", JSON.stringify(employees));
    toggleModal();
    setNewEmployee(initialStateEmployee);
    e.target.reset();
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
                id="birthdate"
                name="birthdate"
                aria-label="Birthdate"
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
                id="startDate"
                name="startDate"
                aria-label="Start Date"
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
          </div>
        </form>
        <Modal
          isOpen={isOpen}
          canClose={true}
          closeBtnContent={<>X</>}
          footerContent={
            <>
              <Link to="/employees">
                <button className="btn__primary">Employees list</button>
              </Link>
            </>
          }
          title="Congrats!"
          haveFooter={true}
          modalContent={
            <span className="modal__content">
              The employee has been registered !
            </span>
          }
          toggleModal={toggleModal}
        ></Modal>
      </main>
    </div>
  );
};

export default Form;
