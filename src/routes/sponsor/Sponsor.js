import React from 'react';
import { Card, Button, Accordion, Container, Col, Row} from 'react-bootstrap';


const Sponsor = () => {
    return(
        <Container>
            <Row>
                <Col className="mt-3">
                    <h2>Becoming a Sponsor</h2>
                    <hr/>
                </Col>
            </Row>

            <Row>
                <Col>
                <h4>Establishing Your Presence</h4>
                <p>2019 ROCK FALLS BIG CAT QUEST CATFISHING TOURNAMENT September 28-29, 2019 SPONSORSHIP OPPORTUNITIES</p>

                <p>Illinois fishermen are among the most active and passionate in the nation and our goal with the 2019 Rock
                    Falls Big Cat Quest Catfishing Tournament is to give them an outlet for this passion. We aim to make this
                    tournament the biggest tournament to date, and would like to explore a partnership with your company in terms
                    of sponsorship, in order to accomplish this goal. In 2016, this tournament had 42 boats and in 2017, 51 boats
                    registered for the tournament. Last year was the first year we had to take over and rebuild after the
                    unexpected passing of our organizer and promoter, but we expect over 60 boats in 2019. Our hope is to continue
                    the fishing tournament in Rock Falls, IL for many years to come.</p>

                <h4>Why Rock Falls, Illinois?</h4>
                <p>We are fortunate to have one of our greatest assets in the Rock River. The most sought after sport fish in
                    the Rock River are catfish. Both channel catfish and flathead catfish are abundant and of trophy size. In
                    fact, the Rock River is one of the best rivers in the state for catching trophy size catfish, in the United
                    States. With the river’s varying depths, fishermen need twice the special equipment. Some of the biggest
                    catfish are caught in the shallows. Supporting a fishing tournament in Rock Falls, is an excellent marketing
                    opportunity for your business and to create even larger brand loyalty. This tournament also has one of the
                    highest payouts among fishing tournaments across the country.</p>

                <h4>Valuable Statistical Information</h4>
                <p>We have the Rock River. The most sought after of the sport fish in the Rock are the catfish, with both
                    channel catfish and flathead catfish abundant and of trophy size. In fact, the Rock River is one of the best
                    rivers in the state for catching trophy size catfish! With varying depths, fishermen need twice the special
                    equipment. Some of the biggest catfish are caught in the shallows. Supporting a fishing tournament in Rock
                    Falls, is an excellent marketing opportunity for your business. Anglers spent $387 million on equipment in
                    Illinois in 2011, 40 percent of all fishing expenditures. Fishing equipment (rods, reels & lines, etc.)
                    spending totaled $101 million-26 percent of the equipment total. Auxiliary equipment expenditures (tents,
                    special fishing clothing, etc.) and special equipment expenditures (boats, vans, etc.) amounted to $287
                    million – 74 percent of the equipment total.</p>

                <h4>Sponsorship</h4>
                <p>Sponsoring Rock Falls Catfishing Tournament gives your business access to your captive target market and
                    associates your business with a positive community events in an area that has yet to be tapped. Your brand
                    will be seen throughout various elements of the event and attendees eager to learn more about your business
                    will come to find you. Rock Falls Catfishing Tournament gives your brand the opportunity to gain media
                    exposure in Northwest Illinois and beyond. With an expanded target market, we are making efforts to reach the
                    entire nation.</p>

                <h4>Our Board</h4>
                <p>Our advisory board consists of Mark Searing, City of Rock Falls Building Inspector and former tournament
                    promoter, Mike Doyle, local bait & tackle shop owner and Youth Fishing organizer, and Megan Horsman, Director
                    of Tourism & Events for the City of Rock Falls Tourism Department.</p>
                </Col>
            </Row>

            <Row>
                <Col className="mb-2">
                <h2 className="text-center">Choose your Sponsorship Level</h2>
                </Col>
            </Row>       

            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        TITLE SPONSOR -$10,000
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <ul>
                                <li>Exclusive naming rights to the tournament, i.e. “... presents Rock Falls Catfishing Tournament”.</li>
                                <li>Complementary registration for 2 boats (2 anglers per boat).</li>
                                <li>Complimentary Captains Dinner & Tournament T-shirts for 8.</li>
                                <li>Prime Placement for booth space reserved during the Tournament. </li>
                            </ul>
                            <h5>Logo Representation & inclusion on:</h5>
                            <ul>
                                <li>Sponsor is acknowledged in all comprehensive exposure in regional print, broadcast and electronic
                                media, press releases, promotions (posters, brochures, fishing tournament t-shirts, banners and
                                entry forms), and receive a one-year banner ad name & logo with link to sponsors website.</li>
                                <li>Sponsor Banner will hang at the weigh in & captain’s dinner creating photo opportunities for
                                fishermen and event attendees. A souvenir photo booth will have your logo as the background at all
                                events and activities.</li>
                                <li>Sponsor representation on winner’s trophies and VIP recognition at awards ceremony during
                                presentation.</li>
                                <li>Special media opportunities for title sponsors will be made available at all events & activities.
                                This includes live social media segments, speaking opportunities, and interviews</li>
                            </ul> 
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        ASSOCIATE SPONSOR $5,000
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <ul>
                                <li>Secondary naming rights to the tournament, i.e. “The Rock Falls Catfishing Tournament sponsored by
                                ...”</li>
                                <li>Complementary registration for 2 boats (2 anglers per boat). </li>
                                <li>Complimentary Captains Dinner & Tournament T-shirts for 4. </li>
                                <li>Prime Placement for booth space reserved during the Tournament </li>
                            </ul>
                            <h5>Logo Representation & inclusion on:</h5>
                            <ul>
                                <li>Sponsor is acknowledged in all press releases, advertisements and promotions, on posters,
                                brochures, fishing tournament t-shirts, banners and entry forms, at all events and activities with
                                Sponsor Logo on Rock Falls Catfishing Tournament website linked directly to sponsors website plus,
                                Comprehensive exposure in regional print, broadcast and electronic media. </li>
                                <li>Special media opportunities for associate sponsors will be made available. This includes a live
                                social media segment, a speaking opportunity, and interview at the weigh in & captain’s dinner.
                                </li>
                                <li>Sponsor Banner will hang at the weigh in & captain’s dinner creating photo opportunities for
                                fishermen and event attendees. A souvenir photo booth will have your logo as the background at the
                                dinner and tournament. </li>
                                <li>Sponsor representation on winner’s trophies and prominent recognition at awards ceremony during
                                presentation. </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        CAPTAIN’S DINNER SPONSOR -$2,500
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <ul>
                                <li>Complementary registration for 2 boats (2 anglers per boat).</li>
                                <li>Complimentary Captains Dinner & Tournament T-shirts for 4. </li>
                                <li>Prime Placement for booth space reserved during the Tournament </li>
                            </ul>
                            <h4>Logo Representation & inclusion on:</h4>
                            <ul>
                                <li>Sponsors are acknowledged on all posters, in promotions and advertising and are acknowledged at
                                all events and the tournament website</li>
                                <li>Sponsor Banner will hang at the captain’s dinner in a prime location creating a photo
                                opportunities for fishermen and event attendees. </li>
                                <li>Sponsor representation on winner’s trophies and recognition at awards ceremony during presentation.</li>
                                <li>Special media opportunities for the Captain’s Dinner sponsor will be made available.This includes
                                a primary speaking opportunity at the Captain’s Dinner. </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        IN-KIND DONATION
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <p>We are so grateful for all our sponsors whether they are able to give a little or a lot.</p>
                            <p>Any contribution we receive goes towards ensuring we are able to continue to deliver exciting, enjoyable and family friendly cat fishing tournaments.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>                     
        </Container>
        
    );
}

export default Sponsor;