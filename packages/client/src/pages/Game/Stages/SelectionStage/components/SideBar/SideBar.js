import React, { useContext, useEffect, useState } from 'react';

//  Context
import CurrentGameContext from 'context/currentGame/context';

// Constants
import { MAX_SELECTED, ICON_TYPES } from 'constants/index';

// Components
import ButtonWrapper from 'components/wrappers/ButtonWrapper/ButtonWrapper';
import Icon from 'components/Icon/Icon';
import NameScroll from 'components/Game/NameScroll/NameScroll';
// Styles
import styles from './SideBar.module.css';

const PokemonSlot = function PokemonSlot({ slot = null }) {
  if (slot === null || slot.empty) {
    return (
      <div className={styles.slot}>
        <div className={styles.slot__imgWrapper}>Empty</div>
        <NameScroll
          className={styles.nameScroll}
          name={null}
          viewBoxHeight="400"
          viewBoxWidth="600"
        />
        <div className={styles.slot__stats}>Content</div>
      </div>
    );
  }

  const { pokemon, action } = slot;

  return (
    <ButtonWrapper onClick={action}>
      <div className={styles.slot}>
        <div className={styles.slot__imgWrapper}>
          <img src={pokemon.sprites.dream_world} />
        </div>
        <NameScroll
          className={styles.nameScroll}
          name={pokemon.name}
          viewBoxHeight="400"
          viewBoxWidth="600"
        />
        <div className={styles.slot__stats}>
          {Object.entries(pokemon.stats).map(([key, value]) => {
            if (key === 'hp' || key === 'attack' || key === 'defense') {
              return (
                <div className={styles.slot__stat}>
                  <Icon iconType={ICON_TYPES[key]} />
                  <p className={styles.stat__value}>{value.base_stat}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </ButtonWrapper>
  );
};

const SideBar = function SideBar({ className }) {
  const currentGameContext = useContext(CurrentGameContext);
  const [slots, setSlots] = useState({});

  //  Refactor:
  // Create global context array with nulls equal to MAX_SELECTED
  // Reassign array[desired index] from null to pokemon
  useEffect(() => {
    const createSlots = (maxQuantity) => {
      const emptySlots = {};
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < maxQuantity; i++) {
        emptySlots[i] = {
          pokemon: null,
          empty: true,
          action: null,
        };
      }
      setSlots(emptySlots);
    };
    createSlots(MAX_SELECTED);
  }, []);

  useEffect(() => {
    const emptySlot = (index) => {
      setSlots({
        ...slots,
        [index]: {
          pokemon: null,
          empty: true,
          action: null,
        },
      });
    };

    if (currentGameContext.selectedPokemons.length > 0) {
      currentGameContext.selectedPokemons.map((selectedPokemon, index) => {
        return setSlots({
          ...slots,
          [index]: {
            pokemon: selectedPokemon,
            empty: false,
            action: () => {
              currentGameContext.deselectPokemon(selectedPokemon);
              emptySlot(index);
            },
          },
        });
      });
    }
    // eslint-disable-next-line
  }, [currentGameContext.selectedPokemons]);

  return (
    <div className={`${styles.sideBar} ${className}`}>
      {/* <h3 className={styles.title}>Selected Pokemons</h3> */}
      {Object.entries(slots).map(([key, value]) => {
        return <PokemonSlot key={key} slot={value} />;
      })}
    </div>
  );
};

export default SideBar;
