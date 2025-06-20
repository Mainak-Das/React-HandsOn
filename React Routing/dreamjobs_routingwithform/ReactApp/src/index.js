import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobPortal from './JobPortal';
import JobSeeker from './JobSeeker';
import Recruiter from './Recruiter';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<JobPortal />} />
      <Route path="/jobseeker" element={<JobSeeker />} />
      <Route path="/recruiter" element={<Recruiter />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);