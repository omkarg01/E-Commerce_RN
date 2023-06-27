import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HeaderBasketSvg = () => (
  <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
      stroke='#142535'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'
      fill='#DBE9F5'
    />
    <Path
      d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'
      stroke='#142535'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default HeaderBasketSvg;
