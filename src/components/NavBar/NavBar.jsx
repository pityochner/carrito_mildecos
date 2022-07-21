import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'


const NavBar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/" id="title">            
            MILDECOS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/productos/">Productos</Nav.Link>
              <Nav.Link href="contacto">Contacto</Nav.Link>

              <CartWidget />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;