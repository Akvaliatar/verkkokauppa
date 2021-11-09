import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsCart4 } from "react-icons/bs";
import Logo from "../img/logo.png";

export default function NavBar() {
  return (
    <Container fluid>
      <Container>
        <Row>
            <Col className="kieli">
              <a href="" className="FI">
                FI
              </a>
              <a>|</a>
              <a href="" className="EN">
                EN
              </a>
            </Col>
            <Col>
              <figure>
                <Link to="">
                  <img src={Logo}/>
                </Link>
              </figure>
            </Col>
            <Col>
              <p>
                <BsCart4 />
              </p>
            </Col>
        </Row>
      </Container>
      <Navbar className="navbar" expand="lg">
      <Container>
        <Row>
        
          <Col xs={12}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/aboutus">Meistä</Nav.Link>
                <Nav.Link href="/services">Palvelut</Nav.Link>
                <Nav.Link href="/shop">Verkkokauppa</Nav.Link>
                <Nav.Link href="/about">Omat tiedot</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
      </Navbar>
    </Container>
  );
}

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>;
