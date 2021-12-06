import React, { useEffect } from 'react';

// Styles
import styles from './GameDisplay.module.css';

const Slot = () => {
  return (
    <div className={styles.slot}>
      <div className={styles.imgWrapper}> </div>
    </div>
  );
};

const GameDisplay = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles.gameDisplay}>
      <Slot />
      <Slot />
      <Slot />
      <Slot />
      <Slot />
      <Slot />
    </div>
  );
};

export default GameDisplay;
