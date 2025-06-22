import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './Components/HomePage';
import './App.css';

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleLogin = () => {
    setIsLoggedin(true);
  };

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={isLoggedin ? <Navigate to="/home" /> : <LoginPage onLogin={handleLogin} />}
        />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

function LoginPage({ onLogin }) {
  const [state, setState] = useState({
    userName: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { userName, password } = state;
    if (userName === 'richard@tekstac.com' && password === 'richard@tekstac_2010') {
      onLogin();
    } else {
       document.getElementById('result').innerHTML= 'Invalid username or password';
    }
  };

  return (
    <div className="login-page">
      <h2>UNLOCK THE ACCOUNT</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter UserName:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="Enter Username here"
          className="input-field"
          value={state.userName}
          onChange={handleInputChange}
        />
        <br />
        <label>Enter Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password here"
          className="input-field"
          value={state.password}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
       <div id='result'></div>
    </div>
  );
}

export default App;
