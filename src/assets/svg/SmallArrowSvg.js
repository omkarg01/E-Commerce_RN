import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SmallArrowSvg = () => (
  <Svg width={6} height={11} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='m1 9.5 4-4-4-4'
      stroke='#142535'
      strokeWidth={1.2}
      strokeLinejoin='round'
    />
  </Svg>
);

export default SmallArrowSvg;
