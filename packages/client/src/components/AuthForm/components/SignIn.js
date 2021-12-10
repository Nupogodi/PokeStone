import React, { useState, memo } from 'react';

// Auth
import { setAuthToken } from 'utils/api';
import { useProvideAuth } from 'hooks/useAuth';

// Utility
import { toast } from 'react-toastify';

// Components
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

import styles from '../AuthForm.module.css';

const SignIn = () => {
  const { signin } = useProvideAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await signin(username, password);

      setAuthToken(response.token);
      toast.success(`Welcome back, ${response.data.username}!`);
      setIsSubmitting(false);
      toast.success(response.data.msg);
    } catch (error) {
      setIsSubmitting(false);
      console.log(error);
      if (error.response) {
        toast.error(error.response.data.error || error.message);
      } else if (error.message) {
        toast.error(error.message);
      } else {
        toast.error('Something went wrong.');
      }
    }
  };

  return (
    <form onSubmit={handleSignin} className={styles.authForm}>
      <label className={`${styles.label} smaller`} htmlFor="username">
        Username
      </label>
      <input
        className={styles.input}
        type="text"
        name="username"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className={`${styles.label} smaller`} htmlFor="password">
        Password
      </label>
      <input
        className={styles.input}
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className={styles.submitBtn}>
        {isSubmitting ? <LoadingSpinner /> : 'Sign In'}
      </button>
    </form>
  );
};

export default memo(SignIn);
