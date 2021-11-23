import React from 'react';

// Constants
import { CARD_TEXTURES } from 'constants/index';

// Components
import ButtonWrapper from 'components/wrappers/ButtonWrapper/ButtonWrapper';

// styles
import styles from './PokemonCard.module.css';

const PokemonCard = function PokemonCard(props) {
  const { pokemon, className, onClick } = props;

  const { height, weight, stats, sprites, name, pokeApiID, types } = pokemon;

  //  Stats deconstruction
  const { attack, defense, hp } = stats;

  return (
    <ButtonWrapper onClick={onClick}>
      <div
        className={`${className} ${styles.pokemonCard}`}
        style={{
          backgroundImage: `url(${CARD_TEXTURES[types[0].name].texture})`,
        }}
      >
        <div className={styles.pokemonCard_body}>
          <p className={styles.count}>#{pokeApiID}</p>
          <div className={styles.info_cardCover}>
            <img
              src={sprites.dream_world || sprites.front_default}
              alt={`pokemon ${name}`}
            />
          </div>
          <div className={styles.pokemonCard_body__content}>
            <div className={styles.info}>
              <div className={styles.details}>
                <h3 className={styles.title}>{name}</h3>
                <p className={styles.label}>
                  Height: <span className={styles.marginLeft}>{height}m</span>
                </p>
                <p className={styles.label}>
                  Weight:{' '}
                  <span className={styles.marginLeft}>
                    {weight}
                    kg
                  </span>
                </p>
              </div>
            </div>
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
                      <p>{type.name}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className={styles.pokemonCard_footer}>
          <div className={styles.stats}>
            <div className={`${styles.stats__subStats} ${styles.subGrid}`}>
              <div className={styles.statsWrapper}>
                <div className={styles.stats__label}>Max CP</div>
                <div className={styles.stats__bar}>
                  <div className={styles.statValue} />
                  {attack.base_stat}
                </div>
              </div>
              <div className={styles.statsWrapper}>
                <div className={styles.stats__label}>Attack</div>
                <div className={styles.stats__bar}>{attack.base_stat}</div>
              </div>
              <div className={styles.statsWrapper}>
                <div className={styles.stats__label}>Defense</div>
                <div className={styles.stats__bar}>{defense.base_stat}</div>
              </div>
              <div className={styles.statsWrapper}>
                <div className={styles.stats__label}>Stamina</div>
                <div className={styles.stats__bar}>{hp.base_stat}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ButtonWrapper>
  );
};

export default PokemonCard;
