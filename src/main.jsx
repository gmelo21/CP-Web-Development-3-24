import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Error from "./components/Error/Error";
import CreateAccount from "./components/CreateAccount/CreateAccount.jsx";
import RegisterProduct from "./components/RegisterProduct/RegisterProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/create-account", element: <CreateAccount /> },
      { path: "/register-product", element: <RegisterProduct /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
