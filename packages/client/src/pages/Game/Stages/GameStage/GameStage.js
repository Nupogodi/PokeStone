import React from 'react';

// Components
import GameDetailsBar from './components/GameDetailsBar/GameDetailsBar';
import GameDisplay from './components/GameDisplay/GameDisplay';
import PlayerPanel from './components/PlayerPanel/PlayerPanel';

// Styles
import styles from './GameStage.module.css';

const GameStage = () => {
  return (
    <div className={styles.gameStageWindow}>
      <div className={styles.header}>
        <GameDetailsBar />
      </div>
      <div className={styles.body}>
        <GameDisplay />
      </div>
      <div className={styles.footer}>
        <PlayerPanel />
      </div>
    </div>
  );
};

export default GameStage;
