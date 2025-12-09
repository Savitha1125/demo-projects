         

import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import {  Row, Col } from 'react-bootstrap';
import Image  from './assets/about-img.png';

function NavScrollExample() {
  return (
    <>
      <Navbar expand="lg" className="bg">
        <Container>
          <Navbar.Brand className="navitem" href="#">COFFO</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
              <Nav.Link className='#home a1 active' href="#action1">HOME</Nav.Link>
              <Nav.Link className='#about a' href="#action1">ABOUT</Nav.Link>
              <Nav.Link className='#coffees a' href="#action1">COFFEES</Nav.Link>
              <Nav.Link className='#href a' href="#action1">SHOP</Nav.Link>
              <Nav.Link className='#blog a' href="#action1">BLOG</Nav.Link>
              <Nav.Link className='#contact a' href="#action1">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
  <Carousel interval={2000}>
  <Carousel.Item>
    <div className="banner">
    <div className="container">
    <div className="row">
    <div className="col-md-12 text-left banner_text">
        <h1>Coffee <br /> Shop</h1>
        <p>
         more-or-less normal distribution of letters, as opposed to using
        </p>
    <div className="d-flex gap-2 mt-3">
        <Button variant="danger" size="lg">ABOUT US</Button>
        <Button variant="light" size="lg">CALL NOW</Button>
    </div>
    </div>
    </div>
    </div>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div className="banner">
    <div className="container">
    <div className="row">
    <div className="col-md-12 text-left banner_text">
        <h1>Coffee <br /> Shop</h1>
        <p>
            more-or-less normal distribution of letters, as opposed to using
        </p>
    <div className="d-flex gap-2 mt-3">
        <Button variant="danger" size="lg">ABOUT US</Button>
        <Button variant="light" size="lg">CALL NOW</Button>
    </div>
    </div>
    </div>
    </div>
    </div>
  </Carousel.Item>
</Carousel> 

    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <h1>ABOUT OUR SHOP</h1>
          <br />
          <h3>Coffee distribution</h3>
          <br />
          <p>
            has a more-or-less normal distribution of letters, as opposed to
            using 'Content here, content here', making it look like readable
            English. Many desktop publishing packages and web page
            editors have a more-or-less normal distribution of letters, as
            opposed...
          </p>
          <Button className='button'>Read More</Button>
        </Col>

        <Col md={6} className='pic '>
          
          <img src={Image} alt="About" className='img-fluid' />
        </Col>
      </Row>
    </Container> 
    </>
  );
}

export default NavScrollExample;
