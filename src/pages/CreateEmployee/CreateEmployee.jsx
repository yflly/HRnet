import React, { useEffect } from "react";
import Form from "../../components/Form/Form";
import "./CreateEmployee.css";

export default function CreateEmployee() {
  useEffect(() => {
    document.title = "HRNET";
  });
  return (
    <main className="wrapper">
      <h1 className="container__title">Create Employee</h1>
      <Form />
    </main>
  );
}
