import React from 'react';
import { IoSearch } from "react-icons/io5";
import styles from './SearchButton.module.css';

function SearchButton(props){
    return (
        <>
        <button className={styles.icon} onClick={props.onClick}><IoSearch /></button>
        </>
    );
}

export default SearchButton;