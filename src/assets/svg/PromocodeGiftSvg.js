import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const PromocodeGiftSvg = () => (
  <Svg width={70} height={70} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Circle cx={35} cy={35} r={34} stroke='#142535' strokeWidth={2} />
    <Path d='M45.667 35v13.333H24.333V35' fill='#DBE9F5' />
    <Path
      d='M45.667 35v13.333H24.333V35'
      stroke='#142535'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M48.333 28.334H21.667V35h26.666v-6.666Z'
      fill='#DBE9F5'
      stroke='#142535'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M35 48.334v-20'
      stroke='#142535'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M35 28.333h-6a3.333 3.333 0 1 1 0-6.666c4.667 0 6 6.666 6 6.666ZM35 28.333h6a3.333 3.333 0 1 0 0-6.666c-4.667 0-6 6.666-6 6.666Z'
      fill='#DBE9F5'
      stroke='#142535'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default PromocodeGiftSvg;
