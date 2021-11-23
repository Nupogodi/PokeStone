import React, { useContext, useEffect, useState } from 'react';

//  Context
import CurrentGameContext from 'context/currentGame/context';

// Constants
import { MAX_SELECTED } from 'constants/index';

// Styles
import styles from './SideBar.module.css';

const PokemonSlot = function PokemonSlot({ slot }) {
  if (slot.empty) {
    return <div className={styles.slot}>Pokemon</div>;
  }

  const { pokemon } = slot;

  return <div className={styles.slot}>{pokemon.name}</div>;
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
      <h3 className={styles.title}>Selected Pokemons</h3>
      {Object.entries(slots).map(([key, value]) => {
        return <PokemonSlot key={key} slot={value} />;
      })}
    </div>
  );
};

export default SideBar;
