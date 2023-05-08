export default function CardUser(props) {
  return (
    <>
      <img className="photo" src={props.photoUser} alt="User" />
      <h1 className="fullname">{props.userName}</h1>
      <p className="text">{props.hardSkills}</p>

      <p className="text">{props.phoneNumber}</p>

      <p className="text">{props.email}</p>

      <div className="social">
        <a href={props.gitHub} target="_blank">
          GitHub
        </a>
        <a href={props.linkedIn} target="_blank">
          LinkedIn
        </a>
        <a href={props.instagram} target="_blank">
          Instagram
        </a>
      </div>
    </>
  );
}
