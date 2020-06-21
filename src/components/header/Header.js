import React from 'react'; 
import './Header.css';

function Header(){
    return(
        <React.Fragment>
            <header>
                <div className="container-fluid head-container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-6 col-sm-2">
                            <img src={require("../../assets/images/aac-logo.png")} width="175px" alt="logo" />
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Header;