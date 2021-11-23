import React from 'react';

// constants
import { ICONS } from 'constants/index';

// Styles
import styles from './Icon.module.css';

const Icon = function Icon({
  iconType,
  className,
  text = '',
  height = '1em',
  width = '1em',
}) {
  // eslint-disable-next-line no-shadow

  const IconComponent = ICONS[iconType];

  if (!IconComponent) {
    return null;
  }

  return (
    <i className={styles.icon}>
      <IconComponent height={height} width={width} />{' '}
    </i>
  );
};

export default Icon;
