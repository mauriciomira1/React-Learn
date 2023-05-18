import { useState, useEffect } from "react";
/* import PropTypes from "prop-types"; */
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/descriptionWithLink";
/* import Form from "../formPlanet"; */
import FormSatellite from "../formSatellite";

async function getSatellites(id) {
  let response = await fetch(`http://localhost:5173/public/${id}.json`);
  let data = await response.json();
  return data;
}
const Planet = (planet) => {
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    getSatellites(planet.id).then((data) => {
      setSatellites(data["satellites"]);
    });
  }, [planet.id]);

  const addSatellite = (new_satellite) => {
    setSatellites([...satellites, new_satellite]);
  };

  return (
    <>
      <h4>{planet.planetName}</h4>
      <DescriptionWithLink
        description={planet.description}
        link={planet.link}
      />
      <br />
      <GrayImg img_url={planet.img_url} planetName={planet.planetName} />
      <br />
      <h4>Satélites</h4>
      <FormSatellite addSatellite={addSatellite} />
      <ul>
        {satellites.map((satellite, index) => (
          <li key={index}>{satellite.name}</li>
        ))}
      </ul>
      <hr />
    </>
  );
};

export default Planet;

/* Planet.propTypes = {
  planetName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img_url: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}; */
