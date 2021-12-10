/* eslint-disable no-param-reassign */
// axios settings
import axios from 'axios';
import { POKEMON_URL } from './constants';

const REQUEST_TIMEOUT = 10000;

export const pokemonApi = axios.create({
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

const getUserToken = () => {
  const savedUser = JSON.parse(localStorage.getItem('PokeStoneUser'));
  return savedUser ? savedUser.token : '';
};

pokemonApi.defaults.headers.post['Content-Type'] = 'application/json';
pokemonApi.defaults.headers.common.Authorization = getUserToken();

pokemonApi.interceptors.request.use(
  function (config) {
    const token = getUserToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
export const setAuthToken = (token) => {
  if (token) {
    // applying token
    pokemonApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    // deleting the token from header
    delete pokemonApi.defaults.headers.common.Authorization;
  }
};
