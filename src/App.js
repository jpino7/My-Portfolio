import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from "./pages/Contact";
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <div>
          <Nav />
          <Header />
          <Switch>
            {/* <BrowserRouter baseline="/My-Portfolio" /> */}
            <Route exact path ="/My-Portfolio" component={About}/>
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
        </Router>
    </div>
  );
}

export default App;
