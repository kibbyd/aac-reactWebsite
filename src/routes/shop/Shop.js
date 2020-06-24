import React from 'react';
import ShopCard from '../../cards/shopCard/ShopCard';
import { HOODIEIMAGES } from '../../assets/imageArrays/shop/hoodies';
import { HATIMAGES } from '../../assets/imageArrays/shop/hats';
import { Container, Col, Row } from 'react-bootstrap';

const Shop = () => {
    return(
        <Container>
            <Row>
                <Col className="mt-3">
                    <h2>Shop</h2>
                    <hr/>
                </Col>
            </Row>

            <Row>
                <Col xs={12} sm={8} md={6} lg={4} className="mt-3 mb-4 d-flex justify-content-center">
                    <ShopCard images={HOODIEIMAGES}/>
                </Col>
                <Col xs={12} sm={8} md={6} lg={4} className="mt-3 mb-4 d-flex justify-content-center">
                    <ShopCard images={HATIMAGES}/>
                </Col>
            </Row>        
        </Container>
    );
}

export default Shop;