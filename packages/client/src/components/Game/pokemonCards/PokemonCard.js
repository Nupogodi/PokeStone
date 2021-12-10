/* eslint-disable no-unreachable */
import React from 'react';

// Constants
import { CARD_TEXTURES, CARD_STAT_COLORS } from 'constants/index';

// Components
import ButtonWrapper from 'components/wrappers/ButtonWrapper/ButtonWrapper';

// styles
import styles from './PokemonCard.module.css';

const PokemonCard = (props) => {
  const { pokemon = null, className, onClick } = props;

  const { stats, sprites, name, types } = pokemon;

  return (
    <ButtonWrapper onClick={onClick}>
      <div className={`${className} ${styles.pokemonCard}`}>
        <div className={styles.info_cardCover}>
          <img
            src={sprites.dream_world || sprites.front_default}
            alt={`pokemon ${name}`}
          />
        </div>
        <div className={styles.pokemonCard_body}>
          <div className={styles.details}>
            <h2 className={styles.title}>{name}</h2>
            <ul className={styles.types}>
              {types.length > 0 &&
                types.map((type) => {
                  return (
                    <li
                      className={styles.type}
                      key={type._id}
                      style={{
                        backgroundColor: CARD_TEXTURES[type.name].color,
                        color: '#fff',
                      }}
                    >
                      <p className="small">{type.name}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className={`${styles.stats} small`}>
            {Object.entries(stats).map(([key, value]) => {
              if (
                key === 'attack' ||
                key === 'defense' ||
                key === 'hp' ||
                key === 'speed'
              ) {
                return (
                  <div key={key} className={styles.statsWrapper}>
                    <div className={styles.stats__label}>
                      {key === 'hp' ? 'Stamina' : key}
                    </div>
                    <div className={styles.statValue}>{value.base_stat}</div>
                    <div className={styles.stats__bar}>
                      <div
                        className={styles.stats__bar__value}
                        style={{
                          width: `calc( ${Math.round(
                            (value.base_stat / 250) * 100,
                          )}%)`,
                          backgroundColor: CARD_STAT_COLORS[key],
                        }}
                      />
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </ButtonWrapper>
  );
};

export default PokemonCard;
