import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

// components
import PokemonDeck from './components/Game/PokemonDeck/PokemonDeck';
import PokemonCard from './components/Game/pokemonCards/PokemonCard';
// layout
import NavBar from './components/layout/NavBar/index';

//constants
import ROUTES from './constants/routes';

//pages
import {
  MainPage,
  GamePage,
  ScorePage,
  AboutPage,
  NotFoundPage,
} from './pages/index';

import './App.css';

function App() {
  return (
    <Router>
      <CssBaseline>
        <div className='App'>
          {/* <NavBar /> */}
          <Switch>
            {/* <Container maxWidth='sm'> */}
              <Route exact path={ROUTES.main.url}>
                <MainPage />
              </Route>
              <Route exact path={ROUTES.game.url}>
                <GamePage />
              </Route>
              <Route exact path={ROUTES.about.url}>
                <AboutPage />
              </Route>
              <Route exact path={ROUTES.highScores.url}>
                <ScorePage />
              </Route>
              <Route component={NotFoundPage} />
            {/* </Container> */}
          </Switch>
        </div>
      </CssBaseline>
    </Router>
  );
}

export default App;
