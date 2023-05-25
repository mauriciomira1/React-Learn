/* eslint-disable react/prop-types */
import Title from "../Title";
import CardSection from "./CardSection";
import Social from "./Social";

export default function CardUser(props) {
  return (
    <>
      <img className="photo" src={props.photoUser} alt="User" />
      <Title>
        <span>{props.name}</span>
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
      <CardSection> {props.hardSkills}</CardSection>
      <CardSection>{props.phoneNumber}</CardSection>
      <CardSection>{props.email}</CardSection>

      <div className="social">
        <Social link={props.gitHub}>GitHub</Social>
        <Social link={props.linkedIn}>LinkedIn</Social>
        <Social link={props.instagram}>Instagram</Social>
      </div>
    </>
  );
}
