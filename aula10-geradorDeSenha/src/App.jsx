import { useState } from "react";
import "./App.css";
import Gerador from "./components/Gerador";

function App() {
  const [copyBtn, setCopyBtn] = useState("Copy");
  const [copyBtnColor, setCopyBtnColor] = useState("copyBtn");
  const [password, setPassword] = useState("");

  function Copied() {
    window.navigator.clipboard.writeText(password);
    setCopyBtn("Copied!");
    setCopyBtnColor("copiedBtn");
  }

  function Generate() {
    const characters =
      "123456789-=!@#$%¨&*()_+qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM;:,<.>/]}[{";
    const length = 12;
    let newPassword = "";
    for (let i = 0; i <= length; i++) {
      const randomPosition = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomPosition];
    }
    setPassword(newPassword);
    setCopyBtn("Copy");
    setCopyBtnColor("copyBtn");
  }

  return (
    <>
      <Gerador>
        <h1>Gerador de senhas</h1>
        <button id="generateBtn" onClick={Generate}>
          Generate
        </button>
        <button id={copyBtnColor} onClick={Copied}>
          {copyBtn}
        </button>
        <div>{password}</div>
      </Gerador>
    </>
  );
}

export default App;
