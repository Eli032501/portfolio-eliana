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
              <Nav
                className="justify-content-end flex-grow-1 "
                activeKey="/index"
              >
                <Nav.Link href="#projects">My Projects</Nav.Link>
                <Nav.Link href="#about" className="d-none d-md-block">
                  About Me
                </Nav.Link>
                <Nav.Link href="#contact" className="d-block d-lg-none">
                  Contact Me
                </Nav.Link>{" "}
                <Nav.Link
                  href="https://www.dropbox.com/scl/fo/5nw4nty5tfs2kpvkry3um/ABgDINgE0nm7Rz0Cr3IRHnQ?rlkey=wrdhrjf443zc9swth7z0by07e&e=2&st=3ajbl9t8&dl=0"
                  target="_blank"
                  rel="noreferrer"
                  className="d-block d-md-none"
                >
                  Downoald CV
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
