import React from 'react';
import { pokemonApi } from './api';

// get a list of pokemons (returns array of names and urls)
const getPokemonList = async (config) => {
  try {
    const { offset = 0, limit = 20 } = config;

    const response = await pokemonApi.get(
      `/pokemon?offset=${offset}&limit=${limit}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// get an array of pokemons
const getPokemons = async (list) => {
  console.log('list', list);
  const pokemonsArray = [];
  const pokemons = await list.results.forEach(async (pokemon) => {
    const response = await getPokemon(pokemon.name);
    pokemonsArray.push(response);
  });

  return pokemonsArray;
};

// get a single pokemon based off the id
const getPokemon = async (id) => {
  try {
    const response = await pokemonApi.get(`/pokemon/${id}`);

    const pokemon = response.data;

    return pokemon;
  } catch (error) {
    console.log(error);
  }
};

export { getPokemonList, getPokemons, getPokemon };
