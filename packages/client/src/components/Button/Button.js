import React from 'react';

// styles
import styles from './Button.module.css';

const Button = ({
  btnType,
  btnStyle,
  value,
  className,
  onClick,
  btnColor,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${styles.btn} ${styles[btnStyle]} ${styles[btnColor]}`}
      // eslint-disable-next-line
      type={btnType || 'button'}
    >
      {value || children}
    </button>
  );
};

export default Button;
