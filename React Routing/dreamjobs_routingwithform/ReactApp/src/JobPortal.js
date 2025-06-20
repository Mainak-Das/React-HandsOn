import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import JobSeeker from './JobSeeker';
import Recruiter from './Recruiter';
import './style.css';

const styles = {
    title: {
        height: "100px",
        width: "1550px",
        color: 'white',
        backgroundColor: '#FDC30D',
        padding: "25px"
    }
};

const JobPortal = () => {
  return (
    <div>
      <div>
        <h2 style={{ height: "100px", width: "1550px", color: 'white', backgroundColor: '#FDC30D', padding: "25px" }}>
          Dream Jobs
        </h2>
      </div>
      <div style={{ padding: "10px" }}>
        <Link to="/jobseeker">Job Seeker</Link> | <Link to="/recruiter">Recruiter</Link> |
      </div>
    </div>
  );
};

export default JobPortal;