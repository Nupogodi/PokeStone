import React, {
  useState,
  useEffect,
  useContext,
  useRef,
} from 'react';

// Context
import CurrentGameContext from 'context/currentGame/context';

// Components
import PokemonCard from 'components/Game/pokemonCards/PokemonCard';

// Styles
import styles from './DisplayPanel.module.css';

const DisplayPanel = function (props) {
  const { className } = props;
  const currentGameContext = useContext(CurrentGameContext);

  // Select Pokemons

  // Request limit & page in DB
  const [pending, setPending] = useState(false);
  const [currentLimit, setCurrentLimit] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const scroll = (e) => {
      const element = e.target;
      if (element.scrollHeight - element.scrollTop <= 900) {
        return setCurrentPage(currentPage + 1);
      }
    };

    if (wrapperRef.current) {
      wrapperRef.current.addEventListener('scroll', scroll);
    }
    return () => {
      if (wrapperRef.current) {
        wrapperRef.current.removeEventListener('scroll', scroll);
      }
    };
  }, [wrapperRef]);

  // Request pokemon list once component loads
  useEffect(() => {
    if (pending) {
      return false;
    }

    const config = {
      limit: currentLimit,
      page: currentPage,
    };
    currentGameContext.getPokemons(config);
  }, [currentPage, pending]);
  const { pokemonList } = currentGameContext;

  return (
    <div
      ref={wrapperRef}
      className={`${styles.displayPanel} ${className}`}
    >
      {pokemonList.map((pokemon) => {
        return (
          <PokemonCard
            onClick={() => currentGameContext.selectPokemon(pokemon)}
                pokemon={pokemon}
            key={pokemon._id}
          />
        );
      })}
      </div>
  );
};

export default DisplayPanel;
