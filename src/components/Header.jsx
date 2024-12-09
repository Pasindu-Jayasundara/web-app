import {Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";


function Header() {
  return (
    <>
    <Navbar expand="lg" style={{background: 'rgba(255, 255, 255, 0.32)', position:"relative",zIndex:50}}>
      <Container fluid>
        <Navbar.Brand>
          <Image alt="logo" src="../../public/logo.png" width={30} roundedCircle /> 
          <Link className="fs-6 ms-3 text-decoration-none" style={{color:'rgba(215, 0, 0, 0.73)'}} to="/">Let&apos;s Eat</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-lg-0 ms-5"
            navbarScroll
          >
            <Nav.Link href="/shop" style={{color:'rgba(215, 0, 0, 0.73)'}} >Shop</Nav.Link>
            <Nav.Link href="/cart" style={{color:'rgba(215, 0, 0, 0.73)'}} >Cart</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              className="me-2"
              aria-label="Search"
              style={{color:'rgba(215, 0, 0, 0.73)',backgroundColor:'white',border:'1px solid rgba(215, 0, 0, 0.73)'}}
            />
            <Button style={{color:'rgba(215, 0, 0, 0.73)',backgroundColor:'white',border:'1px solid rgba(215, 0, 0, 0.73)'}} >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Outlet />
    </>
  );
}

export default Header;
