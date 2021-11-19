import React from 'react';

// constants
import { ICONS } from 'constants/utils';

const Icon = function ({ iconType, className, text = '' }) {
  const Icon = ICONS[iconType];

  return (
    <>
      {text}
      <Icon className={className} />
      </>
  );
};

export default Icon;
