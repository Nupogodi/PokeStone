import React from 'react';

// styles
import styles from './Button.module.css';

const Button = function Button({
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
      // eslint-disable-next-line
      type={btnType || 'button'}
    >
      {value}
    </button>
  );
};

export default Button;
