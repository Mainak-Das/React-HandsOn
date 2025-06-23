
import React, { useState, useContext } from 'react';
import { SongContext } from '../context/SongsContext';
import styles from './AddSong.module.css';

const AddSong = () => {
  const { songs, addSong } = useContext(SongContext);

  const [formData, setFormData] = useState({
    movieName: '',
    song: '',
    size: '',
    singers: '',
    duration: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(formData);
    setFormData({
      movieName: '',
      song: '',
      size: '',
      singers: '',
      duration: ''
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Add Song</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
            Movie Name:
        <input
          type="text"
          name="movieName"
          value={formData.movieName}
          onChange={handleChange}
          placeholder="Movie Name"
          required
        />
        </label>
        <label>
            Song:
        <input
          type="text"
          name="song"
          value={formData.song}
          onChange={handleChange}
          placeholder="Song"
          required
        />
        </label>
        <label>
            Size:
        <input
          type="text"
          name="size"
          value={formData.size}
          onChange={handleChange}
          placeholder="Size"
          required
        />
        </label>
        <label>
            Singers:
        <input
          type="text"
          name="singers"
          value={formData.singers}
          onChange={handleChange}
          placeholder="Singers"
          required
        />
        </label>
        <label>
            Duration:
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="Duration"
          required
        />
        </label>
        <button type="submit" data-testid="submit-button">Add Song</button>
      </form>

      <div className={styles.songListContainer}>
        <h2 className={styles.songListHeader}>Available Songs</h2>
        <table className={styles.songTable}>
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Song</th>
              <th>Singers</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr key={index}>
                <td>{song.movieName}</td>
                <td>{song.song}</td>
                <td>{song.singers}</td>
                <td>{song.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddSong;