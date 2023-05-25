/* eslint-disable react/prop-types */
const Social = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
};

export default Social;
