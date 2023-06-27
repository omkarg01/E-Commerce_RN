import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const PayCheckSvg = () => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={15} height={10} fill='none'>
    <G clipPath='url(#a)'>
      <Path
        stroke='#00824B'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='m12.842 1-7.52 7.333L1.906 5'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M.196 0h14.356v10H.196z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default PayCheckSvg;
