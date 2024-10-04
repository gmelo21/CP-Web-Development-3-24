import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import "./components/base.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
