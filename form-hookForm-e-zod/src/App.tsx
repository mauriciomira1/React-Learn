import { useState } from "react";
import "./styles/global.css";

/*
--- To do ---
1. Validação / transformação
2. Field de arquivos
3. Upload de arquivos
4. Composition Pattern
*/

import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  const [output, setOutput] = useState("");

  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <>
      <main className="h-screen bg-zinc-50 flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(createUser)}
          className="flex flex-col gap-4 w-full max-w-xs"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="">E-mail</label>
            <input
              type="email"
              className="border border-zinc-200 shadow-sm rounded h-10 px-3"
              {...register("email")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Senha</label>
            <input
              type="password"
              className="border border-zinc-200 shadow-sm rounded h-10 px-3"
              {...register("password")}
            />
          </div>

          <button
            type="submit"
            className="bg-emerald-500 rounded px-2 h-10 hover:bg-emerald-600 font-semibold text-white"
          >
            Salvar
          </button>
        </form>
        <pre>{output}</pre>
      </main>
    </>
  );
}

export default App;
