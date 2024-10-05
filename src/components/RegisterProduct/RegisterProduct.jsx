import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./registerproduct.css";

const RegisterProduct = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    id: null,
    name: "",
    price: "",
    manufacturer: "",
    productImage: "",
    productDesc: "",
    onStock: true,
  });
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  const saveProductsToLocalStorage = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
  };

  const handleLogout = () => {
    sessionStorage.removeItem("password");
    sessionStorage.removeItem("user");
    alert("Logging out...");
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct((prev) => ({
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
        setNewProduct((prev) => ({ ...prev, productImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let updatedProducts;

    if (editingId !== null) {
      updatedProducts = products.map((product) =>
        product.id === editingId ? { ...newProduct, id: editingId } : product
      );
      setEditingId(null);
    } else {
      updatedProducts = [...products, { ...newProduct, id: Date.now() }];
    }

    setProducts(updatedProducts);
    saveProductsToLocalStorage(updatedProducts);

    setNewProduct({
      id: null,
      name: "",
      price: "",
      manufacturer: "",
      productImage: "",
      productDesc: "",
      onStock: true,
    });

    alert("Product added successfully!");
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 0);
  };

  const handleEdit = (product) => {
    setNewProduct(product);
    setEditingId(product.id);
  };

  const handleDelete = (product) => {
    setProductToDelete(product);
    setShowModal(true);
  };

  const confirmDelete = () => {
    const updatedProducts = products.filter((p) => p.id !== productToDelete.id);
    setProducts(updatedProducts);
    saveProductsToLocalStorage(updatedProducts);
    setProductToDelete(null);
    setShowModal(false);
  };

  const cancelDelete = () => {
    setProductToDelete(null);
    setShowModal(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="registering-product-container">
      <h1 className="registering-product-title">Product Registration</h1>

      <form className="registering-product-form" onSubmit={handleSubmit}>
        <input
          className="input"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          className="input"
          name="price"
          type="number"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Price"
          required
          min="0"
          step="0.01"
        />
        <input
          className="input"
          name="manufacturer"
          value={newProduct.manufacturer}
          onChange={handleInputChange}
          placeholder="Manufacturer"
          required
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
          value={newProduct.productDesc}
          onChange={handleInputChange}
          placeholder="Product Description"
          required
        />
        <label>
          <input
            type="checkbox"
            name="onStock"
            checked={newProduct.onStock}
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
