import React from "react";
import Select, { createFilter } from "react-select";

const CreateSelect = (props) => {
  return (
    <Select
      aria-label={props.inputName}
      aria-haspopup="listbox"
      className="custom-select"
      options={props.options}
      value={{ label: props.newEmployee[props.inputName] }}
      filterOption={createFilter({ ignoreAccents: false })}
      classNamePrefix="custom-select"
      onChange={(e) => {
        props.setNewEmployee((state) => ({
          ...state,
          [props.inputName]: e.label,
        }));
      }}
      required
    />
  );
};

export default CreateSelect;
