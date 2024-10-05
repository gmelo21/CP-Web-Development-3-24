import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import "./login.css";

const Login = () => {
  const user = useRef();
  const password = useRef();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  function showPassword() {
    var x = document.getElementById("password-text");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function verification() {
    const inputUser = user.current.value.trim();
    const inputPassword = password.current.value.trim();

    for (let i = 0; i < users.length; i++) {
      if (users[i].user === inputUser && users[i].password === inputPassword) {
        return true;
      }
    }
    return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (verification()) {
      const token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem("user", user.current.value);
      sessionStorage.setItem("password", token);
      navigate("/");
      setTimeout(() => {
        window.location.reload();
      }, 0); // Slight delay to ensure navigation is processed
      alert("Login successful.");
    } else {
      alert("User/Password invalid.");
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/users/")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, []);

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-name">Log-in</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="User"
              ref={user}
              className="input"
            />
          </div>
          <div className="input-container">
            <input
              id="password-text"
              type="password"
              placeholder="Password"
              ref={password}
              className="input"
            />
          </div>
          <div id="password-checkbox" className="input-container">
            <input type="checkbox" onClick={showPassword} />
            <p>Show password</p>
          </div>
          <button type="submit" className="dropdown-basic">
            Login
          </button>
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
