import React, { useContext } from 'react';
import { SongContext } from '../context/SongsContext';
import styles from './Songs.module.css';

const Songs = () => {
    const { songs } = useContext(SongContext);

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Songs</h1>
            {/* Implement your code here. Make use of required styles from the Songs.module.css */}
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>Movie Name</th>
                        <th className={styles.th}>Song</th>
                        <th className={styles.th}>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song, index) => (
                        <tr key={index} className={styles.tr}>
                            <td className={styles.td}>{song.movieName}</td>
                            <td className={styles.td}>{song.song}</td>
                            <td className={styles.td}>{song.duration}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Songs;