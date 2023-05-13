import acordesImg from "../../../assets/generic/acordes.svg";
import faleConoscoImg from "../../../assets/generic/fale-conosco.svg";
import colaboreImg from "../../../assets/generic/fale-conosco.svg";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#">
              <img src={acordesImg} alt="Acordes" /> Acordes
            </a>
          </li>
          <li>
            <a href="#">
              <img src={acordesImg} alt="Acordes" /> Acordes
            </a>
          </li>
          <li>
            <a href="#">
              <img src={acordesImg} alt="Acordes" /> Acordes
            </a>
          </li>
        </ul>
      </nav>
      ;
    </>
  );
}
