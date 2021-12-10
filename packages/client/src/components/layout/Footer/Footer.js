import React from 'react';

// styles
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className="small">
        Made with <span className={styles.red}>❤</span> by Alex Sherbin
      </p>
      <p className="small">&#169; 2021</p>
    </footer>
  );
};

export default Footer;
