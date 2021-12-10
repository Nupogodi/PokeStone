import React, { useState, memo, useMemo } from 'react';

// Components
import ButtonWrapper from 'components/wrappers/ButtonWrapper/ButtonWrapper';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

// Styles
import styles from './AuthForm.module.css';

const AuthForm = ({ onSuccess = null }) => {
  const TAB_CONFIG = {
    signin: 'signin',
    signup: 'signup',
  };

  const [currentTab, setCurrentTab] = useState(TAB_CONFIG.signin);

  const CurrentTabComponent = useMemo(() => {
    const TAB_COMPONENTS_CONFIG = {
      [TAB_CONFIG.signin]: SignIn,
      [TAB_CONFIG.signup]: SignUp,
    };

    return TAB_COMPONENTS_CONFIG[currentTab];
  }, [currentTab, TAB_CONFIG.signin, TAB_CONFIG.signup]);

  return (
    <div className={styles.frame}>
      <div className={styles.formNav}>
        <ul className={styles.tabs}>
          <li
            className={`${styles.tab} ${
              currentTab === 'signup' && styles.active
            } large`}
          >
            <ButtonWrapper onClick={() => setCurrentTab(TAB_CONFIG.signup)}>
              Sign Up
            </ButtonWrapper>
          </li>
          <li
            className={`${styles.tab} ${
              currentTab === 'signin' && styles.active
            } large`}
          >
            <ButtonWrapper onClick={() => setCurrentTab(TAB_CONFIG.signin)}>
              Sign In
            </ButtonWrapper>
          </li>
        </ul>
      </div>
      <CurrentTabComponent onSuccess={onSuccess} />
    </div>
  );
};

export default memo(AuthForm);