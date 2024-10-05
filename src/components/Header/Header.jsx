import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("usuario") !== null;

  // Move scrollToSection inside Header component
  const scrollToSection = (id) => {
    navigate("/"); // Navigate to home page
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <nav>
      <div
        className="dropdown-basic"
        style={{ backgroundColor: "transparent" }}
      ></div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link onClick={() => scrollToSection("card-section")}>Products</Link>
        </li>
        <div className="logo">
          <h1>C-FREE</h1>
        </div>
        <li>
          <Link onClick={() => scrollToSection("about-section")}>About Us</Link>
        </li>
        <li>
          <Link to="/error">Shop</Link>
        </li>
      </ul>
      <Dropdown>
        <Dropdown.Toggle variant="success" className="dropdown-basic">
          Conta
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu">
          <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Cadastrar produto</Dropdown.Item>
          {isLoggedIn && (
            <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default Header;
