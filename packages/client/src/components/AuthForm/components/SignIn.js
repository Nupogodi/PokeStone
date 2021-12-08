import React, { useState } from 'react';

import styles from '../AuthForm.module.css';

const SignIn = ({ action }) => {
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
  return (
    <form onSubmit={action} className={styles.authForm}>
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
      <button type="submit" className={styles.submitBtn}>
        Sign In
      </button>
    </form>
  );
};

export default SignIn;
