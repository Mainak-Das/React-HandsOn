// Please do not make any changes in the given code template

import React, { useState } from 'react';
import './styles.css';

const CourseDetails = () => {
    const [course, setCourse] = useState('');

    const handleChange = (event) => {
        setCourse(event.target.value);
    };

    return (
        <div>
            <h1>BETA - The Excellence Park</h1>
            <label htmlFor="course">Pick your study path:</label>
            <select id="course" onChange={handleChange}>
                <option value="">Select a course</option>
                <option value="Python">Python</option>
                <option value="ReactJS">ReactJS</option>
                <option value="Angular">Angular</option>
            </select>
            {course && <h4>Choosen Study Path: {course}</h4>}
        </div>
    );
};


export default CourseDetails;
