import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    let updatedVehicle;

    if (editingId !== null) {
      updatedVehicle = vehicles.map((vehicle) =>
        vehicle.id === editingId ? { ...newVehicle, id: editingId } : vehicle
      );
      setEditingId(null);
    } else {
      updatedVehicle = [...vehicles, { ...newVehicle, id: Date.now() }];
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
    <div className="registering-product-container">
      <h1 className="registering-product-title">Product Registration</h1>

      <form className="registering-product-form" onSubmit={handleSubmit}>
        <input
          className="input"
          name="name"
          value={newVehicle.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          className="input"
          name="price"
          type="number"
          value={newVehicle.price}
          onChange={handleInputChange}
          placeholder="Price"
          required
          min="0"
          step="0.01"
        />
        <input
          className="input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <input
          className="input"
          name="productDesc"
          value={newVehicle.productDesc}
          onChange={handleInputChange}
          placeholder="Product Description"
          required
        />
        <label>
          <input
            type="checkbox"
            name="onStock"
            checked={newVehicle.onStock}
            onChange={handleInputChange}
          />
          In Stock
        </label>
        <button type="submit" className="button">
          Save
        </button>
      </form>
    </div>
  );
};

export default RegisterProduct;
