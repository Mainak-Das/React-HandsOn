import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SongContext = createContext();

const SongProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get('http://lmsreact.tekstac.com:3001/songs')
      .then((res) => setSongs(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addSong = (song) => {
    axios
      .post('http://lmsreact.tekstac.com:3001/songs', song)
      .then((res) => setSongs((prev) => [...prev, res.data]))
      .catch((err) => console.log(err));
  };

  return (
    <SongContext.Provider value={{ songs, addSong }}>
      {children}
    </SongContext.Provider>
  );
};

export default SongProvider;
