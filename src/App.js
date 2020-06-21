import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Navigation from './routes/navigation/Navigation';
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
