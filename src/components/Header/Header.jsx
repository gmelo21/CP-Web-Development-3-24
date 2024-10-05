import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(sessionStorage.getItem("user") !== null);
    };
    checkLoginStatus();
  }, []);

  const scrollToSection = (id) => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("password");
    setIsLoggedIn(false);
    alert("Logged out successfully!");
  };

  const handleDeleteAllProducts = () => {
    localStorage.removeItem("carros"); // Clear all products from localStorage
    alert("All products have been deleted!");
    window.location.reload();
  };

  return (
    <nav>
      <div className="dropdown-basic" style={{ backgroundColor: "transparent" }}></div>
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
          Account
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu">
          <Dropdown.Item as={Link} to="/login">
            Login
          </Dropdown.Item>
          {isLoggedIn && (
            <>
              <Dropdown.Item as={Link} to="/register-product">
                Register Product
              </Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              <Dropdown.Item onClick={handleDeleteAllProducts}>
                Delete All Products
              </Dropdown.Item>
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default Header;
