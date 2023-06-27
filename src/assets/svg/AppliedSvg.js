import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const AppliedSvg = () => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={15} height={10} fill='none'>
    <Path
      stroke='#00824B'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='m12.647 1-7.52 7.333L1.709 5'
    />
  </Svg>
);

export default AppliedSvg;
