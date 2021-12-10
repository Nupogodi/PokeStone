import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Context
import CurrentGameState from 'context/currentGame/state';

// Components
import Footer from 'components/layout/Footer/Footer';
import NavBar from './components/layout/NavBar/index';

// Constants
import { ROUTES } from './constants/routes';

// Pages
import {
  MainPage,
  GamePage,
  ScorePage,
  AboutPage,
  NotFoundPage,
  AuthPage,
} from './pages/index';

// Styles
import 'assets/styles/main.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <CurrentGameState>
        <div className="App">
          <ToastContainer />
          <NavBar />
          <Switch>
            <Route exact path={ROUTES.main.url}>
              <MainPage />
            </Route>
            <Route exact path={ROUTES.auth.url}>
              <AuthPage />
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
          </Switch>
          <Footer />
        </div>
      </CurrentGameState>
    </Router>
  );
};

export default App;
