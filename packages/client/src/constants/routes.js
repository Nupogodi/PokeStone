import { ICON_TYPES } from 'constants/index';

export const ROUTES = {
  main: {
    url: '/',
    title: 'Main Page',
  },
  game: { url: '/play', title: 'Game' },
  highScores: {
    url: '/highscores',
    title: 'High Score',
  },
  about: { url: '/about', title: 'About' },
  auth: { url: '/auth', title: 'Auth' },
};

export const NAVBAR_MENU = {
  menu: {
    main: {
      url: ROUTES.main.url,
      title: 'Main Page',
      icon: ICON_TYPES.home,
    },
    game: { url: ROUTES.game.url, title: 'Game', icon: ICON_TYPES.game },
    auth: {
      signin: {
        title: 'Sign In',
        icon: ICON_TYPES.signin,
        url: ROUTES.auth.url,
      },
      signout: {
        title: 'Sign Out',
        icon: ICON_TYPES.signout,
      },
    },
  },
  subMenu: {
    head: {
      title: 'More',
      icon: ICON_TYPES.ellipsis,
    },
    content: {
      highScores: {
        url: ROUTES.highScores.url,
        title: 'High Score',
        icon: ICON_TYPES.highScore,
      },
      about: { url: ROUTES.about.url, title: 'About', icon: ICON_TYPES.about },
    },
  },
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
  auth: {
    signin: {
      title: 'Sign in',
      url: '/auth/signin',
    },
    signup: {
      title: 'Sign up',
      url: '/auth/signup',
    },
  },
  users: {
    getUser: '/users',
    getUsers: '/users/top',
    updateUser: '/users',
  },
};
