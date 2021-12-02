import React from 'react';

// Custom Components
import Filter from '../Filter/Filter';

// Styles
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
  const { className } = props;
  return (
    <div className={`${styles.searchBar} ${className}`}>
      <h2 className={styles.title}>Poke Library</h2>
      <Filter />
    </div>
  );
};

export default SearchBar;
