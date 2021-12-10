import React from 'react';
import { useHistory } from 'react-router-dom';

// Auth
import { useAuth } from 'hooks/useAuth';

// Constants
import { BTN_TYPES, BTN_STYLES, BTN_COLOR } from 'constants/utils';
import { ROUTES } from 'constants/routes';

// Components
import Button from 'components/Button/Button';

// Styles
import styles from './index.module.css';

const MainPage = () => {
  const {
    state: { isAuthenticated },
  } = useAuth();

  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  };

  return (
    <div className={styles.mainPage}>
      <div className={`${styles.heroContent} ${styles.grid}`}>
        <div className={styles.textContent}>
          <h1>PokeStone</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            officia dignissimos assumenda praesentium odit unde, quis nostrum
            amet possimus maxime maiores nulla dolorum rerum aspernatur?
          </p>
          {isAuthenticated ? (
            <Button
              btnType={BTN_TYPES.button}
              btnStyle={BTN_STYLES.outline.outlineDark}
              btnColor={BTN_COLOR.dark}
              onClick={() => routeChange(ROUTES.game.url)}
            >
              Play
            </Button>
          ) : (
            <Button
              btnType={BTN_TYPES.button}
              btnStyle={BTN_STYLES.outline.outlineDark}
              btnColor={BTN_COLOR.dark}
              onClick={() => routeChange(ROUTES.auth.url)}
            >
              Sign in
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
