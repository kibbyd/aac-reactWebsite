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
import Main from '../main/main/Main';
import Schedule from '../schedule/Schedule';
import Register from '../register/Register';
import Rules from '../rules/Rules';
import Gallery from '../gallery/Gallery';
import CommunityEvents from '../communityEvents/CommunityEvents';
import Sponsor from '../sponsor/Sponsor';
import Shop from '../shop/Shop';
import Contact from '../contact/Contact';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
    <div className="navigation sticky-top">
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
                <Link to="/Schedule"><DropdownItem>
                  Schedule
                </DropdownItem></Link>
                <Link to="/Register"><DropdownItem>
                  Register
                </DropdownItem></Link>
                <Link to="/Rules"><DropdownItem>
                  Rules
                </DropdownItem></Link>
                <Link to="/Gallery"><DropdownItem>
                  Gallery
                </DropdownItem></Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Community Events
              </DropdownToggle>
              <DropdownMenu right>
              <Link to="/CommunityEvents"><DropdownItem>
                  Schedule
                </DropdownItem></Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
            <Link to="/Shop"><NavLink>Shop</NavLink></Link>
            </NavItem>
            <NavItem>
            <Link to="/Sponsor"><NavLink>Sponsor</NavLink></Link>
            </NavItem>
            <NavItem>
            <Link to="/Contact"><NavLink>Contact</NavLink></Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

    <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/Schedule">
            <Schedule />
          </Route>
          <Route path="/Rules">
            <Rules />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Gallery">
            <Gallery />
          </Route>
          <Route path="/CommunityEvents">
            <CommunityEvents />
          </Route>   
          <Route path="/Sponsor">
            <Sponsor />
          </Route> 
          <Route path="/Shop">
            <Shop />
          </Route>            
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
    </Router>
  );
}


export default Navigation;