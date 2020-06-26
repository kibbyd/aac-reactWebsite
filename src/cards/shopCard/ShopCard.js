import React from 'react';
import { Button, Card } from 'react-bootstrap';
import ShopCardCarousel from '../../carousel/shopCardCarousel/shopCardCarousel';
import './ShopCard.css';

const ShopCard = (props) => {
    return(
        <div className="ShopCard">
            <Card style={{width: "20rem"}}>
                <Card.Body>
                    <ShopCardCarousel images={props.images}/>
                    <Card.Text><h4 className="text-center mt-3">AAC Hoodie</h4></Card.Text>
                    <Card.Text><h4 className="text-center mb-3">$35</h4></Card.Text>
                    <div className="d-flex justify-content-center mb-3">
                        <Button variant="primary" onClick={() => alert(`This isn't linked to anything yet.`)}>Add to Cart</Button>
                        <Button variant="success" className="ml-2" onClick={() => alert(`This isn't linked to anything yet.`)}>Buy Now</Button>  
                    </div>                     
                </Card.Body>
            </Card>
        </div>
    );
}

export default ShopCard;