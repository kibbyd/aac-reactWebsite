import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainCarousel from './components/MainCarousel';
import Section from './components/Section';
import ImageBlock from './components/ImageBlock';
import WhoWeAre from './components/WhoWeAre';
import Footer from './components/Footer';
import './App.css';
import JoinMailingList from './components/JoinMailingList';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Navigation />
      <MainCarousel />
      <div class="container-fluid">
        <Section title="Our Partners" />
        <ImageBlock img={require('./assets/images/sponsors.png')} alt="Our Partners" />
        <Section title="Who We Are" />
        <WhoWeAre />
        <JoinMailingList />
        <Section title="Our Sponsors"/>
        <ImageBlock img={require('./assets/images/sponsors.png')} alt="Our Sponsors" />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
