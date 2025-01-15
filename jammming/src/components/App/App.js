import React from 'react';
import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';

function App() {
    return (
        <>
        <div className={styles.main}>
            <div>
                <h1 className={styles.title}>Jammming</h1>
            </div>
            <div>
                <SearchBar />
            </div>
        </div>
        </>
    );
}

export default App;