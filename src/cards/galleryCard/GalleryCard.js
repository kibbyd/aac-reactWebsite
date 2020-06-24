import React from 'react';
import {
  Card, Button
} from 'react-bootstrap';
import './GalleryCard.css';

const GalleryCard = (props) => {
    return(
        <Card style={{width: "20rem"}}>
            <Card.Body>
                <img width="100%" src={props.img} alt="Event" />
                <Card.Title><h3 className="text-center mt-3">{props.event}</h3></Card.Title>
                <Card.Text className="text-center mb-3">{props.date}</Card.Text>                        
            </Card.Body>
            <Button color="primary" className="regButton mx-auto mb-3" block onClick={props.open}>View Photos</Button>
        </Card>
    );
}

export default GalleryCard;

