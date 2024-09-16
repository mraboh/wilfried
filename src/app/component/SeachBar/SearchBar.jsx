'use client'
import {useState} from 'react'
import styles from './SearchBar.module.css'

const SearchBar = () => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleSearchBar = () => {
          setIsOpen(!isOpen);
        };


  return (
    <div className={styles.contain}>
        <div className={styles.content}>
    <input className={styles.input} type="text" placeholder="recherche d'une recette..." />
    </div>

    <button className={styles.button} onClick={toggleSearchBar}>OK</button>
  </div>
  )
}

export default SearchBar