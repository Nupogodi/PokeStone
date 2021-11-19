// axios settings
import axios from 'axios';
import { POKEMON_URL } from './constants';

const REQUEST_TIMEOUT = 10000;

const pokemonApi = axios.create({
  baseURL: POKEMON_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
  proxy: {
    host: 'localhost',
    port: 5000,
  },
});

// eslint-disable-next-line
export { pokemonApi };
