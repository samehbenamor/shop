import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
export const NavBar = () => {
  const [scrolled, seScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // home, skills, projects, contact

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <>
      <Navbar fixed="top" expand="lg">
        <Container>
        <Navbar.Brand className="navbar-logo" href="#home">
        Logo
        </Navbar.Brand>
        <Navbar.Collapse>
         
          
            <Nav.Link className="navbar-link men">Men</Nav.Link>
            
            
            <Nav.Link className="navbar-link women">Women</Nav.Link>
            <div className="left-section-nav">
            <Nav.Link className="navbar-link cart">My cart</Nav.Link>
            <Nav.Link className="navbar-link login">Login</Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
    </>
  );
};
