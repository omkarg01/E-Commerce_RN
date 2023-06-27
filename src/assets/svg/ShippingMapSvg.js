import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ShippingMapSvg = () => (
  <Svg width={16} height={16} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M14 6.667c0 4.666-6 8.666-6 8.666s-6-4-6-8.667a6 6 0 0 1 12 0Z'
      fill='#DBE9F5'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M8 8.666a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default ShippingMapSvg;
