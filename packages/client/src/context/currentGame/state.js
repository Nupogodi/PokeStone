import React, { useReducer } from 'react';

// API
import { pokemonApi } from 'utils/api';

// Context & Reducer
import { API_ROUTES, MAX_SELECTED } from 'constants/index';
import CurrentGameContext from './context';
import CurrentGameReducer from './reducer';

// Types
import {
  ADD_POKEMONS,
  SELECT_POKEMON,
  DESELECT_POKEMON,
  SET_PENDING,
} from './types';

// Constants

const CurrentGameState = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    selectedPokemons: [],
    currentGameStage: null,
    pokemonList: [],
    pending: false,
  };

  const [state, dispatch] = useReducer(CurrentGameReducer, initialState);

  // Methods

  // Selection Stage of the game
  const getPokemons = async (config) => {
    try {
      dispatch({
        type: SET_PENDING,
        payload: true,
      });
      const { limit, page } = config;

      const response = await pokemonApi.get(
        `${API_ROUTES.pokemonDB.url}${API_ROUTES.pokemonDB.pokemons.pokemon.url}?limit=${limit}&page=${page}`,
      );

      const { data } = response;

      const { pokemons } = data;

      dispatch({
        type: ADD_POKEMONS,
        payload: {
          pokemons,
        },
      });

      dispatch({
        type: SET_PENDING,
        payload: false,
      });
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  };

  const selectPokemon = (pokemon) => {
    if (
      state.selectedPokemons.find((obj) => obj.name === pokemon.name) ||
      state.selectedPokemons.length >= MAX_SELECTED
    ) {
      return;
    }

    dispatch({
      type: SELECT_POKEMON,
      payload: pokemon,
    });
  };
  const deselectPokemon = (pokemon) => {
    dispatch({
      type: DESELECT_POKEMON,
      payload: pokemon,
    });
  };
  return (
    <CurrentGameContext.Provider
      // eslint-disable-next-line
      value={{
        users: state.users,
        user: state.user,
        pending: state.pending,
        selectedPokemons: state.selectedPokemons,
        pokemonList: state.pokemonList,
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
