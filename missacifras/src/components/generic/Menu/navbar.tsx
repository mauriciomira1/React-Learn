import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavMenu() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" href="#">
          ACORDES
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item" href="#">
          AFINADOR
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" href="#">
          FALE CONOSCO
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">MINHA CONTA</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">TROCAR SENHA</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">PROBLEMAS</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">CONFIGURAÇÕES</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

export default NavMenu;
