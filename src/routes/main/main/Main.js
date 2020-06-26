import React from 'react';
import MainCarousel from '../mainCarousel/MainCarousel';
import Section from '../section/Section';
import ImageBlock from '../imageBlock/ImageBlock';
import WhoWeAre from '../whoWeAre/WhoWeAre';
import JoinMailingList from '../joinMailingList/JoinMailingList';
import { Container } from 'react-bootstrap';

const Main = () => {
    return(
    <React.Fragment>
        <MainCarousel />
        <Container fluid>
            <Section title="Our Partners" />
            <ImageBlock img={require('../../../assets/images/sponsors.png')} alt="Our Partners" />
            <Section title="Who We Are" />
            <WhoWeAre />
            <JoinMailingList />
            <Section title="Our Sponsors"/>
            <ImageBlock img={require('../../../assets/images/sponsors.png')} alt="Our Sponsors" />
        </Container>
    </React.Fragment>
);
}

export default Main;