import React,{useState,useEffect} from 'react';
import styles from './App.module.css';

import SearchBar from '../SearchBar/SearchBar';
// import Track from '../Track/Track';
import Dashboard from '../Dashboard/Dashboard';

function App() {

    const [searchResults, setSearchResults] = useState([]);
    const [playlist, setPlaylist] = useState([]);
    
    useEffect(()=> {
        const tracklist = [
            { id: 1, songName: 'Apt apt apt ...', artist: 'Rose & Bruno', album: 'Rose Hits' },
            { id: 2, songName: 'Chk chk chk', artist: 'AR & Rahaman', album: 'ARR Hits' },
            { id: 3, songName: 'Apt apt apt ...', artist: 'Rose & Bruno', album: 'Rose Hits' },
            { id: 4, songName: 'Apt apt apt ...', artist: 'Rose & Bruno', album: 'Rose Hits' },
            { id: 5, songName: 'Apt apt apt ...', artist: 'Rose & Bruno', album: 'Rose Hits' },
            { id: 6, songName: 'Apt apt apt ...', artist: 'Rose & Bruno', album: 'Rose Hits' },
            { id: 7, songName: 'Apt apt apt ...', artist: 'Rose & Bruno', album: 'Rose Hits' },
            { id: 8, songName: 'Apt apt apt ...', artist: 'Rose & Bruno', album: 'Rose Hits' },
            { id: 9, songName: 'Apt apt apt ...', artist: 'Rose & Bruno', album: 'Rose Hits' },
            { id: 10, songName: 'Apt apt apt ...', artist: 'Rose & Bruno', album: 'Rose Hits' },
            { id: 11, songName: 'Apt apt apt ...', artist: 'Rose & Bruno', album: 'Rose Hits' },
            { id: 12, songName: 'Apt apt apt ...', artist: 'Rose & Bruno', album: 'Rose Hits' },
            { id: 13, songName: 'Apt apt apt ...', artist: 'Rose & Bruno', album: 'Rose Hits' },
            { id: 14, songName: 'Apt apt apt ...', artist: 'Rose & Bruno', album: 'Rose Hits' },

        ];
    setSearchResults(tracklist);
    }, [])

    const addToPlaylist = (track) => {
        setPlaylist((prev)=> (!prev.some((t) => t.id === track.id) ? [...prev, track] : prev))
    }

    const removeFromPlaylist = (trackId) => {
        setPlaylist((prev) => prev.filter((track) => track.id !== trackId));
    };
    
    return (
        <>
        <div className={styles.main}>
            <div>
                <h1 className={styles.title}><span className={styles.j}>J</span><span className={styles.a}>a</span><span className={styles.m}>mmm</span><span className={styles.i}>i</span><span className={styles.n}>n</span><span className={styles.g}>g</span></h1>
            </div>
            <SearchBar />
            <Dashboard searchResults={searchResults} playlist={playlist} addToPlaylist={addToPlaylist} removeFromPlaylist={removeFromPlaylist} />
        </div>
        </>
    );
}

export default App;