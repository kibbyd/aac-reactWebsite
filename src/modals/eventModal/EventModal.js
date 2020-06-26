import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';
import { Row, Col } from 'react-bootstrap';
import './EventModal.css';

const EventModal = (props) => { 
        return (
            <Modal isOpen={props.open}>
            <ModalHeader toggle={props.close}>{props.event} Event</ModalHeader>
            <ModalBody>
              <form>
                <Row className="form-group">
                  <label className="col-sm-6 col-form-label" for="numAnglers">Number of Anglers</label>
                  <Col xs={12} sm={6}>
                    <select className="col form-control" name="numAnglers" id="numAnglers">
                      <option className="text-muted">Select...</option>
                      <option value="1">1</option>
                      <option value="2">2</option> 
                      <option value="3">3</option>
                    </select>
                  </Col>
                </Row>
  
                <div className="form-group row">
                  <label className="col-sm-6 col-form-label" for="boatCaptain">Boat Captain:</label>
                  <div className="col col-sm-6">
                    <input className="form-control" type="text" name="boatCaptain" id="boatCaptain" required/>
                  </div>
                </div>
  
                <div className="form-group row">
                  <label className="col-sm-6 col-form-label" for="boatCaptainTel" required>Boat Captain's Tel:</label>
                  <div className="col col-sm-6">
                    <input className="form-control" type="tel" name="boatCaptainTel" id="boatCaptainTel"/>
                  </div>
                </div>
  
                <div className="form-group row">
                  <label className="col-sm-6 col-form-label" for="angler2">Angler 2:</label>
                  <div className="col col-sm-6">
                    <input className="form-control" type="text" name="angler2" id="angler2"/>
                  </div>
                </div>
  
                <div className="form-group row">
                  <label className="col-sm-6 col-form-label" for="angler3">Angler 3:</label>
                  <div className="col col-sm-6">
                    <input className="form-control" type="text" name="angler3" id="angler3"/>
                  </div>
                </div>
  
                <div className="form-group row">
                  <label className="col-sm-6 col-form-label" for="payment">Payment Option:</label>
                  <div className="col col-sm-6">
                    <select className="col form-control" name="payment" id="payment">
                      <option className="text-muted">Select...</option>
                      <option value="1">Place Holder {props.placeHolder}</option>
                      <option value="2">Full Payment {props.fullPayment}</option>
                    </select>
                  </div>
                </div>
  
                <div className="form-group row">
                  <label className="col-8 form-check-label" for="agree">Please confirm you have read and agree to the <a
                      href="rules.html" target="_blank">tournament rules</a>.</label>
                      <div className="form-check">
                        <input className="form-check-input position-static" type="checkbox" id="agree" value="agree"
                          aria-label="agree to rules" required/>
                      </div>
                </div>
              </form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => alert(`This isn't linked to anything yet.`)}>Pay Now</Button>{' '}
                <Button color="secondary" onClick={props.close}>Cancel</Button>
              </ModalFooter>
            </Modal>
        );
    }
  
    export default EventModal;