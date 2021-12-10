import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Auth
import { useProvideAuth, useAuth } from 'hooks/useAuth';

// Constants
import { NAVBAR_MENU } from 'constants/index';
import Container from 'components/wrappers/Container/Container';
import ButtonWrapper from 'components/wrappers/ButtonWrapper/ButtonWrapper';

// Components
import Icon from 'components/Icon/Icon';

// Styles
import styles from './NavBar.module.css';

const NavBar = () => {
  const [expandMenu, setExpandMenu] = useState(false);

  //  Auth
  const { signout } = useProvideAuth();
  const {
    state: { isAuthenticated },
  } = useAuth();

  const toggleMenu = () => {
    setExpandMenu(!expandMenu);
  };
  return (
    <nav className={styles.navBar}>
      <Container className={`${styles.flexWrapper}`}>
        <NavLink to={NAVBAR_MENU.menu.main.url}>
          <h1 className={styles.navTitle}>Poke Stone</h1>
        </NavLink>
        <ul className={styles.mainMenu}>
          {Object.entries(NAVBAR_MENU.menu).map(([key, value]) => {
            if (key === 'auth') {
              return (
                <>
                  {isAuthenticated ? (
                    <ButtonWrapper key={key} onClick={() => signout()}>
                      <li className={styles.navItem}>
                        <Icon iconType={value.signout.icon} />
                        <p className={styles.navItem__label}>
                          {value.signout.title}
                        </p>
                      </li>
                    </ButtonWrapper>
                  ) : (
                    <NavLink key={key} to={value.signin.url}>
                      <li className={styles.navItem}>
                        <Icon iconType={value.signin.icon} />
                        <p className={styles.navItem__label}>
                          {value.signin.title}
                        </p>
                      </li>
                    </NavLink>
                  )}
                </>
              );
            }

            return (
              <NavLink key={key} to={value.url}>
                <li className={styles.navItem}>
                  <Icon iconType={value.icon} />
                  <p className={styles.navItem__label}>{value.title}</p>
                </li>
              </NavLink>
            );
          })}

          <ButtonWrapper onClick={toggleMenu}>
            <li
              className={` ${styles.navItem} ${styles.relative} ${
                expandMenu && styles.selected
              }`}
            >
              <Icon iconType={NAVBAR_MENU.subMenu.head.icon} />
              <ul
                className={`${expandMenu && styles.active} ${styles.subMenu}`}
              >
                {Object.entries(NAVBAR_MENU.subMenu.content).map(
                  ([key, value]) => {
                    return (
                      <NavLink key={key} to={value.url}>
                        <li className={styles.navItem}>
                          <Icon iconType={value.icon} />
                          <p className={styles.navItem__label}>{value.title}</p>
                        </li>
                      </NavLink>
                    );
                  },
                )}
              </ul>
            </li>
          </ButtonWrapper>
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;
