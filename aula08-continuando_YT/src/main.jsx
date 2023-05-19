import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// 1 - configurando router
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//3 - criei, agora importo as páginas
import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import ContactDetails from "./routes/ContactDetails";

//2 - criar constante
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 4  - página de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 5 - nested routes (rotas aninhadas) - identificador único - dynamic routes
      {
        path: "/contact/:id",
        element: <ContactDetails />,
      },
      // 7 - navigate para páginas não mais existentes
      {
        path: "oldcontact",
        element: <Navigate to="/contact/" />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
