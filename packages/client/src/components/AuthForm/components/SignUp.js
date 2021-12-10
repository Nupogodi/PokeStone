import React, { useState, memo } from 'react';

// Utility
import { toast } from 'react-toastify';

// Auth
import { useProvideAuth } from 'hooks/useAuth';

// Components
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

// Styles
import styles from '../AuthForm.module.css';

const SignUp = () => {
  const { signup } = useProvideAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const response = await signup(username, password, confirmPassword);
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
    <form onSubmit={handleSignup} className={styles.authForm}>
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
      <label className={`${styles.label} smaller`} htmlFor="confirmPassword">
        Confirm Password
      </label>
      <input
        className={styles.input}
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button type="submit" className={styles.submitBtn}>
        {isSubmitting ? <LoadingSpinner /> : 'Sign Up'}
      </button>
    </form>
  );
};

export default memo(SignUp);
