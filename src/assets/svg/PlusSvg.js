import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlusSvg = () => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='none'>
    <Path
      stroke='#142535'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='M8 3.333v9.334M3.333 8h9.334'
    />
  </Svg>
);

export default PlusSvg;
