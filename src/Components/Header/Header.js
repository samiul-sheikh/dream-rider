import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar>
                <Navbar.Brand href="#home">Dream Rider</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav variant="pills">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/ridesInfo">Destination</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/login">Sign in</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/login">Sign up</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;