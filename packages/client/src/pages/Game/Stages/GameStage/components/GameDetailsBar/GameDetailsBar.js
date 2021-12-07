import React from 'react';

// Styles
import styles from './GameDetailsBar.module.css';

const GameDetailsBar = () => {
  return (
    <div className={styles.gameDetailsBar}>
      <div className={styles.lvlDetail}>Lvl 10</div>
      <div className={styles.scoreDetail}>Score: 1000</div>
    </div>
  );
};

export default GameDetailsBar;
