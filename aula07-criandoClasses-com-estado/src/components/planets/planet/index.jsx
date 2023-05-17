/* import PropTypes from "prop-types"; */
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/descriptionWithLink";
import React from "react";

async function getSatellites(planetName) {
  let response = await fetch(`http://localhost:5173/public/${planetName}.json`);
  let data = await response.json();
  return data;
}
class Planet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      satellites: [],
    };
  }

  satellitesDidMount(planetName) {
    getSatellites(planetName).then((data) => {
      this.setState(() => ({
        satellites: data["satellites"],
      }));
    });
  }

  render() {
    const satellites = this.state.satellites.map((satellite) => {
      // eslint-disable-next-line react/jsx-key
      return <li>{satellite}</li>;
    });
    let title;
    if (props.titleWithUnderline)
      title = (
        <h4>
          <u>{props.planetName}</u>
        </h4>
      );
    else title = <h4>{props.planetName}</h4>;

    return (
      <>
        {title}
        <DescriptionWithLink
          description={props.description}
          link={props.link}
        />
        <br />
        <h4>Satélites</h4>
        <ul>{satellites}</ul>
        <hr />
        <GrayImg
          colorImg={props.colorImg}
          img_url={props.img_url}
          planetName={props.planetName}
          clickOnPlanet={() => props.clickOnPlanet(props.planetName)}
        />
      </>
    );
  }
}
export default Planet;

/* Planet.propTypes = {
  planetName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img_url: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  clickOnPlanet: PropTypes.func.isRequired,
  colorImg: PropTypes.string.isRequired,
  titleWithUnderline: PropTypes.string.isRequired,
}; */
