import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './RegisterCard.css';

const RegisterCard = (props) => {
    return(
        <div className="RegisterCard">       
            <Card style={{width: "20rem"}}>
                <CardBody>
                    <img height="243.09" width="100%" src={props.img} alt="Event" />
                    <CardTitle><h5 className="text-center mt-3">{props.event}</h5></CardTitle>
                    <CardText className="text-center mb-0">{props.preRegister}</CardText>
                    <CardText className="text-center mb-0">{props.date}</CardText>
                    <CardText className="text-center mb-0">{props.time}</CardText>
                    {props.launch ? <CardText className="text-center mb-3">{props.launch}</CardText> : null}                    
                </CardBody>
                <Button color="primary" className="regButton mx-auto mb-3" block onClick={props.button}>Register</Button>
            </Card>
        </div>                
    );
}

export default RegisterCard;

