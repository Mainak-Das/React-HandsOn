import React, {useState, useEffect } from 'react';
import './style.css';


export default function Registration() {
    //   Initialize the state variables
    const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || '');
    const [lastName, setLastName] = useState(localStorage.getItem('lastName') || '');
    const [email, setEmail] = useState(localStorage.getItem('email') || '');
    const [city, setCity] = useState('');
    const [activity, setActivity] = useState('');
    const [message, setMessage] = useState('');


    // Implement the event handler functions for the respective fields

    // Use the useEffect hook to store the values of firstName, lastName, and email in localStorage
    // Update localStorage whenever firstName, lastName, or email changes
    useEffect(() => {
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);
    }, [firstName, lastName, email]);

    // Handle input changes
    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };

    // Handle form submission
    const handleSubmit = () => {
        setMessage(`Hello ${firstName} ${lastName}, your registration has been confirmed for the ${activity} activity.`);
    };
 

    return (
        <div>
            <h2>Sun Shine Club Registration Form</h2>
            <table>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Email Id</td>
                        <td>
                            <select
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            >
                                <option value="">--Select Email--</option>
                                <option value="abc@example.com">abc@example.com</option>
                                <option value="xyz@example.com">xyz@example.com</option>
                                <option value="pqr@example.com">pqr@example.com</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>
                            <input
                                type="text"
                                id="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Activity Name</td>
                        <td>
                            <input
                                type="text"
                                id="activity"
                                value={activity}
                                onChange={(e) => setActivity(e.target.value)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <button id="submit" onClick={handleSubmit}>
                Submit
            </button>

            <div id="result">{message}</div>
        </div>
    );
}
