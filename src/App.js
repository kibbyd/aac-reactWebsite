import React from 'react';
import Header from './components/headerFooter/Header';
import Footer from './components/headerFooter/Footer';
import Navigation from './components/navigation/Navigation';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Navigation />
      <Footer />
    </React.Fragment>
  );
}

export default App;
