import React, { useEffect } from "react";
import Form from "../../components/Form/Form";

export default function CreateEmployee() {
  useEffect(() => {
    document.title = "HRNET";
  });
  return (
    <main>
      <Form />
    </main>
  );
}
