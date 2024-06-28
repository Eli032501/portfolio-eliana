import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import "./Navheader.css";

export default function Navheader() {
  return (
    <div className="Navheader">
      <Navbar expand={false} className="">
        <Container fluid>
          <Navbar.Brand href="#">Eliana Pereira</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">My Projects</Nav.Link>
                <Nav.Link href="#action2">About Me</Nav.Link>
                <Nav.Link href="#action2">Contact Me</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
