import React from "react";
import { Navbar,NavDropdown, Nav, Button, FormControl, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "../../../contexts/auth";
import { Link } from "react-router-dom";

export default () => {
  const { user, signOut } = useAuth();

  function handleLogOut() {
    signOut();
  }

  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">{user.name}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
        <Nav.Link><Link to="/products">Produtos</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className="mr-sm-2">
        Logado com: <a href="#login">{user.name}</a>
      </Navbar.Text>
      <Button onClick={handleLogOut} variant="outline-info">Deslogar</Button>
    </Navbar.Collapse>
  </Navbar>
  );
};
