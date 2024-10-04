import { Link } from "react-router-dom";
import "./error.css";
import bikeError from "../../assets/bike-error.png";
import Header from "../Header/Header";

const Error = () => {
  return (
    <>
      <div className="error-container">
        <Header />
        <section id="error-section">
          <img src={bikeError} id="error-image" alt="Error" />
          <h1>404 - Parece que esta trilha ainda não existe.</h1>
          <button type="button" className="btn btn-outline-success">
            <Link className="btn-outline-success-link" to="/">
              Para a página inicial
            </Link>
          </button>
        </section>
      </div>
    </>
  );
};

export default Error;
