import React from 'react';

function Section(props){
    return(        
            <div className="row section-title pt-2 border-top border-bottom">
                <div className="col d-flex justify-content-center">
                    <h2>{props.title}</h2>
                </div>
            </div>
    );
}

export default Section;
