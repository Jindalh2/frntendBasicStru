import React, { useState } from 'react';
import {
  
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/"><h2 className="text-danger">Technology Stack</h2>
        <p>Where Future Is Created</p></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        
          <Nav className="mr-auto" navbar>
            <NavItem >
              <NavLink href="/">Home</NavLink>
            </NavItem>
            < NavItem >
              <NavLink href="/about">About Us</NavLink>
            </NavItem >
            <NavItem >
              <NavLink href="/contact">Contact Us</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="/blogs">Blogs</NavLink>
            </NavItem>
             </Nav>
             
      </Navbar>
    </div>
  );
}

export default Menu;