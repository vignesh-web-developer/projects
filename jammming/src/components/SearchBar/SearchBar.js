import React,{useState} from 'react';
import SearchButton from '../SearchButton/SearchButton';
import styles from './SearchBar.module.css';

export default function SearchBar() {
    const [userInput, setUserInput] = useState('');

    function handleInput(e) {
        setUserInput(e.target.value)
    }

    function handleSubmit() {
        alert(userInput);
    }

    return (
        <>
        <div className={styles.searchBar}>
        <input className={styles.input} type="text" placeholder='Enter Song Name' value={userInput} onChange={handleInput}/>
        <SearchButton onClick={handleSubmit}/>
        </div>
        </>
    );
}