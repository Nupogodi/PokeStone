import React, { useContext, useEffect, useState } from 'react';

//  Context
import CurrentGameContext from 'context/currentGame/context';

// Constants
import {
  MAX_SELECTED,
  ICON_TYPES,
  BTN_STYLES,
  BTN_COLOR,
  STAGES_CONFIG,
  CARD_TEXTURES,
  CARD_STAT_COLORS,
} from 'constants/index';

// Components
import ButtonWrapper from 'components/wrappers/ButtonWrapper/ButtonWrapper';
import Icon from 'components/Icon/Icon';
import NameScroll from 'components/Game/NameScroll/NameScroll';
import Button from 'components/Button/Button';
import PokemonCard from 'components/Game/pokemonCards/PokemonCard';
// Styles
import styles from './SideBar.module.css';

// const PokemonSlot = () => {

//   return (
//   );
// };

const SideBar = ({ className }) => {
  const currentGameContext = useContext(CurrentGameContext);

  return (
    <div className={`${styles.sideBar} ${className}`}>
      <h3 className={styles.title}>Selected Pokemon</h3>
      {currentGameContext.selectedPokemons.length > 0 &&
        currentGameContext.selectedPokemons.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon._id}
              pokemon={pokemon}
              onClick={() => currentGameContext.deselectPokemon(pokemon)}
            />
          );
        })}

      <Button
        className={`${styles.proceedBtn} ${
          currentGameContext.selectedPokemons.length === MAX_SELECTED &&
          styles.showBtn
        }`}
        btnStyle={BTN_STYLES.fill.fillLight}
        btnColor={BTN_COLOR.dark}
        action={() =>
          currentGameContext.setCurrentGameStage(STAGES_CONFIG.game)
        }
        value="Proceed"
      />
    </div>
  );
};

export default SideBar;
