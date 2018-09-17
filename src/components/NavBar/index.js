import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import loginImg from "./logosvg.svg"


class NavbarInstance extends Component {
  
  render() {
    return (
      <Navbar className="nav-container" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">COMPANY NAME</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#dashboard" className="nav-link">
              DASHBOARD
            </NavItem>
            <NavItem eventKey={2} href="#project">
              PROJECT
            </NavItem>
            <NavItem eventKey={3} href="#team">
              TEAM
            </NavItem>
            <NavItem eventKey={4} href="#company">
              COMPANY
            </NavItem>
            <NavItem eventKey={4} href="#" className="test-style" />
            <NavDropdown
              eventKey={6}
              title={
                <div className="image-container">
                  <img className="thumbnail-image"
                       src={loginImg}
                       height="40"
                       width="40"
                  />
                </div>
              }
              id="basic-nav-dropdown"
              noCaret
              className="nav-dropdown-container"
            >
              <MenuItem eventKey={3.1} className="item">MY PROFILE</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.2}>MY PROJECTS</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>NOTIFICATIONS</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>TASKS</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>HELP</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>LOGOUT</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarInstance
