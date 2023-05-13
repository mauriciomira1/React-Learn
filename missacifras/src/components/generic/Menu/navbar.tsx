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
            <a href="#">
              <img src={acordesImg} alt="Acordes" />
              ACORDES
            </a>
          </li>
          <li>
            <a href="#">
              <img src={faleConoscoImg} alt="Fale conosco" />
              FALE CONOSCO
            </a>
          </li>
          <li>
            <a href="#">
              <img src={colaboreImg} alt="Colabore" />
              COLABORE
            </a>
          </li>
          <li>
            <a href="#">
              <img src={userImg} alt="Usuário" />
            </a>
          </li>
        </ul>
      </nav>
      ;
    </>
  );
}
