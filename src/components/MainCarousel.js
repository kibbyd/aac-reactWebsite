import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        id: 1,
        altText: 'Slide 1',
        src: require('../assets/images/homePageCarousel/tv-image-1.jpg')
      },
      {
        id: 2,
        altText: 'Slide 2',
        src: require('../assets/images/homePageCarousel/tv-image-2.jpg')
      },
      {
        id: 3,
        altText: 'Slide 3',
        src: require('../assets/images/homePageCarousel/tv-image-3.jpg')
      },
      {
        id: 4,
        altText: 'Slide 4',
        src: require('../assets/images/homePageCarousel/tv-image-4.jpg')
      }
];

const ImageSpinner = () => <UncontrolledCarousel items={items} indicators={false} />;

function MainCarousel(){
    return(
        <div className="container">
            <div className="row row-content d-flex justify-content-center py-3">
                <div className="col col-md-8 tv">
                    <ImageSpinner />
                </div>
            </div>
        </div> 
    );
}

export default MainCarousel;