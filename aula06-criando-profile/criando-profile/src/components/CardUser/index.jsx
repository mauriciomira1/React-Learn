/* eslint-disable react/prop-types */
import { useState } from "react";
import Title from "../Title";
import CardSection from "./CardSection";
import Social from "./Social";
import styles from "./styles.module.css";

export default function CardUser(props) {
  const [followButtonText, setFollowButtonText] = useState("Follow");
  function handleClick() {
    /* alert("Agora você está seguindo!"); */
    setFollowButtonText("Following");
  }

  return (
    <>
      <img className="photo" src={props.photoUser} alt="User" />
      <Title>
        <span>{props.name}</span>
        <button className={styles.followButton} onClick={handleClick}>
          {" "}
          {followButtonText}
        </button>
      </Title>
      <CardSection> {props.hardSkills}</CardSection>
      <CardSection>{props.phoneNumber}</CardSection>
      <CardSection>{props.email}</CardSection>
      <CardSection
        className="social"
        id="links-section"
        data-test="some value"
        aria-label="social-links"
      >
        <Social link={props.gitHub}>GitHub</Social>
        <Social link={props.linkedIn}>LinkedIn</Social>
        <Social link={props.instagram}>Instagram</Social>
      </CardSection>
    </>
  );
}
