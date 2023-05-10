import NavMenu from "./navbar";

export default function Menu(props: any) {
  return (
    <>
      <div id="logo">
        <img src={props.logo} alt="Logotipo" />
      </div>
      <NavMenu />
    </>
  );
}

{
  /*       <div id="search">
        <img src={props.searhIcon} alt="Pesquisa" id="searchIcon" />
        <input
          type="text"
          name="inputSearch"
          id=""
          autoComplete="off"
          placeholder="Qual música você vai louvar hoje?"
        />
      </div>
      <div id="navbar"></div> */
}
