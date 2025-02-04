import React from 'react';

// import Tracklist from '../Tracklist/Tracklist';
// import Playlist from '../Playlist/Playlist';
import styles from './Track.module.css';

export default function Track({ song, artist, action, onActionClick }) {

   
    
   
    return (
        <> 
        <div className={styles.trackContainer}>
                    <div className={styles.trackContent}>
                        <div className={styles.song}>{song}</div>
                        <div className={styles.artist}>{artist}</div>
                    </div>
                    <div className={styles.action} onClick={onActionClick}><p>{action}</p></div>
        </div>
        </>
    );
}