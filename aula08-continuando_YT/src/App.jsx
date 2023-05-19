import "./App.css";

// Reaproveitamento de estrutura
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
// eslint-disable-next-line no-unused-vars
import React from "react";

function App() {
  return (
    <>
      <Navbar />
      <h1>React Router</h1>
      <Outlet />
      <p>Footer</p>
    </>
  );
}

export default App;
