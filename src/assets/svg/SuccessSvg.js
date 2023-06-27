import * as React from 'react';
import Svg, {Rect, G, Path, Defs, ClipPath} from 'react-native-svg';

const SuccessSvg = () => (
  <Svg width={24} height={25} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Rect y={0.5} width={24} height={24} rx={12} fill='#00824B' />
    <G clipPath='url(#a)'>
      <Path
        d='M17.333 8.5 10 15.833 6.667 12.5'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' transform='translate(5 7.5)' d='M0 0h14v10H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SuccessSvg;
