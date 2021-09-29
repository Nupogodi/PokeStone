import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from '../pokemonCards/PokemonCard';
import { backendApi, pokemonApi } from '../../../utils/api';

const PokemonDeck = () => {
  const [chosenPokemons, setChosenPokemons] = useState([]);

  useEffect(() => {
    const getPokemonList = async () => {
      const response = await pokemonApi.get('/');
      console.log(pokemonApi);
      console.log(response);
    };

    getPokemonList();

  }, []);


  // key = pokemon id
  return (
    <div>
      {chosenPokemons.map((pokemon, index) => {
        <PokemonCard key />;
      })}
    </div>
  );
};

export default PokemonDeck;
