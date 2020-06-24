import React from 'react';
import './Contact.css';
import { Container, Col, Row } from 'react-bootstrap';

const Contact = () => {
    return(
        <React.Fragment>
            <Container>   
                <Row>
                    <Col className="mt-3">
                        <h2>Contact Us</h2> 
                        <hr />           
                    </Col>
                </Row>                  

                <Row className="align-items-center">
                    <Col className="col-sm-4">
                        <h5>Our Address</h5>
                        <address>
                            PO BOX 195,<br/>
                            Edgerton,<br/> 
                            Kansas 66021 
                        </address>
                    </Col>
                    <Col>
                        <a role="button" className="btn btn-link" href="tel:+1913864462"><i className="fa fa-phone fa-lg text-primary"/> (913)-486-4462</a><br/>
                        <a role="button" className="btn btn-link" href="mailto:AACatfish@outlook.com"><i className="fa fa-envelope-o fa-lg text-primary"/> AACatfish@outlook.com</a>
                    </Col>
                </Row>   

                <Row>
                    <Col className="mt-3">
                    <h2>Send us your Feedback</h2>
                    <hr/>
                    </Col>
                </Row>

                <Col className="col-md-10">
                    <form>
                        <div className="form-group row">
                            <label for="firstName" className="col-md-2 col-form-label">First Name</label>
                            <div className="col-md-10">
                                <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="lastName" className="col-md-2 col-form-label">Last Name</label>
                            <div className="col-md-10">
                                <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="telNum" className="col-md-2 col-form-label">Contact Tel.</label>            
                            <div class="col-md-10">
                                <input type="tel" className="form-control" name="telNum" placeholder="Tel. number"/>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" className="col-md-2 col-form-label">Email</label>
                            <div class="col-md-10">
                                <input type="email" className="form-control" id="email" name="email" placeholder="Email"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="feedback" className="col-md-2 col-form-label">Your Feedback</label>
                            <div className="col-md-10">
                                <textarea className="form-control" id="feedback" name="feedback" rows="8"></textarea>
                            </div>
                        </div>

                        <div className="form-group row">
                        <div className="offset-md-2 col-md-10">
                            <button type="submit" className="btn btn-primary" onclick="dummyButton()">Send Feedback</button>
                        </div>
                        </div>
                    </form>
                </Col>

            </Container>    
        </React.Fragment>
    );
}

export default Contact;