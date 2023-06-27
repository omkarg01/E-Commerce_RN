import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HomeSvg = () => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='none'>
    <Path fill='#fff' d='M0 0h16v16H0z' />
    <Path
      fill='#DBE9F5'
      stroke='#4A5F73'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='m2 6 6-4.667L14 6v7.334a1.333 1.333 0 0 1-1.333 1.333H3.333A1.333 1.333 0 0 1 2 13.334V6Z'
    />
    <Path
      stroke='#4A5F73'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='M6 14.667V8h4v6.667'
    />
  </Svg>
);

export default HomeSvg;
