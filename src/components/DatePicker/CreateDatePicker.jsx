import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";

const years = range(1950, getYear(new Date()) + 1, 1);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CreateDatePicker = (props) => {
  return (
    <>
      <DatePicker
        ariaLabelledBy={props.inputName}
        renderCustomHeader={({
          date,
          changeMonth,
          changeYear,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisable,
        }) => (
          <div className="date-picker__header">
            <button
              type="button"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              {"<"}
            </button>
            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
              ;
            </select>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
              ;
            </select>
            <button
              type="button"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisable}
            >
              {">"}
            </button>
          </div>
        )}
        todayButton={<i className="fas fa-calendar-day"></i>}
        showPopperArrow={false}
        selected={props.newEmployee[props.inputName]}
        onChange={(date) => {
          props.setNewEmployee((state) => ({
            ...state,
            [props.inputName]: date,
          }));
        }}
      />
    </>
  );
};

export default CreateDatePicker;
