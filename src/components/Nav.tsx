import React from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap"
import ImageSearch from "./ImageSearch";

export const NavBar = () => {
  return (
    <Navbar sticky="top" expand="lg" bg="dark" variant="dark">
      <Container className="nav-bar-container">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Form>
          <ImageSearch />
        </Form>
      </Container>
    </Navbar>
  );
}

export default React.memo(NavBar);