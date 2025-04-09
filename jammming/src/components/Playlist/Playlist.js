import React from "react";
import styles from "./Playlist.module.css";
// import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";

import NewPlaylist from "../NewPlaylist/NewPlaylist";

export default function Playlist({ playlist, removeFromPlaylist }) {
  

  return (
    <>
      <div className={styles.playlistContainer}>
        <h2>Playlist</h2>
        <div className={styles.tabs}>
          <div className={styles.navButton}>
            <div className={`${styles.createNew} ${styles.button}`}>Create New Playlist </div>
            <div className={`${styles.saved} ${styles.button}`}>Saved Playlist </div>
          </div>
          
         <NewPlaylist playlist={playlist} removeFromPlaylist={removeFromPlaylist}/>
        </div>
      </div>
    </>
  );
}
