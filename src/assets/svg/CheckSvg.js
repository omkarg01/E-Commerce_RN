import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const CheckSvg = () => (
  <Svg width={70} height={70} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Circle cx={35} cy={35} r={34} stroke='#142535' strokeWidth={2} />
    <Path
      d='M47.381 28 30.619 44.347 23 36.917'
      stroke='#40C63D'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M47.19 26.229 30.43 42.576l-7.62-7.43'
      stroke='#142535'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default CheckSvg;
