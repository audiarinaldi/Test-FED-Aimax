import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar as NavbarBoot} from 'react-bootstrap';


const Navbar = () => {
    return (
        <NavbarBoot collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <NavbarBoot.Brand href="/">Data</NavbarBoot.Brand>
            <NavbarBoot.Toggle aria-controls="responsive-navbar-nav" />
            <NavbarBoot.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/AddData">Add Data</Nav.Link>
                </Nav>
            </NavbarBoot.Collapse>
        </Container>
        </NavbarBoot>
     );
}
 
export default Navbar;