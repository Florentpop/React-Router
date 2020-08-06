import React from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <div>
          <nav className="nav">
          <div className="center">
            <Link to="/"> Home </Link>

            <Link to="/About"> About </Link>

            <Link to="contact"> Contact</Link>
          </div>
          </nav>



          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Contact" exact component={Contact} />

        </div>

      </Router>
    </BrowserRouter>

  );
}

export default App;
