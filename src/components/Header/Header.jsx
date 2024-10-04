import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("senha");
    navigate("/login"); // Redireciona para a página de login
  };

  const isLoggedIn = sessionStorage.getItem("usuario") !== null;

  return (
    <nav>
      <div className="dropdown-basic" style={{ backgroundColor: 'transparent' }}></div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Produtos</Link>
        </li>
        <div className="logo">
          <h1>C-FREE</h1>
        </div>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/login">Loja</Link>
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
