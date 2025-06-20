import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SongContext = createContext();

const SongProvider = ({ children }) => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await axios.get('http://lmsreact.tekstac.com:3001/songs');
                setSongs(response.data);
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };
        fetchSongs();
    }, []);

    return (
        <SongContext.Provider value={{ songs }}>
            {children}
        </SongContext.Provider>
    );
};

export default SongProvider;