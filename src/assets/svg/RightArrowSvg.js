import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const RightArrowSvg = () => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={8} height={13} fill='none'>
    <G clipPath='url(#a)'>
      <Path
        stroke='#4A5F73'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='m2 11.3 4.8-4.8L2 1.7'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M.8.5H8v12H.8z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default RightArrowSvg;
