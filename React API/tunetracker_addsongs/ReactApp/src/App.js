
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import AddSong from './components/AddSong';

function App() {
  return (
    <div>
      <h1><span>Tune</span>Tracker</h1>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/add-song">Add Song</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/add-song" element={<AddSong />} />
      </Routes>
    </div>
  );
}

export default App;
