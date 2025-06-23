import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1>About Our Song Management App</h1>
      <p>
        Welcome to our song Management App!. This application is designed to help you keep track of your 
        favorite songs from various movies. Wheather you are a movie buff or a music enthusist our app offers 
        a user-friendly interface to manage and vie song details efficiently.
      </p>
    </div>
  );
}

export default About;