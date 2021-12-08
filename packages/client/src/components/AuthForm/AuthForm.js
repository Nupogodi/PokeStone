import React, { useState } from 'react';

// Constants
import { API_ROUTES } from 'constants/index';
import { pokemonApi } from 'utils/api';

// Components
import ButtonWrapper from 'components/wrappers/ButtonWrapper/ButtonWrapper';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

// Styles
import styles from './AuthForm.module.css';

const AuthForm = () => {
  const [currentTab, setCurrentTab] = useState('signup');

  const handleSignin = async (e) => {
    e.preventDefault();
    console.log('signUp');
  };

  return (
    <div className={styles.frame}>
      <div className={styles.formNav}>
        <ul className={styles.formNav__tabs}>
          <li
            className={`${styles.formNav__tab} ${
              currentTab === 'signup' && styles.tab__active
            } large`}
          >
            <ButtonWrapper onClick={() => setCurrentTab('signup')}>
              Sign Up
            </ButtonWrapper>
          </li>
          <li
            className={`${styles.formNav__tab} ${
              currentTab === 'signin' && styles.tab__active
            } large`}
          >
            <ButtonWrapper onClick={() => setCurrentTab('signin')}>
              Sign In
            </ButtonWrapper>
          </li>
        </ul>
      </div>
      {currentTab === 'signin' ? <SignIn /> : <SignUp />}
    </div>
  );
};

export default AuthForm;
