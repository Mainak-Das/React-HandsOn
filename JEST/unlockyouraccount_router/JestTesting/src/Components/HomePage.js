import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    const pageStyle = {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      border: '2px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginTop:'50px'
    };

    const headingStyle = {
      fontSize: '28px',
      color: '#280341',
      marginBottom: '20px',
      borderBottom: '2px solid #280341',
      paddingBottom: '10px',
      textAlign:'left'
    };

    const paragraphStyle = {
      fontSize: '18px',
      color: '#333',
      marginBottom: '10px',
    };

    const listItemStyle = {
      fontSize: '16px',
      color: '#666',
      marginBottom: '10px',
    };

    const location = '123 Main Street, Cityville';
    const classesOffered = 'Ballet, Tap, Jazz, Hip Hop';
    const contactInfo = 'Phone: 555-1234, Email: info@dancingschool.com';

    return (
      <div style={pageStyle}>
        <h2 style={headingStyle}>Welcome, Richard!</h2>
        <p style={paragraphStyle}>Details about Little Mounts Dancing School:</p>
        <ul>
          <li style={listItemStyle}>Location: {location}</li>
          <li style={listItemStyle}>Classes Offered: {classesOffered}</li>
          <li style={listItemStyle}>Contact: {contactInfo}</li>
        </ul>
      </div>
    );
  }
}

export default HomePage;
