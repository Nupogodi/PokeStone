import React, { useState, useMemo } from 'react';

// API
import { pokemonApi } from 'utils/api';

// Context & Reducer
import { API_ROUTES, MAX_SELECTED, STAGES_CONFIG } from 'constants/index';
import CurrentGameContext from './context';

// Constants

const CurrentGameState = ({ children }) => {
  const [pending, setPending] = useState(false);

  // Game State
  const [currentGameStage, setCurrentGameStage] = useState(STAGES_CONFIG.init);
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);

  // Methods
  // Selection Stage of the game
  const getPokemons = async (config) => {
    try {
      setPending(true);
      const { limit, page } = config;

      const response = await pokemonApi.get(
        `${API_ROUTES.pokemonDB.url}${API_ROUTES.pokemonDB.pokemons.pokemon.url}?limit=${limit}&page=${page}`,
      );

      const { data } = response;

      const { pokemons } = data;

      setPokemonList(pokemonList.concat(pokemons));

      setPending(false);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  };

  const selectPokemon = (pokemon) => {
    if (
      selectedPokemons.find((obj) => obj.name === pokemon.name) ||
      selectedPokemons.length >= MAX_SELECTED
    ) {
      return;
    }
    setSelectedPokemons(selectedPokemons.concat(pokemon));
  };
  const deselectPokemon = (pokemon) => {
    setSelectedPokemons(
      selectedPokemons.filter(
        (selectedPokemon) => selectedPokemon.name !== pokemon.name,
      ),
    );
  };

  // Memoized methods and states to prevent extra rerendering
  const memoCurrentGameContext = useMemo(
    () => ({
      currentGameStage,
      setCurrentGameStage,
    }),
    [currentGameStage],
  );

  const value = useMemo(
    () => ({
      selectedPokemons,
      setSelectedPokemons,
      pokemonList,
      setPokemonList,
      pending,
      setPending,
      getPokemons,
      selectPokemon,
      deselectPokemon,
    }),
    [currentGameStage, selectedPokemons, pokemonList, pending],
  );
  return (
    <CurrentGameContext.Provider value={value}>
      {children}
    </CurrentGameContext.Provider>
  );
};

export default CurrentGameState;
