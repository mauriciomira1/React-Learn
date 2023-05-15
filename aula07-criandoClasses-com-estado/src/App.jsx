import { useState } from "react";
import "./App.css";
import Planets from "./components/planets/planet";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Planet />
    </>
  );
}

export default App;
