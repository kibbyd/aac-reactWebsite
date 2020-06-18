import React from 'react';
import MainCarousel from './MainCarousel';
import Section from './Section';
import ImageBlock from './ImageBlock';
import WhoWeAre from './WhoWeAre';
import JoinMailingList from './JoinMailingList';

function Main(){
    return(
    <React.Fragment>
        <MainCarousel />
        <div class="container-fluid">
        <Section title="Our Partners" />
        <ImageBlock img={require('../../assets/images/sponsors.png')} alt="Our Partners" />
        <Section title="Who We Are" />
        <WhoWeAre />
        <JoinMailingList />
        <Section title="Our Sponsors"/>
        <ImageBlock img={require('../../assets/images/sponsors.png')} alt="Our Sponsors" />
        </div>
    </React.Fragment>
);
}

export default Main;