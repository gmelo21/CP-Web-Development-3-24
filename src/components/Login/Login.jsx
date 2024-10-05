import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const user = useRef();
  const password = useRef();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const showPassword = () => {
    const passwordInput = document.getElementById("password-text");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  };

  const verification = () => {
    const inputUser = user.current.value.trim();
    const inputPassword = password.current.value.trim();
    return users.some(user => user.user === inputUser && user.password === inputPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (verification()) {
      const token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
      sessionStorage.setItem("user", user.current.value);
      sessionStorage.setItem("password", token);
      navigate("/");
      window.location.reload();
      alert("Login successful.");
    } else {
      alert("User/Password invalid.");
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/users/")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-name">Log-in</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input type="text" placeholder="User" ref={user} className="input" />
          </div>
          <div className="input-container">
            <input id="password-text" type="password" placeholder="Password" ref={password} className="input" />
          </div>
          <div id="password-checkbox" className="input-container">
            <input type="checkbox" onClick={showPassword} />
            <p>Show password</p>
          </div>
          <button type="submit" className="dropdown-basic">Login</button>
        </form>
        <ul className="utilities">
          <li className="utility-text">Forgot your password?</li>
          <li className="utility-text">
            <Link to="/create-account">Create account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
