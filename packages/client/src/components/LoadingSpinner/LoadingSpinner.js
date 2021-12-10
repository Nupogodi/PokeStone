import React from 'react';

// Constants
import { ICON_TYPES } from 'constants/index';

//  Components
import Icon from 'components/Icon/Icon';

// Styles
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = ({ full }) => {
  return (
    <Icon
      className={`${full ? `${styles.fullPageSpinner}` : `${styles.spinner}`}`}
      iconType={ICON_TYPES.loadingSpinner}
    />
  );
};

export default LoadingSpinner;
