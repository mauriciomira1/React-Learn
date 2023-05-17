import Planet from "./planet/";
import { useState, useEffect } from "react";

/* function clickOnPlanet(name) {
  console.log(`Clicou no planeta ${name}`);
} */

/* function verifyColor() {
  if (colorImg === ".gray-img") colorImg = ".color-img";
  else colorImg = ".gray-img";
} */

async function getPlanets() {
  let response = await fetch("http://localhost:5173/public/planets.json");
  let data = await response.json();
  return data;
}

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data["planets"]);
    });
  }, []); // como está vazio, ele só renderiza uma vez. Se quisesse que renderizasse quando o 'planets' atualizasse, inseriria esse nome

  const RemoveLast = () => {
    let new_planets = [...planets];
    new_planets.pop();
    setPlanets(new_planets);
  };

  const DuplicateLastPlanet = () => {
    let lastPlanet = planets[planets.length - 1];
    setPlanets([...planets, lastPlanet]);
  };

  return (
    <>
      <h3>Planet list</h3>
      <button onClick={RemoveLast}>Remove last</button>
      <br />
      <button onClick={DuplicateLastPlanet}>Duplicate last</button>
      {planets.map((planet, index) => {
        return (
          <Planet
            id={planet.id}
            key={index}
            planetName={planet.name}
            img_url={planet.img_url}
            description={planet.description}
            link={planet.link}
          />
        );
      })}
    </>
  );
};

export default Planets;
