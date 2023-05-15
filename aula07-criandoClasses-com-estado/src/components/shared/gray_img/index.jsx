import "./style.css";

export default function GrayImg(props) {
  return (
    <>
      <img className="gray-img" src={props.img_url} alt={props.name} />
    </>
  );
}
