import React from 'react';
import styles from './Tracklist.module.css'

import Track from '../Track/Track';

export default function Tracklist({tracks, action, onActionClick}) {
    
    return (
        <>
        <div className={styles.tracklist}>
            {tracks.length > 0 ? ( tracks.map(track => (
                <Track 
                key={track.id} 
                song={track.songName} 
                artist={track.artist} 
                action={action} 
                onActionClick={()=> onActionClick(track)}
                />
                ))
            ) : ( 
                 <p>No results found.</p>
            )}
           
        </div>
        </>
    );
}