import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from '../homePage/Main';
import Schedule from '../pages/Schedule';
import Rules from '../pages/Rules';
import Contact from '../pages/Contact';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
    <div className="">
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} className="ml-auto"/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
            <Link to="/"><NavLink>Home</NavLink></Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Tournaments
              </DropdownToggle>
              <DropdownMenu right>
                <Link to="/schedule"><DropdownItem>
                  Schedule
                </DropdownItem></Link>
                <DropdownItem>
                  Register
                </DropdownItem>
                <Link to="/rules"><DropdownItem>
                  Rules
                </DropdownItem></Link>
                <DropdownItem>
                  Gallery
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Community Events
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Schedule
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="#">Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Sponsor</NavLink>
            </NavItem>
            <NavItem>
            <Link to="/contact"><NavLink>Contact</NavLink></Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

    <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/rules">
            <Rules />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
    </Router>
  );
}


export default Navigation;