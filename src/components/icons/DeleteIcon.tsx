import React, { FC } from 'react';

import { IconProps } from './icon.types';

export const DeleteIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={fill}
        d="M13 18H5a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2zm3-15a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1z"
      />
    </svg>
  );
};