import React from 'react';
import Nav from 'react-bootstrap/Nav';
import "./Header.css";
import mvIMG from '../images/mv.png'

function Header() { 
  return (
<>
  <Nav className="justify-content-center" activeKey="/about">
    <Nav.Item>
      <Nav.Link href="/about"><img src={mvIMG} id="logo" height="35px" width="35px" alt=""
          /></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/contact" eventKey="link-1">Contact</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/portfolio" eventKey="link-2">Portfolio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/resume" eventKey="link-2">Resume</Nav.Link>
    </Nav.Item>
    
  </Nav>
  </>
  )
}

export default Header