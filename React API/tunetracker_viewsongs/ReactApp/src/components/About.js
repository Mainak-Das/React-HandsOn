import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>About Our Song Management App</h1>
        <p className={styles.description}>
            TuneTracker is a comprehensive application designed to help music enthusiasts 
            organize and manage their favorite songs categorized by movies. With an 
            intuitive interface, users can browse song collections, view details, 
            and add new entries. Our app simplifies song management for everyone.
        </p>
    </div>
    );
};

export default About;