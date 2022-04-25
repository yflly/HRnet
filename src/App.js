import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "../src/pages/CreateEmployee/CreateEmployee";
import CurrentEmployee from "../src/pages/CurrentEmployee/CurrentEmployee";
import Navbar from "../src/components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employees" element={<CurrentEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
