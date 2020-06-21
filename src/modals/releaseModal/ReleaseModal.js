import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';
import './ReleaseModal.css';

const ReleaseModal = (props) => { 

        return (
            <Modal isOpen={props.open} className="modal-xl">
            <ModalHeader toggle={props.close}>All American Catfish Tournaments Release of liability</ModalHeader>
            <ModalBody>
              <div class="container">
                <div class="row">    
                  <div class="col-12 text-center">
                    <p>PO Box 195 Edgerton, KS, 66021</p>
                  </div>
                  <div class="col-12">
                    <p>In consideration of being allowed to participate in any way in the All American Catfish Tournaments program, its related events and activities,<br/> I/WE, the undersigned, being of at least 18 years of age, acknowledge, appreciate, and agree that: </p>
                  </div> 
                  <div class="col-12">         
                    <ol>
                      <li>The risk of injury from the activities involved in this program is significant, including the potential for permanent paralysis and death, and<br/> while skills, equipment, and personal discipline may reduce this risk, the risk of serious injury does exist; and, </li>
                      <li>I KNOWINGLY AND FREELY ASSUME ALL SUCH RISKS, both known and unknown, EVEN IF ARISING FROM THE<br/> NEGLIGENCE OF THE RELEASEES or others, and assume full responsibility for my participation; and, </li>
                      <li>I willingly agree to comply with the stated and customary terms and conditions for participation. If, however, I observe any unusual<br/> significant hazard during my presence or participation, I will remove myself from participation and bring such to the attention of the Company<br/> immediately; and, </li>
                      <li>I, for myself and on behalf of my heirs, assigns, personal representatives and next of kin, HEREBY RELEASE, INDEMNIFY, AND HOLD<br/> HARMLESS THE All American Catfish Tournaments, their officers, officials, agents and/or employees, other participants, sponsoring<br/> agencies, sponsors, advertisers, and, if applicable, owners and lessors of premises used for the activity ("Releasees"), WITH RESPECT TO<br/> ANY AND ALL INJURY, DISABILITY, DEATH, or loss or damage to person or property, WHETHER ARISING FROM<br/> THE NEGLIGENCE OF THE RELEASEES OR OTHERWISE, to the fullest extent permitted by law. </li>
                      <li>I understand and agree to adhere to all tournament rules. I agree that any mention of our names or photographic or video witnesses may be<br/> used by organizers. I understand I may be subject to polygraph testing.</li>
                    </ol>
                  </div> 
                  <div class="col-12">     
                    <p>I HAVE READ THIS RELEASE OF LIABILITY AND ASSUMPTION OF RISK AGREEMENT, FULLY UNDERSTAND ITS TERMS, UNDERSTAND<br/> THAT I HAVE GIVEN UP SUBSTANTIAL RIGHTS BY SIGNING IT, AND SIGN IT FREELY AND VOLUNTARILY WITHOUT ANY INDUCEMENT. </p>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={props.openEvent}>Agree</Button>{' '}
              <Button color="secondary" onClick={props.close}>Cancel</Button>
            </ModalFooter>
          </Modal>
        );
    }

  export default ReleaseModal;