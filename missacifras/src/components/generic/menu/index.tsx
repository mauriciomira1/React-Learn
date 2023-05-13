import Navbar from "./navbar";

export default function Menu(props) {
  return (
    <>
      <nav id="navBar">
        <img id="logo" src={props.logo} alt="Logotipo" />
        <form id="searchArea" action="" name="search" autoComplete="off">
          <input type="text" name="" id="" />
          <button type="submit">
            <img src={props.searchLogo} id="searchLogo" alt="Logotipo" />
          </button>
        </form>
      </nav>
      <Navbar />
    </>
  );
}

<>
  {/*       {["lg"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={props.logo} id="logo" alt="Logotipo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <form
                  id="searchArea"
                  action=""
                  name="search"
                  autoComplete="off"
                >
                  <input type="text" name="" id="" />
                  <button type="submit">
                    <img
                      src={props.searchLogo}
                      id="searchLogo"
                      alt="Logotipo"
                    />
                  </button>
                </form>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Acordes</Nav.Link>
                  <Nav.Link href="#action1">Afinador</Nav.Link>
                  <Nav.Link href="#action2">Fale Conosco</Nav.Link>
                  <Nav.Link href="#action2">Colabore</Nav.Link>
                  <NavDropdown
                    title={<img src={props.userLogo} id="userLogo"></img>}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} */}
</>;
