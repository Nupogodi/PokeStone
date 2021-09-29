import React, { useState, useEffect } from 'react';
// material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// material ui components
import Card from 'components/material/components/Card/Card.js';
import CardHeader from 'components/material/components/Card/CardHeader.js';
import CardBody from 'components/material/components/Card/CardBody.js';

import { backEndApi, pokemonApi } from '../../../utils/api.js';
import useRequest from 'hooks/useRequest';

// styles
import {
  cardTitle,
  cardLink,
  cardSubtitle,
} from 'assets/styles/jss/material-kit-react.js';
import imagesStyles from 'assets/styles/jss/material-kit-react/imagesStyles.js';
import style from './PokemonCard.module.css';

import axios from 'axios'

const styles = {
  ...imagesStyles,
  cardTitle,
  cardLink,
  cardSubtitle,
};

const useStyles = makeStyles(styles);

const PokemonCard =  (props) => {

  
  const {pokemon} = props;

  
  
  
  const {height, weight, stats, sprites, name} = pokemon;
  console.log('pokemon', pokemon)

  const classes = useStyles();

  return (
    <Card style={{ width: '10rem' }}>
      <CardHeader>
        <img
          style={{ width: '100%', display: 'block' }}
          className={classes.imgCardTop}
          src={sprites.front_default}
          alt={name}
        />
        <h3 className={classes.cardTitle}>{name}</h3>
      </CardHeader>
      <CardBody>
        <div className='stats'>
          {stats.map((stat) => {
            return (
              <div className='stat-wrapper'>
                <div className='stat-label'>{stat.stat.name}</div>
                <div className='stat-value'>{stat.stat.base_stat}</div>
              </div>
            );
          })}
        </div>
      </CardBody>
    </Card>
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardActionArea className={style['card-action']}>
    //     <CardMedia
    //       className={style['card-media']}
    //       component="img"
    //       height="100px"
    //       image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    //       alt="green iguana"
    //     />
    //     <CardContent>
    //       <Typography className={style['typography']} gutterBottom variant="h5" component="div" sx={{textAlign: 'center'}}>
    //         Mew Two
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         Lizards are a widespread group of squamate reptiles, with over 6,000
    //         species, ranging across all continents except Antarctica
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Button size="small" color="primary">
    //       Share
    //     </Button>
    //   </CardActions>
    // </Card>
  );
};

export default PokemonCard;

