import React, { useState } from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [fix , setFix] = useState(false)
  const navEffect = () =>{
    if(window.scrollY > 200){
      setFix(true)
    }else{
      setFix(false)
    }
  }
  // bg={(!fix ? 'transparent' : " dark")}
  window.addEventListener('scroll' , navEffect)
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark"  variant="light" className={`fixed-top`}>
      <Container>
        <Navbar.Brand as={Link} to='/' className="text-white fs-2 fw-bold">Strength Coach</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav "
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link as={Link} to="/">
              <NavLink
                className={({ isActive }) => (isActive ? "color" : "color2")}
                to={"/"}
              >
                Home
              </NavLink>
            </Nav.Link>
            
            <Nav.Link as={Link} to="/blog">
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "color" : "color2")}
              >
                Blog
              </NavLink>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "color" : "color2")}
              >
                Contact
              </NavLink>
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "color" : "color2")}
              >
                Login
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
