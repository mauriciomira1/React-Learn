import Title from "../Title";

export default function CardUser(props) {
  return (
    <>
      <img className="photo" src={props.photoUser} alt="User" />
      <Title>
        <span>{props.userName}</span>
        <button>
          <a
            href="https://www.instagram.com/mauriciomira1/"
            rel="noreferrer"
            target="_blank"
          >
            Seguir
          </a>
        </button>
      </Title>
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
