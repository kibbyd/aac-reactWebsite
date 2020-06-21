import React, { Component } from 'react';
import RegisterCard from '../../cards/registerCard/RegisterCard';
import EventModal from '../../modals/eventModal/EventModal';
import ReleaseModal from '../../modals/releaseModal/ReleaseModal';

class Register extends Component { 
    constructor(props){
      super(props);
        this.state = {
          isEventModal1Open: false,
          isEventModal2Open: false,
          isEventModal3Open: false,
          isReleaseModal1Open: false,
          isReleaseModal2Open: false,
          isReleaseModal3Open: false
        }
      }
  
  
    toggleReleaseModal1() {
      this.setState({
          isReleaseModal1Open: !this.state.isReleaseModal1Open
      });
    } 
    
    toggleReleaseModal2() {
      this.setState({
          isReleaseModal2Open: !this.state.isReleaseModal2Open
      });
    }
  
    toggleReleaseModal3() {
      this.setState({
          isReleaseModal3Open: !this.state.isReleaseModal3Open
      });
    }
  
    toggleEventModal1() {
      if(this.state.isReleaseModal1Open === true){
      this.setState({
        isReleaseModal1Open: !this.state.isReleaseModal1Open
    });
      this.setState({
        isEventModal1Open: !this.state.isEventModal1Open
    });
  } else {
    this.setState({
      isEventModal1Open: !this.state.isEventModal1Open
  });
    }
  }
  
  toggleEventModal2() {
    if(this.state.isReleaseModal2Open === true){
    this.setState({
      isReleaseModal2Open: !this.state.isReleaseModal2Open
  });
    this.setState({
      isEventModal2Open: !this.state.isEventModal2Open
  });
  } else {
  this.setState({
    isEventModal2Open: !this.state.isEventModal2Open
  });
  }
  }
  
  
  toggleEventModal3() {
    if(this.state.isReleaseModal3Open === true){
    this.setState({
      isReleaseModal3Open: !this.state.isReleaseModal3Open
  });
    this.setState({
      isEventModal3Open: !this.state.isEventModal3Open
  });
  } else {
  this.setState({
    isEventModal3Open: !this.state.isEventModal3Open
  });
  }
  }
    render(){
    return(
        <div className="container">

          <div class="row">
              <div class="col mt-3">
                  <h2>Register for an Event</h2>
                  <hr/>
              </div>
          </div>

          <div className="row">
            <div className="col mt-3 mb-4 d-flex justify-content-center">
                <RegisterCard img={require("../../assets/images/events/PerryReservoir.png")} event="Perry Reservoir, KS" preRegister="Pre-Register Now" date="Saturday, March 21st" time="7:30am to 3:30pm" button={() => this.toggleReleaseModal1()} />
            </div>
            <div className="col mt-3 mb-4 d-flex justify-content-center">
                <RegisterCard img={require("../../assets/images/events/CheneyReservoir.png")} event="Cheny Reservoir Cats, KS" preRegister="Pre-Register from" date="December 1st" time="7:00am to 4:00pm" launch="Launch 6:30am" button={() => this.toggleReleaseModal2()} />
            </div>
            <div className="col mt-3 mb-4 d-flex justify-content-center">
                <RegisterCard img={require("../../assets/images/events/MayMonsterCats.png")} event="May Monster Cats, KS" preRegister="Pre-Register Now" date="May 23rd and 24th" time="7:00am to 4:00pm" launch="Launch 6:30am" button={() => this.toggleReleaseModal3()} />
            </div>              
          </div>
            
          <EventModal open={this.state.isEventModal1Open} close={() => this.toggleEventModal1()} event="Perry Reservoir, KS" placeHolder="$30" fullPayment="$120" modalState={this.state.isEventModal1Open} />
          <EventModal open={this.state.isEventModal2Open} close={() => this.toggleEventModal2()} event="Cheny Reservoir Cats, KS" placeHolder="$40" fullPayment="$160" modalState={this.state.isEventModal2Open} />
          <EventModal open={this.state.isEventModal3Open} close={() => this.toggleEventModal3()} event="May Monster Cats, KS" placeHolder="$30" fullPayment="$120" modalState={this.state.isEventModal3Open} />
          
          <ReleaseModal open={this.state.isReleaseModal1Open} close={() => this.toggleReleaseModal1()} openEvent={() => this.toggleEventModal1()} />
          <ReleaseModal open={this.state.isReleaseModal2Open} close={() => this.toggleReleaseModal2()} openEvent={() => this.toggleEventModal2()} />
          <ReleaseModal open={this.state.isReleaseModal3Open} close={() => this.toggleReleaseModal3()} openEvent={() => this.toggleEventModal3()} />            
        </div>
    );
}
}

export default Register;