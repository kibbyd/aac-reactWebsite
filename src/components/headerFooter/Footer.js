import React from 'react';

function Footer(){
    const currYear = new Date().getFullYear();
    return(        
        <footer className="footer sticky-footer">
          <div className="container-fluid">
            <div className="row pt-2">
            <div className="col">
            <h2 className="text-white text-center pr-3" data-toggle="tooltip" data-placement="top" title="Click Facebook Icon">Join our Group <a class="btn btn-social-icon btn-facebook mb-1" target="_blank"
            href="https://www.facebook.com/groups/AACatfish/" rel="noopener noreferrer"><i className="fa fa-facebook"/></a></h2>
        </div>
            </div>            
            
            <div id="signature" className="row bg-dark py-2">
              <div className="col text-center pt-2">
                <h6 className="text-white">Copyright © {currYear} | All rights reserved | Delivered by <a href="https://github.com/kibbyd" target="_blank" rel="noopener noreferrer">The Milkman</a><img src={require("../../assets/images/milkBottle.png")} height="20px" alt="milk bottle" className="mb-1"/>
                </h6>
              </div>
            </div>		
          </div>		
        </footer>
    );
}

export default Footer;