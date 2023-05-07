import BuyButton from "../BuyButton";
import Capa from "../Capa";
import Description from "../Description";
import Title from "../Title";

export default function Card(props) {
  return (
    <div className="card">
      <div>
        <Capa />
      </div>
      <div className="poster-description">
        <Title />
        <Description />
        <BuyButton />
      </div>
    </div> /* Poderia usar o <>elementos</> para não usar <div>. Chama-se Fragment */
  );
}
