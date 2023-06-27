import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CounterPlusSvg = () => (
  <Svg width={10} height={10} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M5 2.083v5.834M2.083 5h5.834'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default CounterPlusSvg;
