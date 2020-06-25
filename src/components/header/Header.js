import React from 'react'; 
import './Header.css';
import { Row, Col, Container } from 'react-bootstrap';

const Header = () => {
    return(
            <header>
                <Container fluid className="head-container">
                    <Row className="d-flex justify-content-center">
                        <Col xs={5} sm={2}>
                            <img src={require("../../assets/images/aac-logo.png")} width="175px" alt="logo" />
                        </Col>
                    </Row>
                </Container>
            </header>
    );
}

export default Header;