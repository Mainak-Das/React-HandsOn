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

const JobSeeker = () => {
    const [name, setName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [qualification, setQualification] = useState('');
    const [experience, setExperience] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = () => {
        setMessage(`${name}, Your profile has been registered successfully`);
    };

    return (
        <div className='container w-50'>
            <div className="card">
                <div>
                    <h4 style={{ height: "50px", color: 'white', padding: "10px", backgroundColor: '#81807E' }}>Job Seeker</h4>
                </div>

                <div className="card-body">
                    <div className="col align-items-center">
                        <div className="p-2">
                            <input
                                type="text"
                                id="name"
                                placeholder="User Name"
                                className='w-75 form-control form-control-sm'
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="p-2">
                            <input
                                type="text"
                                id="emailId"
                                placeholder="Email Id"
                                className='w-75 form-control form-control-sm'
                                value={emailId}
                                onChange={e => setEmailId(e.target.value)}
                            />
                        </div>
                        <div className="p-2">
                            <input
                                type="text"
                                id="qualification"
                                placeholder="Qualification"
                                className='w-75 form-control form-control-sm'
                                value={qualification}
                                onChange={e => setQualification(e.target.value)}
                            />
                        </div>
                        <div className="p-2">
                            <input
                                type="text"
                                id="experience"
                                placeholder="Experience"
                                className='w-75 form-control form-control-sm'
                                value={experience}
                                onChange={e => setExperience(e.target.value)}
                            />
                        </div>
                        <div className="col text-center">
                            <button
                                style={{ backgroundColor: '#FDC30D', height: '40px', textAlign: 'center', width: '100px' }}
                                onClick={handleRegister}
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div
                id="message"
                style={
                    styles.message
                }
            >
                {message}
            </div>



        </div>
    );
};

export default JobSeeker;