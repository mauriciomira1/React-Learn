import PropTypes from "prop-types";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/descriptionWithLink";
import React from "react";

async function getSatellites(id) {
  let response = await fetch(`http://localhost:5173/public/${id}.json`);
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

  componentDidMount() {
    getSatellites(this.props.id).then((data) => {
      this.setState(() => ({
        satellites: data["satellites"],
      }));
    });
  }

  render() {
    /*     let title;
    if (this.props.titleWithUnderline)
      title = (
        <h4>
          <u>{this.props.planetName}</u>
        </h4>
      );
    else title = <h4>{this.props.planetName}</h4>; */

    return (
      <>
        <h4>{this.props.planetName}</h4>
        <DescriptionWithLink
          description={this.props.description}
          link={this.props.link}
        />
        <br />
        <GrayImg
          img_url={this.props.img_url}
          planetName={this.props.planetName}
        />
        <br />
        <h4>Satélites</h4>
        <ul>
          {this.state.satellites.map((satellite, index) => (
            <li key={index}>{satellite.name}</li>
          ))}
        </ul>
        <hr />
      </>
    );
  }
}
export default Planet;

Planet.propTypes = {
  planetName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img_url: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  /*   titleWithUnderline: PropTypes.bool.isRequired, */
  id: PropTypes.string.isRequired,
};
