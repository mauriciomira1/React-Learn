import { useState } from "react";
import "./App.css";

// Reaproveitamento de estrutura
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <p>Navbar</p>
      <h1>React Router</h1>
      <Outlet />
      <p>Footer</p>
    </>
  );
}

export default App;
