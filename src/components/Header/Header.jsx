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
    alert("Logged out successfully.");
  };

  const handleDeleteProduct = () => {
    const productName = prompt("Enter the name of the product to delete:");
    if (!productName) return;
  
    const loggedInUser = sessionStorage.getItem("user");
    const storedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    let productFound = false;
    let canDelete = false;
  
    const filteredVehicles = storedVehicles.filter((vehicle) => {
      if (vehicle.name.toLowerCase() === productName.toLowerCase()) {
        productFound = true;
        if (vehicle.user !== loggedInUser) {
          alert("You can only delete your own products.");
          return true;
        } else {
          canDelete = true;
          return false;
        }
      }
      return true;
    });
  
    if (!productFound) {
      alert("Product not found.");
    } else if (canDelete) {
      localStorage.setItem("vehicles", JSON.stringify(filteredVehicles));
      alert("Product deleted successfully.");
      window.location.reload();
    }
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
          <Link to="/address">Address</Link>
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
              <Dropdown.Item onClick={handleDeleteProduct}>
                Delete Product
              </Dropdown.Item>
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default Header;
