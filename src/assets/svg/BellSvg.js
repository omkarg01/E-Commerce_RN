import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BellSvg = () => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={16} height={17} fill='none'>
    <Path
      fill='#DBE9F5'
      stroke='#4A5F73'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='M12 5.833a4 4 0 1 0-8 0c0 4.667-2 6-2 6h12s-2-1.333-2-6Z'
    />
    <Path
      stroke='#4A5F73'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='M9.153 14.5a1.333 1.333 0 0 1-2.306 0'
    />
  </Svg>
);

export default BellSvg;
