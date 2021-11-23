import React from 'react';

import { Link } from 'react-router-dom';

// constants
import { BTN_TYPES, BTN_STYLES, BTN_COLOR } from 'constants/utils';
import { ROUTES } from 'constants/routes';

// components
import Container from 'components/wrappers/Container/Container';
import Button from 'components/Button/Button';

// typography
import { Title, Text } from 'components/Typography/Typography';

// styles
import styles from './index.module.css';

const MainPage = function () {
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
          <Link to={ROUTES.game.url}>
            <Button
              btnType={BTN_TYPES.button}
              btnStyle={BTN_STYLES.outline.outlineDark}
              btnColor={BTN_COLOR.dark}
              value="Play"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
