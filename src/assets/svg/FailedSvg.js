import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const FailedSvg = () => (
  <Svg width={70} height={70} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Circle cx={35} cy={35} r={34} stroke='#142535' strokeWidth={2} />
    <Path
      d='M30 43.2 43.2 30'
      stroke='#FCB9C5'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='m28.028 28.4 13.199 13.2'
      stroke='#142535'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='m26 30 13.2 13.2'
      stroke='#FCB9C5'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='m28.028 41.6 13.199-13.2'
      stroke='#142535'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default FailedSvg;
