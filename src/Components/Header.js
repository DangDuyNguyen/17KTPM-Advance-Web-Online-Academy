import React, { useState } from 'react';

import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Row, InputGroup } from 'react-bootstrap';
import './Header.module.css'

function Header() {
const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}


return (
<Navbar bg="light" expand="lg">
<Container >
        <Col xs={1}>
            <Navbar.Brand href="/">Learndemy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Col>
        <Col xs ={1}>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Course" 
                    id="collasible-nav-dropdown" 
                    show={show}
                    onMouseEnter={showDropdown} 
                    onMouseLeave={hideDropdown}
                    >
                        <NavDropdown.Item href="#action/3.1">Web</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Mobile</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Col>
            <Col xs ={7}>  

            <InputGroup >
            <InputGroup.Prepend>
            <Button class='btn btn-primary-outline'><i class="fa fa-search"></i></Button>
            </InputGroup.Prepend>
            

            
            <FormControl
            placeholder="Search"
            aria-describedby="basic-addon1"
            />
  </InputGroup>
        </Col>
        <Col xs ={2}>
            <Button variant="outline-success" href="/login">Login</Button>
        </Col>
</Container>

</Navbar>
);
}

export default Header;
