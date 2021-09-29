// axios settings
// create instances and export them
// create config with endpoints exported to
import axios from 'axios';
import { toast } from 'react-toastify';
import { BACKEND_URL, POKEMON_URL } from './constants.js';

const url = 'https://pokeapi.co/api/v2';
const REQUEST_TIMEOUT = 10000;

const backEndApi = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

const pokemonApi = axios.create({
  baseURL: POKEMON_URL,
  // baseURL: url,
  timeout: REQUEST_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});


export { backEndApi, pokemonApi };
