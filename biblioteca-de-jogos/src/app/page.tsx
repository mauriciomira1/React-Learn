"use client";

import { ReactNode, useState } from "react";

interface HomeProps {
  title: String;
  cover: String;
  games: [{ id: Number; title: String; cover: String }];
}

export default function Home() {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [games, setGames] = useState([{}]);

  const addGame = ({ title, cover }: HomeProps) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, title, cover };
    setGames((state) => [...state, game]);
  };

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit}>
        <div className="py-3">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-900 rounded border-2 border-gray-800 mx-1"
          />
        </div>
        <div className="py-3">
          <label htmlFor="cover">Capa:</label>
          <input
            type="text"
            name="cover"
            id="cover"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
            className="bg-gray-900 rounded border-2 border-gray-800 mx-1"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-gray-800 border-2 border-blue-950 px-3 py-1"
        >
          Adicionar à biblioteca
        </button>
      </form>
      <div>
        {games.map<ReactNode>((game) => (
          <div key={game.id}>
            <h1>{game.title}</h1>
            <h2>{game.cover}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
