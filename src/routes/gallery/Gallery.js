import React from 'react';
import  GalleryCard  from '../../cards/galleryCard/GalleryCard';
 
const Gallery = (props) => {

    return(
        <div className="container">
            <div className="row">
                <div className="col mt-3">
                    <h2>Gallery</h2>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 mt-3 mb-4 d-flex justify-content-center">
                    <GalleryCard img={require("../../assets/images/gallery/event1.1.jpg")} event="Ozarks" space={<br/>} date="15th March 2020" />
                </div>
                <div className="col-sm-4 mt-3 mb-4 d-flex justify-content-center">
                    <GalleryCard img={require("../../assets/images/gallery/event2.1.jpg")} event="Tournament of Champions" date="4th September 2019" />
                </div>
            </div>
            
        </div>  
    );

}

export default Gallery;