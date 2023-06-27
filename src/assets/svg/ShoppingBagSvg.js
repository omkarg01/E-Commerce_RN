import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const ShoppingBagSvg = () => (
  <Svg width={70} height={70} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Circle cx={35} cy={35} r={34} stroke='#142535' strokeWidth={2} />
    <Path
      d='M27 21.666 23 27v18.666a2.667 2.667 0 0 0 2.667 2.667h18.666A2.667 2.667 0 0 0 47 45.667V27l-4-5.334H27Z'
      fill='#DBE9F5'
      stroke='#142535'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M23 27h24M40.333 32.334a5.333 5.333 0 1 1-10.666 0'
      stroke='#142535'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default ShoppingBagSvg;
