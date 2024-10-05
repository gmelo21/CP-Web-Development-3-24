import { Link } from "react-router-dom";
import "./error.css";
import bikeError from "../../assets/bike-error.png";
import Header from "../Header/Header";

const Error = () => {
  return (
    <>
      <div className="error-container">
        <Header />
        <section className="error-section">
          <img src={bikeError} className="error-image" alt="Error" />
          <h1>404 - Looks like this road hasn't been built yet.</h1>
          <button type="button" className="btn btn-outline-success">
            <Link className="btn-outline-success-link" to="/">
              Back to home
            </Link>
          </button>
        </section>
      </div>
    </>
  );
};

export default Error;
