import React, {useState} from 'react';
import styles from './Playlist.module.css'

import Track from '../Track/Track';
import SaveButton from '../SaveButton/SaveButton';

export default function Playlist({ playlist, removeFromPlaylist }) {

    const [userInput, setUserInput] = useState('');
    
        function handleInput(e) {
            setUserInput(e.target.value)
        }
    
    return (
        <>
            <div className={styles.playlistContainer}>
                <h2>Playlist</h2>
                <div className={styles.playlistNameInput}>
                <input type="text" placeholder='Playlist Name ' value={userInput} onChange={handleInput} /><SaveButton />
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
                    ):( <p>Your playlist is empty.</p>)}
                </div>
            </div>
        </>
    );
}