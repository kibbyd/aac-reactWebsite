import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
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

  return (
    <Router>
      <React.Fragment>
        <Navbar bg="light" expand="md" sticky="top" >
          <Navbar.Toggle aria-controls="mainNav" className="ml-auto"/>
          <Navbar.Collapse id="mainNav">
            <Nav className="mx-auto">
              <LinkContainer exact to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Tournaments">
                  <LinkContainer exact to="/Schedule">
                    <NavDropdown.Item>Schedule</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer exact to="/Register">
                    <NavDropdown.Item>Register</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer exact to="/Rules">
                    <NavDropdown.Item>Rules</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer exact to="/Gallery">
                    <NavDropdown.Item>Gallery</NavDropdown.Item>
                  </LinkContainer>
              </NavDropdown>
              <NavDropdown title="Community Events">
                <LinkContainer exact to="/CommunityEvents">
                  <NavDropdown.Item>Schedule</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer exact to="/Shop">
                <Nav.Link>Shop</Nav.Link>
              </LinkContainer>
              <LinkContainer exact to="/Sponsor">
                <Nav.Link>Sponsor</Nav.Link>
              </LinkContainer>
              <LinkContainer exact to="/Contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </React.Fragment>

    <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/Schedule" component={Schedule} />
          <Route path="/Rules" component={Rules} />
          <Route path="/Register" component={Register} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/CommunityEvents" component={CommunityEvents} />  
          <Route path="/Sponsor" component={Sponsor} />
          <Route path="/Shop" component={Shop} />       
          <Route path="/Contact" component={Contact} />
        </Switch>
    </Router>
  );
}


export default Navigation;