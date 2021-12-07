import React from 'react';

// Components
import ButtonWrapper from 'components/wrappers/ButtonWrapper/ButtonWrapper';

// Styles
import styles from './PokemonDeck.module.css';

const PokemonDeck = () => {
  return (
    <div className={styles.pokemonDeck}>
      <div className={styles.controls}>
        <ButtonWrapper>
          <h3>Cards</h3>
        </ButtonWrapper>
        <ButtonWrapper>
          <h3>Items</h3>
        </ButtonWrapper>
      </div>
    </div>
  );
};

export default PokemonDeck;
