import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './WhoWeAre.css';

const WhoWeAre = () => {
    return(
        <Row>
        <Col className="py-2 who-we-are text-center">
          <p>All American Catfish Tournaments are friendly events where new and professional anglers can come together and
            compete.</p>
          <p>We are more than a Tournament series, we are a community and we are always growing.</p>
          <p>Spectators are always welcome at the launch and weigh ins. They can also hang out with us during the day.</p>
          <p>Look for us on <a href="https://www.facebook.com/groups/AACatfish/">Facebook</a> too for all the latest
            updates with our events or sponsors.</p>
          <p>You are always welcome to post your fishing questions in our <a
              href="https://www.facebook.com/groups/AACatfish/">Facebook</a> group too.</p>
          <p>If you've never fished a Tournament and would like to, just let us know so we can help you get ready.</p>
        </Col>
      </Row>
    );
}

export default WhoWeAre;