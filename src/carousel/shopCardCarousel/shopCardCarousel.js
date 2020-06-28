import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


const ShopCardCarousel = (props) => <UncontrolledCarousel items={props.itemImage} indicators={false} />;

export default ShopCardCarousel;