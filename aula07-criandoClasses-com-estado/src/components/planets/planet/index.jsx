import PropTypes from "prop-types";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/descriptionWithLink";

export default function Planet(props) {
  const names = ["satA", "satB", "satC", "satD"];
  const satellites = names.map((n) => {
    <li>Satélite {n}</li>;
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
      <DescriptionWithLink description={props.description} link={props.link} />
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

Planet.propTypes = {
  planetName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img_url: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  clickOnPlanet: PropTypes.func.isRequired,
  colorImg: PropTypes.string.isRequired,
  titleWithUnderline: PropTypes.string.isRequired,
};
