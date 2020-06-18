import React, { Component } from 'react';
import EventModal from '../modals/EventModal';
import ReleaseModal from '../modals/ReleaseModal';

export default class Schedule extends Component { 
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
          <div className="row">
              <div className="col mt-3">
                  <h2>Tournament Schedule</h2>
                  <hr/>
              </div>
          </div>
          <div className="row">
              <div className="col mb-3">    
                  <table className="table table-striped table-responsive">
                      <thead>
                        <tr>
                          <th scope="col">Date</th>
                          <th scope="col">Event</th>
                          <th scope="col">Entry Fee</th>
                          <th scope="col">Prize Money</th>
                          <th scope="col">Water Levels</th>
                          <th scope="col">Register</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">March 21st 2020</th>
                          <td>Perry Reservoir, KS</td>
                          <td>$120</td>
                          <td>1st- $600<br/>2nd - $300<br/>3rd - $200</td>
                          <td><a href="https://waterdata.usgs.gov/ks/nwis/uv?site_no=06890898" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Check Levels</a></td>
                          <td><button className="btn btn-primary" onClick={() => this.toggleReleaseModal1()}>Register</button></td>
                        </tr>
                        <tr>
                            <th scope="row">December 1st 2020</th>
                            <td>Cheny Reservoir Cats, KS</td>
                            <td>$160</td>
                            <td>1st- $600<br/>2nd - $300<br/>3rd - $200</td>
                            <td><a href="https://waterdata.usgs.gov/ks/nwis/uv/?site_no=07144790&PARAmeter_cd=62614,62615,00054" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Check Levels</a></td>
                            <td><button className="btn btn-primary" onClick={() => this.toggleReleaseModal2()}>Register</button></td>
                        </tr>
                        <tr>
                            <th scope="row">May 23rd and 24th 2020</th>
                            <td>May Monster Cats, KS</td>
                            <td>$120</td>
                            <td>1st- $600<br/>2nd - $300<br/>3rd - $200</td>
                            <td><a href="https://waterdata.usgs.gov/nwis/uv?site_no=06893000" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Check Levels</a></td>
                            <td><button className="btn btn-primary" onClick={() => this.toggleReleaseModal3()}>Register</button></td>
                        </tr>
                      </tbody>
                  </table>
              </div>
          </div>      

          <EventModal open={this.state.isEventModal1Open} close={() => this.toggleEventModal1()} event="Perry Reservoir, KS" placeHolder="$30" fullPayment="$120" modalState={this.state.isEventModal1Open}/>
          <EventModal open={this.state.isEventModal2Open} close={() => this.toggleEventModal2()} event="Cheny Reservoir Cats, KS" placeHolder="$40" fullPayment="$160" modalState={this.state.isEventModal2Open}/>
          <EventModal open={this.state.isEventModal3Open} close={() => this.toggleEventModal3()} event="May Monster Cats, KS" placeHolder="$30" fullPayment="$120" modalState={this.state.isEventModal3Open}/>

          <ReleaseModal open={this.state.isReleaseModal1Open} close={() => this.toggleReleaseModal1()} openEvent={() => this.toggleEventModal1()}/>
          <ReleaseModal open={this.state.isReleaseModal2Open} close={() => this.toggleReleaseModal2()} openEvent={() => this.toggleEventModal2()}/>
          <ReleaseModal open={this.state.isReleaseModal3Open} close={() => this.toggleReleaseModal3()} openEvent={() => this.toggleEventModal3()}/>

        </div>
    );
  }
}