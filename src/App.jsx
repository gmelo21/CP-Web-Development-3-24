import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./components/base.css";

function App() {
  return (
    <>
      <div id="container-page">
        <div id="header-page">
          <Header/>
        </div>
        <div id="main-page">
          <Outlet id="outlet-page" />
        </div>
        <div id="footer-page">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
