import React from 'react';

function Navigation(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top border-top border-bottom">
      <div className="container">
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#mainNavbar"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-lg-flex justify-content-center" id="mainNavbar">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Tournaments
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="schedule.html">Schedule</a>
                <a className="dropdown-item" href="register.html">Register</a>
                <a className="dropdown-item" href="rules.html">Rules</a>
                <a className="dropdown-item" href="gallery.html">Gallery</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Community Events
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="communityevents.html">Schedule</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="shop.html">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="sponsor.html">Sponsor</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}

export default Navigation;