import { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [copyBtn, setCopyBtn] = useState("Copy");
  const [copyBtnColor, setCopyBtnColor] = useState("copyBtn");
  const [password, setPassword] = useState("");
  const [customSize, setCustomSize] = useState(12);
  const [showInput, setShowInput] = useState(false);

  const passwordSize = showInput ? customSize : 8;

  function Copied() {
    window.navigator.clipboard.writeText(password);
    setCopyBtn("Copied!");
    setCopyBtnColor("copiedBtn");
  }

  function Generate() {
    const characters =
      "123456789-=!@#$%¨&*()_+qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM;:<>/]}[{";
    /*     const length = 12; */
    let newPassword = "";
    for (let i = 0; i < passwordSize; i++) {
      const randomPosition = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomPosition];
    }
    setPassword(newPassword);
    setCopyBtn("Copy");
    setCopyBtnColor("");
  }

  return (
    <>
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar o tamanho:</label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput((currentState) => !currentState)}
        />
      </div>
      {showInput && (
        <Input passwordSize={customSize} setpasswordSize={setCustomSize} />
      )}
      <button id="generateBtn" onClick={Generate}>
        Gerar senha de {passwordSize} caracteres
      </button>
      <button id={copyBtnColor} onClick={Copied}>
        {copyBtn}
      </button>
      <div>{password}</div>
    </>
  );
}

export default App;
