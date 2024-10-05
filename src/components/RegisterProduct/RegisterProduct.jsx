import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./registerproduct.css";

const CadastrarProduto = () => {
  const navigate = useNavigate();
  const [carros, setCarros] = useState([]);
  const [novoCarro, setNovoCarro] = useState({
    id: null,
    nome: "",
    preco: "",
    fabricante: "",
    productImage: "",
    productDesc: "",
    onStock: true,
  });
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [carroToDelete, setCarroToDelete] = useState(null);

  useEffect(() => {
    // Load products from localStorage on component mount
    const storedCarros = localStorage.getItem("carros");
    if (storedCarros) {
      setCarros(JSON.parse(storedCarros));
    }
  }, []);

  const saveCarrosToLocalStorage = (carros) => {
    localStorage.setItem("carros", JSON.stringify(carros));
  };

  const handleLogout = () => {
    sessionStorage.removeItem("senha");
    sessionStorage.removeItem("usuario");
    alert("Saindo...");
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNovoCarro(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseFloat(value) : value // Parse number input
    }));
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNovoCarro((prev) => ({ ...prev, productImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let updatedCarros;

    if (editingId !== null) {
      updatedCarros = carros.map((carro) =>
        carro.id === editingId ? { ...novoCarro, id: editingId } : carro
      );
      setEditingId(null);
    } else {
      updatedCarros = [...carros, { ...novoCarro, id: Date.now() }]; // Add new product
    }

    setCarros(updatedCarros);
    saveCarrosToLocalStorage(updatedCarros); // Save to localStorage

    // Reset the form after submission
    setNovoCarro({
      id: null,
      nome: "",
      preco: "",
      fabricante: "",
      productImage: "",
      productDesc: "",
      onStock: true,
    });

    // Optionally, you can navigate or give feedback here instead of redirecting
    alert("Produto adicionado com sucesso!"); // Feedback for user

    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 0);
  };

  const handleEdit = (carro) => {
    setNovoCarro(carro);
    setEditingId(carro.id);
  };

  const handleDelete = (carro) => {
    setCarroToDelete(carro);
    setShowModal(true);
  };

  const confirmDelete = () => {
    const updatedCarros = carros.filter((c) => c.id !== carroToDelete.id);
    setCarros(updatedCarros);
    saveCarrosToLocalStorage(updatedCarros); // Save to localStorage
    setCarroToDelete(null);
    setShowModal(false);
  };

  const cancelDelete = () => {
    setCarroToDelete(null);
    setShowModal(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">Cadastro de Produtos</h1>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          name="nome"
          value={novoCarro.nome}
          onChange={handleInputChange}
          placeholder="Nome"
          required
        />
        <input
          className="input"
          name="preco"
          type="number" // Change type to 'number'
          value={novoCarro.preco}
          onChange={handleInputChange}
          placeholder="Preço"
          required
          min="0" // Optional: prevent negative numbers
          step="0.01" // Optional: allow decimal numbers
        />
        <input
          className="input"
          name="fabricante"
          value={novoCarro.fabricante}
          onChange={handleInputChange}
          placeholder="Fabricante"
          required
        />
        <input
          className="input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <textarea
          className="input"
          name="productDesc"
          value={novoCarro.productDesc}
          onChange={handleInputChange}
          placeholder="Product Description"
          required
        />
        <label>
          <input
            type="checkbox"
            name="onStock"
            checked={novoCarro.onStock}
            onChange={handleInputChange}
          />
          In Stock
        </label>
        <button type="submit" className="button">
          Salvar
        </button>
      </form>

      <input
        className="search-input"
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearch}
      />

      {showModal && (
        <div className="modal">
          <h2>Confirmar Exclusão</h2>
          <p>Você tem certeza que deseja excluir {carroToDelete?.nome}?</p>
          <button onClick={confirmDelete}>Confirmar</button>
          <button onClick={cancelDelete}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default CadastrarProduto;
