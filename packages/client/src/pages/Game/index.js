import React, { useState, useEffect, useMemo } from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
// core components
import Header from 'components/material/components/Header/Header.js';
import Footer from 'components/material/components/Footer/Footer.js';
import GridContainer from 'components/material/components/Grid/GridContainer.js';
import GridItem from 'components/material/components/Grid/GridItem.js';
import Button from 'components/material/components/CustomButtons/Button.js';
import Parallax from 'components/material/components/Parallax/Parallax.js';

// game core components

// sections for this page
import HeaderLinks from 'components/material/components/Header/HeaderLinks.js';

// Game Stages for this page
import InitStage from './Stages/InitStage/InitStage.js';
import SelectionStage from './Stages/SelectionStage/SelectionStage.js';
import GameStage from './Stages/GameStage/GameStage.js';
import EndGameStage from './Stages/EndGameStage/EndGameStage.js';

import styles from 'assets/styles/jss/material-kit-react/views/landingPage';
import typographyStyle from 'assets/styles/jss/material-kit-react/components/typographyStyle.js';

import { pokemonApi } from '../../utils/api';
import { STAGES_CONFIG } from 'constants/game/gameStages';
import useRequest from '../../hooks/useRequest';

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

const STAGES_COMPONENTS_CONFIG = {
  [STAGES_CONFIG.init]: InitStage,
  [STAGES_CONFIG.selection]: SelectionStage,
  [STAGES_CONFIG.game]: GameStage,
  [STAGES_CONFIG.end]: EndGameStage,
};

const GamePage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  const [currentGameStage, setCurrentGameStage] = useState(STAGES_CONFIG.init);

  const CurrentStageComponent = useMemo(() => {
    return STAGES_COMPONENTS_CONFIG[currentGameStage];
  }, [currentGameStage]);

  return (
    <div>
      <Header
        color='transparent'
        routes={dashboardRoutes}
        brand='PokeStone'
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax
        // style={{ height: '100vh' }}
        filter
        image={require('assets/img/pokemon-hero-3.jpg').default}
      >
      </Parallax>
        <div className={classes.container}>
          <GridContainer>
              <div className={classNames(classes.main, classes.mainRaised)}>
                <CurrentStageComponent classes={classes} />
              </div>
            <GridItem>
            </GridItem>
          </GridContainer>
        </div>
      <Footer />
              <button onClick={() => {
                setCurrentGameStage(STAGES_CONFIG.selection)
              }}>Next game stage</button>
    </div>
  );
};

export default GamePage;
