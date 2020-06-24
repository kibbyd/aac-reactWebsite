import React from 'react';
import {
  Card, Button
} from 'react-bootstrap';
import './RegisterCard.css';

const RegisterCard = (props) => {
    return(    
            <Card style={{width: "20rem"}}>
                <Card.Body>
                    <img height="243.09" width="100%" src={props.img} alt="Event" />
                    <Card.Title><h5 className="text-center mt-3">{props.event}</h5></Card.Title>
                    <Card.Text className="text-center mb-0">{props.preRegister}</Card.Text>
                    <Card.Text className="text-center mb-0">{props.date}</Card.Text>
                    <Card.Text className="text-center mb-0">{props.time}</Card.Text>
                    {props.launch ? <Card.Text className="text-center mb-3">{props.launch}</Card.Text> : null}                    
                </Card.Body>
                <Button color="primary" className="regButton mx-auto mb-3" block onClick={props.button}>Register</Button>
            </Card>               
    );
}

export default RegisterCard;

