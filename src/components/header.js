import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import logo from '../Image/logo.png';
import { Link } from 'react-router-dom'; // Import Link

function HeadNav() {
  return (
    <>
      {/* Navigation bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              width="130"
              height="50"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navigation links */}
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/About">About Us</Nav.Link>
              <Nav.Link as={Link} to="/Productlist">Product</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Admin</Nav.Link>
            </Nav>
            {/* Login button */}
            <div className="text-end">
              <Link
                to="/login"
                role="button"
                className="btn btn-custom-outline-dark"
                onMouseEnter={(e) => (e.target.style.color = '#fff')}
                onMouseLeave={(e) => (e.target.style.color = 'yellow')}
              >
                Login
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeadNav;
