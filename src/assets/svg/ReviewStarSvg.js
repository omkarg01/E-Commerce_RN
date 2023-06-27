import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const ReviewStarSvg = () => (
  <Svg width={8} height={8} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <G clipPath='url(#a)'>
      <Path
        d='m4 .667 1.03 2.086 2.303.337-1.666 1.623.393 2.294L4 5.923 1.94 7.007l.393-2.294L.667 3.09l2.303-.337L4 .667Z'
        fill='#4A5F73'
        stroke='#4A5F73'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h8v8H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ReviewStarSvg;
