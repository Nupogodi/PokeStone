export const ROUTES = {
  main: {
    url: '/',
    title: 'Main Page',
  },
  highScores: {
    url: '/highscores',
    title: 'High Score',
  },
  game: { url: '/play', title: 'Game' },
  about: { url: '/about', title: 'About' },
};

export const API_ROUTES = {
  pokemonDB: {
    url: '/pokemonDB',
    items: {},
    pokemons: {
      pokemon: {
        title: 'Pokemon',
        url: '/pokemon',
      },
      move: {
        title: 'Move',
        url: '/move',
      },
      species: {
        title: 'Species',
        url: '/species',
      },
      type: {
        title: 'Type',
        url: '/type',
      },
      ability: {
        title: 'Ability',
        url: '/ability',
      },
    },
  },
  users: {},
};
