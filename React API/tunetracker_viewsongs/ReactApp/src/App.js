import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import About from './components/About.js';
import Songs from './components/Songs.js';

function App() {
    return (
    <div>
    <h1><span>Tune</span>Tracker</h1>
    {/* Implement the routing here */}
    <nav>
        <Link to="/about">About</Link>
        <Link to="/songs">Songs</Link>
    </nav>
    <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/songs" element={<Songs />} />
    </Routes>
    </div>
);
}

export default App;