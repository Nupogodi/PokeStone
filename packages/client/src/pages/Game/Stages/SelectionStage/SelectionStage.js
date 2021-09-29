import React, { useEffect, useState } from 'react';

// custom hooks
import useRequest from 'hooks/useRequest';
import { pokemonApi } from 'utils/api';
import {
  getPokemonList,
  getPokemons,
  getPokemon,
} from 'utils/pokemonApiRequests';

// local components
import { SearchBar, DisplayPanel, SideBar } from './components/index';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridContainer from 'components/material/components/Grid/GridContainer.js';
import GridItem from 'components/material/components/Grid/GridItem.js';
import Button from 'components/material/components/CustomButtons/Button.js';

import styles from 'assets/styles/jss/material-kit-react/views/landingPage';

const useStyles = makeStyles(styles);

const SelectionStage = () => {
  const [pokemons, setPokemons] = useState([]);

  const config = {
    method: 'get',
  };

  const getPokemons = useRequest({ instance: pokemonApi, url: '/pokemon/1' });

  // useEffect( () => {
  //   const getData =  async () => {
  // const config = {
  //   offset: 0,
  //   limit: 20,
  // };
  // const pokemonList =  await getPokemonList(config);
  // const pokemons = await getPokemons(pokemonList);
  // setPokemons(pokemons);

  //   }

  //   getData()
  // }, []);

  console.log(getPokemons, 'use request poke');
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer>
        {/* <div className={classNames(classes.main, classes.mainRaised)}></div> */}
        <GridItem>
          <SearchBar />
        </GridItem>
        <GridItem>{/* <DisplayPanel pokemons={pokemons} /> */}</GridItem>
        <GridItem>
          <SideBar />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default SelectionStage;

// Divide selection stage into 3 components:

// search panel (nav with filter component)
// filter
// search result
// side bar with chosen pokemons
