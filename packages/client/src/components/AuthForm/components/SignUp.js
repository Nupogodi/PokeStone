import React, { useState } from 'react';

import styles from '../AuthForm.module.css';

const SignUp = ({ action }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // const response = await pokemonApi.post(API_ROUTES.auth.signup, {
      //   formData,
      // });
      console.log(formData);
    } catch (error) {
      console.log(error);
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
        onChange={handleChange}
      />
      <label className={`${styles.label} smaller`} htmlFor="password">
        Password
      </label>
      <input
        className={styles.input}
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
      />
      <label className={`${styles.label} smaller`} htmlFor="confirmPassword">
        Confirm Password
      </label>
      <input
        className={styles.input}
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        onChange={handleChange}
      />
      <button type="submit" className={styles.submitBtn}>
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
