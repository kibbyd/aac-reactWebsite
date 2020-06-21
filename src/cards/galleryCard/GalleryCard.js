import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

const GalleryCard = (props) => {
    return(
        <div class="row">
            <div class="col mt-3 mb-4 d-flex justify-content-center">
                <Card style={{width: "20rem"}}>
                    <CardBody>
                        <img width="100%" src={props.img} alt="Event" />
                        <CardTitle><h3 className="text-center mt-3">{props.event}</h3></CardTitle>
                        <CardText className="text-center mb-0">{props.space}</CardText>
                        <CardText className="text-center mb-3">{props.date}</CardText>                        
                    </CardBody>
                    <Button color="primary" className="regButton mx-auto mb-3" block onClick={props.button}>View Photos</Button>
                </Card>
            </div>
        </div>
    );
}

export default GalleryCard;

