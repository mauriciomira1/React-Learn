import React from "react";
import Planet from "./planet/";

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
class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
    };
  }

  componentDidMount() {
    getPlanets().then((data) => {
      this.setState(() => ({
        planets: data["planets"],
      }));
    });
  }

  removeLast = () => {
    let new_planets = [...this.state.planets];
    new_planets.pop();
    this.setState(() => ({
      planets: new_planets,
    }));
  };

  duplicateLastPlanet = () => {
    let lastPlanet = this.state.planets[this.state.planets.length - 1];
    this.setState(() => ({
      planets: [...this.state.planets, lastPlanet],
    }));
  };

  render() {
    return (
      <>
        <h3>Planet list</h3>
        <button onClick={this.removeLast}>Remove last</button>
        <br />
        <button onClick={this.duplicateLastPlanet}>Duplicate last</button>
        {this.state.planets.map((planet) => {
          return (
            <Planet
              key={planet.planetName}
              planetName={planet.name}
              img_url={planet.img_url}
              description={planet.description}
              link={planet.link}
            />
          );
        })}
      </>
    );
  }
}
export default Planets;
