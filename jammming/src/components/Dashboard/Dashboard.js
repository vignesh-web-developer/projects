import React from "react";
import styles from './Dashboard.module.css';

import Tracklist from "../Tracklist/Tracklist";
import Playlist from "../Playlist/Playlist";

export default function Dashboard({ searchResults, playlist, addToPlaylist, removeFromPlaylist }) {

    return (
        <>
        <div className={styles.dashboard}>
        <div className={styles.resultContainer}>
            <h2>Results</h2>
            <Tracklist tracks={searchResults} action='+' onActionClick={addToPlaylist}/>
        </div>
        <Playlist playlist={playlist} removeFromPlaylist={removeFromPlaylist}/>
        </div>
        
        </>
    );
}
