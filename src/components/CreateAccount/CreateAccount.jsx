import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const User = () => {
  // Hook to receive parameters (id) from the route
  const { id } = useParams();

  // State to manage user information
  const [users, setUsers] = useState({
    id,
    user: "",
    password: "",
  });

  const navigate = useNavigate();

  const showPassword = () => {
    const passwordField = document.getElementById("password-text");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
  };

  // Handle input changes
  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  // Determine the method for the fetch request
  const method = id ? "put" : "post";

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("User created successfully.");

    fetch(`http://localhost:5000/users/${id ? id : ""}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    }).then(() => {
      const token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem("user", users.user);
      sessionStorage.setItem("password", token);
      navigate("/");
      window.location.reload();
    });
  };

  return (
    <div className="registering-account-container">
      <div className="registering-account-card">
        <h2 className="registering-account-name">Log-in</h2>
        <form className="registering-account-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              name="user"
              value={users.user}
              placeholder="Type in your username"
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              id="password-text"
              name="password"
              value={users.password}
              placeholder="Type in your password"
              onChange={handleChange}
              className="input"
            />
          </div>
          <div id="password-checkbox" className="input-container">
            <input type="checkbox" onClick={showPassword} />
            <p>Show password</p>
          </div>
          <button type="submit" className="dropdown-basic">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
