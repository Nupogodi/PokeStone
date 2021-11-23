import React, { useState, useMemo } from 'react';

// Context
import CurrentGameState from 'context/currentGame/state';

// Constants
import { STAGES_CONFIG } from 'constants/game/gameStages';

// Game Stages for this page
import InitStage from './Stages/InitStage/InitStage';
import SelectionStage from './Stages/SelectionStage/SelectionStage';
import GameStage from './Stages/GameStage/GameStage';
import EndGameStage from './Stages/EndGameStage/EndGameStage';

// Styles
import styles from './GamePage.module.css';

const STAGES_COMPONENTS_CONFIG = {
  [STAGES_CONFIG.init]: InitStage,
  [STAGES_CONFIG.selection]: SelectionStage,
  [STAGES_CONFIG.game]: GameStage,
  [STAGES_CONFIG.end]: EndGameStage,
};

const GamePage = function () {
  const [currentGameStage, setCurrentGameStage] = useState(STAGES_CONFIG.init);

  const CurrentStageComponent = useMemo(() => {
    return STAGES_COMPONENTS_CONFIG[currentGameStage];
  }, [currentGameStage]);

  return (
    <CurrentGameState>
      <div className={styles.gameWindow}>
        <CurrentStageComponent />
        <button
          type="button"
          style={{ position: 'absolute', top: 0, right: 0 }}
          onClick={() => {
            setCurrentGameStage(STAGES_CONFIG.selection);
          }}
        >
          Next game stage
        </button>
      </div>
    </CurrentGameState>
  );
};

export default GamePage;
