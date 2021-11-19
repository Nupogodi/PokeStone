import React from 'react';

// styles
import styles from './Button.module.css';

const Button = function ({
  btnType,
  btnStyle,
  value,
  className,
  action,
  btnColor,
}) {
  return (
    <button
      onClick={action}
      className={`${className} ${styles.btn} ${styles[btnStyle]} ${styles[btnColor]}`}
          type={btnType || 'button'}
    >
      {value}
      </button>
  );
};

export default Button;
