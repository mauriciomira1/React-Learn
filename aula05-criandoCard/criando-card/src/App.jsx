import BuyButton from "./components/BuyButton";
import Capa from "./components/Capa";
import Description from "./components/Description";
import Title from "./components/Title";

export default function App() {
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
    </div>
  );
}
