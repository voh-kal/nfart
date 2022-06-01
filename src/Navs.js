import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navs = (props) => {
    return (
        <Navbar expand="lg">
        <Container >
            <Navbar.Brand href="#">NFTART</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="my-2 my-lg-0" style={{ maxHeight: '150px', fontSize: "25px", marginLeft: "Auto",  }} navbarScroll >

                
                    <Nav > <Link to="/" style={{ color: props.color, marginLeft: '10px', textDecoration: "none" }}>Home</Link></Nav>
                    <Nav ><Link to="/collections" style={{color: props.color, marginLeft: '10px', textDecoration: "none" }}>Collection</Link></Nav>
                    {/* <NavDropdown title="Browse" id="navbarScrollingDropdown" style={{color: props.color, marginLeft: '10px', textDecoration: "none" }}>
                        <NavDropdown.Item >Action</NavDropdown.Item>
                        <NavDropdown.Item >Another action</NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav><Link to="/" style={{color: props.color, marginLeft: '10px', textDecoration: "none" }}>Category</Link>  </Nav>
                    {/* <Button variant="success">Start Collecting</Button> */}
                </Nav>
               
            </Navbar.Collapse>


        </Container>
    </Navbar>
    )
}

export default Navs
