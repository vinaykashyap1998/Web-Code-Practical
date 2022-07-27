import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Navbar.css'



export default class Navbars extends React.Component {
    render() {
        return (
            <>
                <Navbar className="customnav " >
                    <Container>
                        <Navbar.Brand href="#Webcode">Institiute Of Webcode Education</Navbar.Brand>
                        <Nav className="me-auto ">
                            <Nav.Link href="#Home">Home</Nav.Link>
                            <Nav.Link href="#Users">Users</Nav.Link>
                            <Nav.Link href="#About">About</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}