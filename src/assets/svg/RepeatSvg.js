import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const RepeatSvg = () => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={10} height={10} fill='none'>
    <G
      stroke='#142535'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      clipPath='url(#a)'
    >
      <Path d='M7.083.417 8.75 2.083 7.083 3.75' />
      <Path d='M1.25 4.583V3.75a1.667 1.667 0 0 1 1.667-1.667H8.75M2.917 9.583 1.25 7.917 2.917 6.25' />
      <Path d='M8.75 5.417v.833a1.667 1.667 0 0 1-1.667 1.667H1.25' />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h10v10H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default RepeatSvg;
