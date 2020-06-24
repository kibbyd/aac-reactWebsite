import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


const GalleryCarousel = (props) => <UncontrolledCarousel items={props.images} indicators={false} />;

export default GalleryCarousel;