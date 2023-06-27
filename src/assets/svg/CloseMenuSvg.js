import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const CloseMenuSvg = () => (
  <Svg width={34} height={34} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <G
      clipPath='url(#a)'
      stroke='#142535'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <Path d='m12.02 12.05 9.9 9.9M12.02 21.95l9.9-9.9' />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' transform='matrix(1 0 0 -1 0 34)' d='M0 0h34v34H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CloseMenuSvg;
