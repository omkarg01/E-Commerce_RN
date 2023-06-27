import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BurgerMenuSvg = () => (
  <Svg width={25} height={12} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 1a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM5 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1ZM0 11a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z'
      fill='#142535'
    />
  </Svg>
);

export default BurgerMenuSvg;
