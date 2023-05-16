import Planet from "./planet/";

function clickOnPlanet(name) {
  console.log(`Clicou no planeta ${name}`);
}

function verifyColor() {
  if (colorImg === ".gray-img") colorImg = ".color-img";
  else colorImg = ".gray-img";
}

export default function Planets() {
  return (
    <>
      <h3>Planet list</h3>
      <button onClick={verifyColor}>P&B</button>
      <Planet
        planetName="Mercúrio"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/420px-Mercury_in_color_-_Prockter07-edit1.jpg"
        description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar."
        link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
        clickOnPlanet={clickOnPlanet}
        titleWithUnderline={true}
      />
      <Planet
        planetName="Marte"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/280px-OSIRIS_Mars_true_color.jpg"
        description="Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem a divindade romana da guerra, muitas vezes é descrito como o Planeta Vermelho, porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada."
        link="https://pt.wikipedia.org/wiki/Marte_(planeta)"
        clickOnPlanet={clickOnPlanet}
      />
    </>
  );
}
