import React from 'react';

// Components
import PokemonDeck from './components/PokemonDeck/PokemonDeck';

// Styles
import styles from './PlayerPanel.module.css';

const PlayerPanel = (props) => {
  return (
    <div className={styles.playerPanel}>
      <div className={styles.pokemonDeck}>
        <PokemonDeck />
      </div>
    </div>
  );
};

export default PlayerPanel;
