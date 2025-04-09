import React, { useState } from "react";
import styles from "./NewPlaylist.module.css";

import Track from "../Track/Track";
import SaveButton from "../SaveButton/SaveButton";

export default function NewPlaylist({ playlist, removeFromPlaylist }) {
    const [userInput, setUserInput] = useState("");
    
    function handleInput(e) {
        setUserInput(e.target.value);
    }

    return (<>
    <div className="new">
            {/* <h3>New Playlist</h3> */}
            <div className="newlistContainer">
                <div className={styles.playlistNameInput}>
                <input
                    type="text"
                    placeholder="Playlist Name "
                    value={userInput}
                    onChange={handleInput}
                />
                <SaveButton />
                </div>

                <div className={styles.playlist}>
                {playlist.length > 0 ? (
                    playlist.map((track) => (
                    <Track
                        key={track.id}
                        song={track.songName}
                        artist={track.artist}
                        action="-"
                        onActionClick={() => removeFromPlaylist(track.id)}
                    />
                    ))
                ) : (
                    <p>Click + to add songs to the Playlist</p>
                )}
                </div>
            </div>
          </div>
    </>);

}