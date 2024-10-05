import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const user = () => {
  /*Hook-useParams- é utilizado para receber paramentros(codigo) pela rota */
  let { id } = useParams();

  /*Hook- useState- ele manipula o estado da variavel */
  const [users, setUsers] = useState({
    id,
    user: "",
    password: "",
  });

  function showPassword() {
    var x = document.getElementById("password-text");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  //Hook- useNavigate- redireciona para outro componente
  const navigate = useNavigate();

  //criando a função handleChange
  // (...)spreed- expande os valores antigos com o novo  isso sempre vai acontecer com array ou objeto
  // evento target- captura o que foi digitado em um campo
  //value{users.user} vai la no banco(json) e tras o user
  //value{users.password} vai la no banco(json) e tras a password
  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  //criando uma variavel method ara post edit
  let metodo = "post";
  if (id) {
    metodo = "put";
  }

  //criando a função handleSubmit
  const handleSubmit = (e) => {
    //Previne qualquer alteração na pagina (ex. Load)
    alert("User created successfully.");

    e.preventDefault();

    fetch(`http://localhost:5000/users/${id ? id : ""}`, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
      //promises
    }).then(() => {
      //direciona para o componente
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
export default user;
