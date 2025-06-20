import React, { useState } from 'react';
import "./style.css";

const styles = {
  message: {
    height: "30px",
    width: "650px",
    backgroundColor: '#d3eaf1',
    padding: "3px",
  },
  header: {
    height: "50px",
    color: 'white',
    padding: "10px",
    backgroundColor: '#81807E'
  },
  button: {
    backgroundColor: '#FDC30D',
    height: '40px',
    textAlign: 'center',
    width: '100px'
  }
};

const Recruiter = () => {
  const [companyName, setCompanyName] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [message, setMessage] = useState("");

  const handlePost = () => {
    setMessage(`${companyName}, Your job requirement posted successfully`);
  };

  return (
    <div className='container w-50'>
      <div className="card">
        <div style={styles.header}><h4>Recruiter</h4></div>
        <div className="card-body">
          <div className="col align-items-center">
            <div className="col p-2">
              <input id="companyName" className='w-75 form-control form-control-sm' placeholder="Company Name" value={companyName} onChange={e => setCompanyName(e.target.value)} />
            </div>
            <div className="col p-2">
              <input id="jobType" className='w-75 form-control form-control-sm' placeholder="Job Type" value={jobType} onChange={e => setJobType(e.target.value)} />
            </div>
            <div className="col p-2">
              <input id="jobLocation" className='w-75 form-control form-control-sm' placeholder="Job Location" value={jobLocation} onChange={e => setJobLocation(e.target.value)} />
            </div>
            <div className="col p-2">
              <input id="experience" className='w-75 form-control form-control-sm' placeholder="Experience" value={experience} onChange={e => setExperience(e.target.value)} />
            </div>
            <div className="col text-center">
              <button style={styles.button} onClick={handlePost}>Post</button>
            </div>
          </div>
        </div>
      </div>
      {message && <div id="message" style={styles.message}>{message}</div>}
    </div>
  );
};

export default Recruiter;