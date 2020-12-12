import '../CSS/App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {NavDropdown,Navbar,Nav} from 'react-bootstrap';



// or less ideally



const Header = (props, bool) => {

        return ( <header>

            <Navbar  bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="/">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About me</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/resume">Resume</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </header>)
        }
        export default Header;