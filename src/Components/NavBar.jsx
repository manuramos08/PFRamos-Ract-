import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../assets/logo.png"
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <Navbar expand="lg" className="custom-navbar" variant="dark">
            <Container className="divContainer">
                <Navbar.Brand href="#home" className="logo-nav">
                    <Link to={"/"}> <img src={Logo} alt="" className="logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="navlink" href="#home">
                            <Link to={"/category/alguicidas"}>
                                Alguicida
                            </Link>
                        </Nav.Link>
                        <Nav.Link className="navlink" href="#link">
                            <Link to={"/category/clarificadores"}>
                                Clarificadores
                            </Link>
                        </Nav.Link>
                        <NavDropdown title="Cloro" id="basic-nav-dropdown" className="custom-dropdown, navlink" menuVariant="dark">
                            <NavDropdown.Item className="navlink" href="#action/3.1">
                                <Link to={"/category/cloropastillas"}>
                                    En pastillas
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="navlink" href="#action/3.2">
                                <Link to={"/category/clorogranulado"}>
                                    Granulado
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="navlink" href="#home">
                            <Link to={"/category/reguladorph"}>
                                Regulador de Ph
                            </Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes"><CartWidget /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;