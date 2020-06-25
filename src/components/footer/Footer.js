import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    const currYear = new Date().getFullYear();
    return(        
        <footer sticky="bottom">
          <Container fluid>
            <Row className="pt-2">
              <Col>
                <h2 className="text-white text-center pr-3" data-toggle="tooltip" data-placement="top" title="Click Facebook Icon">Join our Group <a class="btn btn-social-icon btn-facebook mb-1" target="_blank"
                href="https://www.facebook.com/groups/AACatfish/" rel="noopener noreferrer"><i className="fa fa-facebook"/></a></h2>
              </Col>
            </Row>            
            
            <Row id="signature" className="bg-dark py-2">
              <Col className="text-center pt-2">
                <h6 className="text-white">Copyright © {currYear} | All rights reserved | Delivered by <a href="https://github.com/kibbyd" target="_blank" rel="noopener noreferrer" id="milkMan">The Milkman</a><img src={require("../../assets/images/milkBottle.png")} height="20px" alt="milk bottle" className="mb-1"/>
                </h6>
              </Col>
            </Row>		
          </Container>		
        </footer>
    );
}

export default Footer;