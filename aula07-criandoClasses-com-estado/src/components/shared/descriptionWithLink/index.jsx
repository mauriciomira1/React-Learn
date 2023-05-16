import PropTypes from "prop-types";

export default function DescriptionWithLink(props) {
  return (
    <>
      <p>{props.description}</p>
      <a href={props.link} target="_blank" rel="noreferrer">
        {props.link}
      </a>
    </>
  );
}

DescriptionWithLink.propTypes = {
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
