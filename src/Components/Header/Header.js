import React, { useState } from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="light"
      className={`fixed-top`}
    >
      {/* container start  */}
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white fs-2 fw-bold">
          Strength Coach
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav "
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link as={Link} to="/" className="color2">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/blog" className="color2">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="color2">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutme" className="color2">
              About Me
            </Nav.Link>
            {!user ? (
              <Nav.Link as={Link} to="/login" className="color2">
                Login
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login" onClick={logOut} className="color2">
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
