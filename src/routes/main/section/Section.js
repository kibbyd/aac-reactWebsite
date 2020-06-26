import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Section.css';

const Section = (props) => {
    return(        
            <Row className="section-title pt-2 border-top border-bottom">
                <Col className="col d-flex justify-content-center">
                    <h2>{props.title}</h2>
                </Col>
            </Row>
    );
}

export default Section;
