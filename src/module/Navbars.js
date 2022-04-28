import { Navbar } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import resolution from './Resolution.js'
import React, { useState } from 'react';



function Navbars() {
    const [url, setUrl] = useState('')
  

  
    return (
    
        <Navbar collapseOnSelect expand="lg" variant="dark" className="Barra " >
            <Container>
              
                <Navbar.Brand  className="border" href="#home"> <span className="text-uppercase etiqueta"> This Interior</span> </Navbar.Brand>
              
              
                <Nav className={ resolution().width <= 992 ? "d-none" : "justify-content-end"} >
                    <Nav.Link className="" href="#home" ><p>Home</p></Nav.Link>
                    <Nav.Link href="#collection"><p>Collection</p></Nav.Link>
                    <Nav.Link href="#about"><p>About</p></Nav.Link>
                    <Nav.Link href="#contact"><p>Contact</p></Nav.Link>
                        
                    </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                   
                >
                    
                    <Offcanvas.Header closeButton closeVariant="white" className="offcanva"  >
                        <Offcanvas.Title id="offcanvasNavbarLabel" ></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="offcanva" >
                        <Nav className="">
                        
                            <Nav.Link className={url === '#home' ? "active" : ""} href="#home" onClick={  () => {setUrl('#home') }} ><p>Home</p></Nav.Link>
                            <Nav.Link className={url === '#collection' ? "active" : ""} href="#collection" onClick={() => { setUrl('#collection') }}><p>Collection</p></Nav.Link>
                            <Nav.Link className={url === '#about' ? "active" : ""} href="#about" onClick={() => { setUrl('#about') }}><p>About</p></Nav.Link>
                            <Nav.Link className={url === '#contact' ? "active" : ""} href="#contact" onClick={() => { setUrl('#contact') }}><p>Contact</p></Nav.Link>
                        </Nav>
                        
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Navbars;
