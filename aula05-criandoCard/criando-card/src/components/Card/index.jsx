import BuyButton from "../BuyButton";
import Capa from "../Capa";
import Description from "../Description";
import Title from "../Title";
import starPoster from "../../assets/star-wars.jpg";
import esbPoster from "../../assets/esb-poster.jpg";
import rotjPoster from "../../assets/rotj-poster.jpg";

export default function Card() {
  return (
    <>
      <div className="card">
        <div>
          <Capa posterImg={starPoster} />
        </div>
        <div className="poster-description">
          <Title title="Pôster: Star Wars (1989)" />
          <Description />
          <BuyButton />
        </div>
      </div>

      <div className="card">
        <div>
          <Capa posterImg={esbPoster} />
        </div>
        <div className="poster-description">
          <Title title="Pôster: Procurando Nemo (2002)" />
          <Description />
          <BuyButton />
        </div>
      </div>

      <div className="card">
        <div>
          <Capa posterImg={rotjPoster} />
        </div>
        <div className="poster-description">
          <Title title="Pôster: Procurando Nemo (2002)" />
          <Description />
          <BuyButton />
        </div>
      </div>
    </>
  );
}
