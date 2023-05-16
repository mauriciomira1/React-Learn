import PropTypes from "prop-types";
import "./style.css";

export default function GrayImg(props) {
  return (
    <>
      <img
        className="color-img"
        src={props.img_url}
        alt={props.planetName}
        onClick={props.clickOnPlanet}
      />
    </>
  );
}

GrayImg.propTypes = {
  img_url: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
  clickOnPlanet: PropTypes.func.isRequired,
  colorImg: PropTypes.string.isRequired,
};
