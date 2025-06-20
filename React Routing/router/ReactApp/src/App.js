import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import './style.css';


class App extends Component {
  render() {
    return (
      <div>
        <h1>WeHost</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    );
  }
}


export default App;