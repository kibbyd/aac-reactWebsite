import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';
import { Container } from 'react-bootstrap';
import './SponsorModal.css';

const SponsorModal = (props) => { 
        return (
            <Modal isOpen={props.modalState} className="modal-xl">
            <ModalHeader toggle={props.close}>Become {props.sponsorType} Sponsor</ModalHeader>
            <ModalBody>
              <Container fluid>
                <form>
                  <div className="form-group row">
                    <label className="col-10 col-sm-4 col-form-label" for="sponsor">Organization/Business/Club:</label>
                    <div className="col-12 col-sm-6">
                      <input className="form-control" type="text" name="sponsor" id="sponsor" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-10 col-sm-4 col-form-label" for="contact">Contact Name:</label>
                    <div className="col-12 col-sm-6">
                      <input className="form-control" type="text" name="contact" id="contact" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-10 col-sm-4 col-form-label" for="address">Address:</label>
                    <div className="col-12 col-sm-6">
                      <input className="form-control" type="text" name="address" id="address" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-10 col-sm-4 col-form-label" for="statezip">City | State | Zip:</label>
                    <div className="col-12 col-sm-6">
                      <input className="form-control" type="text" name="statezip" id="statezip" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-10 col-sm-4 col-form-label" for="email">Email:</label>
                    <div className="col-12 col-sm-6">
                      <input className="form-control" type="email" name="email" id="email" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-10 col-sm-4 col-form-label" for="phone">Phone:</label>
                    <div className="col-12 col-sm-6">
                      <input className="form-control" type="tel" name="phone" id="phone" required />
                    </div>
                  </div>                  
                </form>
              </Container>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => alert(`This isn't linked to anything yet.`)}>Donate Now</Button>{' '}
              <Button color="secondary" onClick={props.close}>Cancel</Button>
            </ModalFooter>
          </Modal>
        );
    }

  export default SponsorModal;