import React, { useState } from 'react';

// API
import { pokemonApi } from 'utils/api';

// Context & Reducer
import { API_ROUTES, MAX_SELECTED, STAGES_CONFIG } from 'constants/index';
import CurrentGameContext from './context';

// Constants

const CurrentGameState = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState(null);
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
  return (
    <CurrentGameContext.Provider
      // eslint-disable-next-line
      value={{
        // users,
        // user,
        pending,
        currentGameStage,
        setCurrentGameStage,
        selectedPokemons,
        pokemonList,
        getPokemons,
        selectPokemon,
        deselectPokemon,
      }}
    >
      {children}
    </CurrentGameContext.Provider>
  );
};

export default CurrentGameState;
