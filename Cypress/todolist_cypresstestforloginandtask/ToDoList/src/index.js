import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './App';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(<Router><Homepage/></Router>, document.getElementById('root'));
