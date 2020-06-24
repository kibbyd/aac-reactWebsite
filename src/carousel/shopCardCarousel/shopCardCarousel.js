import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


const ShopCardCarousel = (props) => <UncontrolledCarousel items={props.images} indicators={false} />;

export default ShopCardCarousel;