import PropTypes from "prop-types";
import "./style.css";

export default function GrayImg(props) {
  return (
    <>
      <img className="color-img" src={props.img_url} alt={props.planetName} />
    </>
  );
}

GrayImg.propTypes = {
  img_url: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};
