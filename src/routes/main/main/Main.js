import React from 'react';
import MainCarousel from '../mainCarousel/MainCarousel';
import Section from '../section/Section';
import ImageBlock from '../imageBlock/ImageBlock';
import WhoWeAre from '../whoWeAre/WhoWeAre';
import JoinMailingList from '../joinMailingList/JoinMailingList';

function Main(){
    return(
    <React.Fragment>
        <MainCarousel />
        <div class="container-fluid">
        <Section title="Our Partners" />
        <ImageBlock img={require('../../../assets/images/sponsors.png')} alt="Our Partners" />
        <Section title="Who We Are" />
        <WhoWeAre />
        <JoinMailingList />
        <Section title="Our Sponsors"/>
        <ImageBlock img={require('../../../assets/images/sponsors.png')} alt="Our Sponsors" />
        </div>
    </React.Fragment>
);
}

export default Main;