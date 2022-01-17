import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom'

import menu from '../images/menu.png'

function NavBar() {

  return (
    <Navbar collapseOnSelect className="nav navbar-expand-lg scrolled">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title={<img src={menu} className="menuicon" alt="menu icon" />}>
            <NavDropdown.Item as={NavLink} className="universextended" to="/">Home</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} className="universextended" to="/aboutme">About Me</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} className="universextended" to="/projects">Projects</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar