import React from 'react';

// –°omponents
import { SearchBar, DisplayPanel, SideBar } from './components/index';

// styles
import styles from './SelectionStage.module.css';

const SelectionStage = ({ setCurrentGameStage }) => {
  return (
    <div className={styles.contentGrid}>
      <div className={styles.header}>
        <SearchBar />
      </div>
      <div className={styles.main}>
        <DisplayPanel />
      </div>
      <div className={styles.sideBar}>
        <SideBar />
      </div>
    </div>
  );
};

export default SelectionStage;
