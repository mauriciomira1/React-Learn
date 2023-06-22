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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createUserFormSchema = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-mail inválido"),
  password: z
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .nonempty("A senha é obrigatória"),
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

function App() {
  const [output, setOutput] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

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
            {errors.email && (
              <span className="text-red-600 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Senha</label>
            <input
              type="password"
              className="border border-zinc-200 shadow-sm rounded h-10 px-3"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-600 text-sm">
                {errors.password.message}
              </span>
            )}
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
