import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// Layout
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
} from './pages/index';

// styles
import 'assets/styles/main.css';

const App = function () {
  return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
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
        </Switch>
          <Footer />
      </div>
    </Router>
  );
};

export default App;
