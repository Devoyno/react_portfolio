import React from 'react';
import Nav from 'react-bootstrap/Nav';
import "./style.css";

function Header() { 
  return (
<>
  <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home"><img src={"/logo-mv.png"} id="logo" height="35px" width="35px"
          /></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Contact</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Portfolio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Resume</Nav.Link>
    </Nav.Item>
    
  </Nav>
  </>
  )
}

export default Header