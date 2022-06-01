import React from 'react'
import { Navbar, Nav, NavDropdown, Container,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Container >
                    <Navbar.Brand href="#">NFTART</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="my-2 my-lg-0" style={{ maxHeight: '150px', fontSize: "25px", marginLeft: "Auto" }} navbarScroll >
                            <Nav.Link style={{ color: 'white' }}>Home </Nav.Link>
                            <Nav.Link style={{ color: 'white' }}> <Link to="/Collection">Collections</Link></Nav.Link>
                            <NavDropdown title="Browse" id="navbarScrollingDropdown" style={{ color: 'white' }}>
                                <NavDropdown.Item >Action</NavDropdown.Item>
                                <NavDropdown.Item >Another action</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link style={{ color: 'white' }}> Category </Nav.Link>
                            <Button variant="success">Start Collecting</Button>
                        </Nav>

                    </Navbar.Collapse>


                </Container>
            </Navbar>
        </div>
    )
}

export default Navbar
