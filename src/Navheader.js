import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import "./Navheader.css";

export default function Navheader() {
  return (
    <div className="Navheader">
      <Navbar key={"lg"} expand={"lg"} collapseOnSelect>
        <Container fluid>
          <Navbar.Brand href="#">Eliana Pereira</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"lg"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
            placement="end"
            restoreFocus={false}
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 ">
                <Nav.Link href="#projects">My Projects</Nav.Link>
                <Nav.Link href="#about">About Me</Nav.Link>
                <Nav.Link href="#contact">Contact Me</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
