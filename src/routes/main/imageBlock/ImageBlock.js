import React from 'react';

function ImageBlock(props){
    return(
        <div className="row row-content">
            <div className="col py-1">
            <img className="img-fluid" src={props.img} alt={props.alt} />
            </div>
        </div>
    );
}

export default ImageBlock;