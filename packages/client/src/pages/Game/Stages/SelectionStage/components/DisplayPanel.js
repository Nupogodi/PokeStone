import React, { Fragment, useState, useEffect } from 'react';
import CardBody from 'components/material/components/Card/CardBody.js';
import Button from 'components/material/components/CustomButtons/Button.js';
import GridContainer from 'components/material/components/Grid/GridContainer.js';
import GridItem from 'components/material/components/Grid/GridItem.js';
import PokemonCard from 'components/Game/pokemonCards/PokemonCard';

import { pokemonApi } from 'utils/api';

const DisplayPanel = (props) => {
  const [tempPoke, setTempPoke] = useState({});

  useEffect(() => {
    const get = () => pokemonApi.get('/pokemon/1').then((response) => {
      setTempPoke(response.data);
    });

    get()

  }, []);

  const { pokemons } = props;

  console.log(pokemons, 'display panel');

  return (
    <Fragment>
      <GridContainer>
        <PokemonCard pokemon={tempPoke} />
        {/* {pokemons.map((pokemon) => {
            <GridItem>
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            </GridItem>
        })} */}
      </GridContainer>
    </Fragment>
  );
};

export default DisplayPanel;
