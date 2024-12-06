import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import "./registerproduct.css";

const RegisterProduct = () => {
  const navigate = useNavigate();
  const [vehicles, setVehicle] = useState([]);
  const [newVehicle, setNewVehicle] = useState({
    id: null,
    name: "",
    price: "",
    productImage: "",
    productDesc: "",
    onStock: true,
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const storedVehicle = localStorage.getItem("vehicles");
    if (storedVehicle) {
      setVehicle(JSON.parse(storedVehicle));
    }
  }, []);

  const saveVehicleToLocalStorage = (vehicles) => {
    localStorage.setItem("vehicles", JSON.stringify(vehicles));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewVehicle((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
          ? parseFloat(value)
          : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewVehicle((prev) => ({ ...prev, productImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loggedInUser = sessionStorage.getItem("user"); // Get the logged-in user
    let updatedVehicle;

    if (editingId !== null) {
      updatedVehicle = vehicles.map((vehicle) =>
        vehicle.id === editingId
          ? { ...newVehicle, id: editingId, user: loggedInUser }
          : vehicle
      );
      setEditingId(null);
    } else {
      updatedVehicle = [
        ...vehicles,
        { ...newVehicle, id: Date.now(), user: loggedInUser },
      ];
    }

    setVehicle(updatedVehicle);
    saveVehicleToLocalStorage(updatedVehicle);

    setNewVehicle({
      id: null,
      name: "",
      price: "",
      productImage: "",
      productDesc: "",
      onStock: true,
    });

    alert("Product added successfully.");
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 0);
  };

  return (
    <div className="register-product-container">
      <div className="register-product-card">
        <h1 className="register-product-name">Product Registration</h1>
        <form className="register-product-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              className="input"
              name="name"
              value={newVehicle.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
            />
          </div>
          <div className="input-container">
            <input
              className="input"
              name="price"
              type="number"
              maxlength="5"
              value={newVehicle.price}
              onChange={handleInputChange}
              placeholder="Price"
              required
              step="0.01"
              min="0"
            />
          </div>
          <div className="input-container">
            <input
              className="input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              className="input"
              name="productDesc"
              value={newVehicle.productDesc}
              onChange={handleInputChange}
              placeholder="Product Description"
              required
            />
          </div>
          <div id="register-product-checkbox">
            <input
              type="checkbox"
              name="onStock"
              checked={newVehicle.onStock}
              onChange={handleInputChange}
            />
            <p>In Stock</p>
          </div>
          <button type="submit" className="dropdown-basic">
            Save
          </button>
        </form>
      </div>
      <Card
        name={newVehicle.name}
        productDesc={newVehicle.productDesc}
        value={newVehicle.price ? newVehicle.price : ""}
        productImage={newVehicle.productImage}
        onStock={newVehicle.onStock}
      />
    </div>
  );
};

export default RegisterProduct;
