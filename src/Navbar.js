import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { useNavigate } from 'react-router-dom';

 function NavScrollExample() {
    const navigate = useNavigate();

  const gotosignin = () => {
    navigate('/Signin');}
    const gotosignup = () => {
        navigate('/Signup');
  }
  const gotocreateblog = () => {
    navigate('/Createblog');
}
const gotocontactus = () => {
  navigate('/Contactus');
}
const gotoaboutus = () => {
  navigate('/Aboutus');
}

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
      <Navbar.Brand href="/home" style={{ color: '#D6A0FF', textShadow: '0 0 10px #D6A0FF, 0 0 20px #D6A0FF, 0 0 30px #D6A0FF, 0 0 40px #D6A0FF, 0 0 50px #D6A0FF, 0 0 60px #D6A0FF, 0 0 70px #D6A0FF' }}>WritEra</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto p-3 my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="/home" className="text-light">Home</Nav.Link>
            <NavDropdown title="What's New" id="navbarScrollingDropdown" className="text-light">
                <NavDropdown.Item href="/home">New Blogs</NavDropdown.Item>
                <NavDropdown.Item href="/home" >Most Popular</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/home">Newest Blogs</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  className="text-light" onClick={gotocreateblog}>Create Blog</Nav.Link>
            <Nav.Link  className="text-light" onClick={gotocontactus}>Contact Us</Nav.Link>
            <Nav.Link  className="text-light" onClick={gotoaboutus}>About Us</Nav.Link>
          </Nav>
  
          <Nav>
            <Button variant="light" className="ms-2 p-2 m-2" onClick={gotosignup}>Sign Up</Button>
            <Button variant="light" className="ms-2 p-2 m-2" onClick={gotosignin}>Sign In</Button>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavScrollExample;