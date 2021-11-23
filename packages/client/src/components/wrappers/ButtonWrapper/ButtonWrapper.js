import React from 'react';

//  Styles
import styles from './ButtonWrapper.module.css';

const ButtonWrapper = function ({ children, onClick }) {
  return (
    <div className={styles.buttonWrapper}>
      <button onClick={onClick} type="button" className={styles.button} />
      {children}
    </div>
  );
};

export default ButtonWrapper;
