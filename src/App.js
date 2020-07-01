import React from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="container">
        <Nav />
        <Header />
        <AboutMe />
        <Footer />
    </div>
  );
}

export default App;
