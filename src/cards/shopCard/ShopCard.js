import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import ShopCardCarousel from '../../carousel/shopCardCarousel/shopCardCarousel';
import './ShopCard.css';

const ShopCard = (props) => {
    return(
        <div className="ShopCard">
            <Card style={{width: "20rem"}}>
                <Card.Body>
                    <ShopCardCarousel itemImage={props.itemImage}/>
                    <Card.Text><h5 className="text-center mt-3">{props.itemName}</h5></Card.Text>
                    <Card.Text><h5 className="text-center mb-3">{props.itemPrice}</h5></Card.Text>
                    <Row style={{display: props.sizes}}>
                    <Col className="text-center">
                        <input className="mr-1" type="radio" id="M" name="size" value="Medium"/>
                        <label className="mr-3" for="M">M</label>
                        <input className="mr-1" type="radio" id="L" name="size" value="Large" />
                        <label className="mr-3" for="L">L</label>
                        <input className="mr-1" type="radio" id="XL" name="size" value="Extra Large" />
                        <label className="mr-3" for="XL">XL</label>
                        <input className="mr-1" type="radio" id="XXL" name="size" value="II Extra Large" />
                        <label className="mr-1" for="XL">XXL</label>
                    </Col>
                    </Row>
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