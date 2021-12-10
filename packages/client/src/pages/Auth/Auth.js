import React from 'react';

//  Components
import AuthForm from 'components/AuthForm/AuthForm';
import Container from 'components/wrappers/Container/Container';

//  Styles
import styles from './Auth.module.css';

const AuthPage = () => {
  return (
    <main className={styles.authPage}>
      <Container className={styles.fullHeight}>
        <div className={styles.authForm}>
          <AuthForm />
        </div>
      </Container>
    </main>
  );
};

export default AuthPage;
