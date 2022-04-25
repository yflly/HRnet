import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import addUserIcon from "../../assets/addUserIcon.png";
import dataTable from "../../assets/dataTable.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="navbar_logo" alt="HRNet Logo" src={logo}></img>
      </Link>
      <div>
        <Link to="/employees">
          <img
            className="dataTable_logo"
            alt="View Current Employee"
            src={dataTable}
          ></img>
        </Link>
        <Link to="/">
          <img className="addUser_logo" alt="Add User" src={addUserIcon}></img>
        </Link>
      </div>
    </nav>
  );
}
