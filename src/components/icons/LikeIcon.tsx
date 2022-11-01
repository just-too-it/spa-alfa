import React, { FC } from 'react';

import { IconProps } from './icon.types';

// export const LikeIcon: FC<IconProps> = ({ width, height, fill, stroke }) => {
//   return (
//     <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
//       <path
//         fill={fill} stroke={stroke}
//         d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
// 	c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
// 	c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"
//       />
//     </svg>
//   );
// };

export const LikeIcon: FC<IconProps> = ({ width, height, fill, stroke }) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 485.027 485.027">
      <g>
        <path
          id="XMLID_1929_"
          fill={fill}
          stroke={stroke}
          d="M109.4,459.991H13c-2.1,0-3.9-1.8-3.9-3.9v-248.4c0-2.1,1.8-3.9,3.9-3.9h96.4
			c2.1,0,3.9,1.8,3.9,3.9v248.4C113.3,458.191,111.6,459.991,109.4,459.991z"
        />
        <path
          d="M284.6,20.391c-28.2-20.7-67.2-8.8-68.8-8.3c-3.8,1.2-6.3,4.7-6.3,8.6v85.8c0,29.1-13.8,53.7-41.1,73.2
			c-21.1,15.1-42.7,21.3-42.9,21.4c-0.2,0-0.3,0.1-0.5,0.2l-5.1,1.7c-3-4.9-8.3-8.2-14.5-8.2H16.9c-9.3,0-16.9,7.6-16.9,16.9v240.5
			c0,9.3,7.6,16.9,16.9,16.9h88.6c8,0,14.7-5.6,16.4-13c11.9,12.7,28.8,20.7,47.6,20.7h209.8c44.6,0,73.1-23.3,78.1-64l26.8-170.2
			c3.9-24.7-6.2-49.7-25.8-63.7c-11.1-8-24.2-12.2-37.9-12.2H311.4v-79.6C311.4,55.891,302.4,33.491,284.6,20.391z M104.2,450.891
			H18.1v-238h86.1V450.891z M420.5,184.791c9.9,0,19.3,3,27.3,8.8c14,10.1,21.3,28.2,18.4,46.2l-26.7,170.3c0,0.1,0,0.2,0,0.3
			c-4.9,39.8-35.4,48.2-60.2,48.2H169.5c-26,0-47.1-21.1-47.1-47.1v-190.2l8.3-2.8c2.9-0.8,25.2-7.6,47.8-23.7
			c32.1-22.8,49.1-53.3,49.1-88.2v-78.6c10.4-2,31.3-4,46.4,7.1c12.8,9.4,19.3,26.9,19.3,52v88.7c0,5,4.1,9.1,9.1,9.1h118.1V184.791
			z"
        />
      </g>
    </svg>
  );
};
