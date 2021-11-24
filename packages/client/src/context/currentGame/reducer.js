// Types
import {
  SET_POKEMONS,
  ADD_POKEMONS,
  SELECT_POKEMON,
  DESELECT_POKEMON,
  SET_PENDING,
} from './types';

const CurrentGameReducer = (state, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemonList: action.payload,
      };
    case ADD_POKEMONS:
      return {
        ...state,
        pokemonList: state.pokemonList.concat(action.payload.pokemons),
      };

    case SELECT_POKEMON:
      return {
        ...state,
        selectedPokemons: state.selectedPokemons.concat(action.payload),
      };

    case DESELECT_POKEMON:
      return {
        ...state,
        selectedPokemons: state.selectedPokemons.filter(
          (pokemon) => pokemon.name !== action.payload.name,
        ),
      };
    case SET_PENDING:
      return {
        ...state,
        pending: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default CurrentGameReducer;
