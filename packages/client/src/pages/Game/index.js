import React, { useMemo, useContext } from 'react';

// Context
import CurrentGameContext from 'context/currentGame/context';

// Constants
import { STAGES_CONFIG } from 'constants/index';

// Game Stages
import InitStage from 'pages/Game/Stages/InitStage/InitStage';
import SelectionStage from 'pages/Game/Stages/SelectionStage/SelectionStage';
import GameStage from 'pages/Game/Stages/GameStage/GameStage';
import EndGameStage from 'pages/Game/Stages/EndGameStage/EndGameStage';

// Styles
import styles from './GamePage.module.css';

const GamePage = () => {
  const currentGameContext = useContext(CurrentGameContext);

  const { currentGameStage, setCurrentGameStage } = currentGameContext;

  const CurrentStageComponent = useMemo(() => {
    const STAGES_COMPONENTS_CONFIG = {
      [STAGES_CONFIG.init]: InitStage,
      [STAGES_CONFIG.selection]: SelectionStage,
      [STAGES_CONFIG.game]: GameStage,
      [STAGES_CONFIG.end]: EndGameStage,
    };

    return STAGES_COMPONENTS_CONFIG[currentGameStage];
  }, [currentGameStage]);

  return (
    <div className={styles.gameWindow}>
      <CurrentStageComponent setCurrentGameStage={setCurrentGameStage} />
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
  );
};

export default GamePage;
