import React from "react";

const Input = (props) => {
  return (
    <input
      className="form-input"
      id={props.inputName}
      type={props.inputType}
      name={props.inputName}
      aria-labelledby={props.inputName}
      value={props.newEmployee[props.inputName]}
      required
      onChange={(e) => {
        props.setNewEmployee((state) => ({
          ...state,
          [e.target.id]: e.target.value,
        }));
      }}
    />
  );
};

export default Input;
