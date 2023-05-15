import acordesImg from "../../../assets/generic/acordes.svg";
import faleConoscoImg from "../../../assets/generic/fale-conosco.svg";
import colaboreImg from "../../../assets/generic/colabore.svg";
import userImg from "../../../assets/generic/userLogo.png";

export default function Navbar() {
  return (
    <>
      <nav id="navBar">
        <ul>
          <li>
            <a href="#">ACORDES</a>
          </li>
          <li>
            <a href="#">FALE CONOSCO</a>
          </li>
          <li>
            <a href="#">COLABORE</a>
          </li>
          <li>
            <a href="#">
              <img src={userImg} alt="Usuário" id="user" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
