import React from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap"
import ImageSearch from "./ImageSearch";

interface Props {
  onSubmit: (val: string) => void;
}

export const NavBar: React.FC<Props> = ({onSubmit}) => {

  return (
    <Navbar sticky="top" expand="lg" bg="dark" variant="dark">
      <Container className="nav-bar-container">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Form>
          <ImageSearch onSubmit={onSubmit} />
        </Form>
      </Container>
    </Navbar>
  );
}

export default React.memo(NavBar);