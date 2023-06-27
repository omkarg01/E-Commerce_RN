import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const TagSvg = () => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} fill='none'>
    <Path
      fill='#DBE9F5'
      stroke='#4A5F73'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='m17.158 11.175-5.975 5.975a1.666 1.666 0 0 1-2.358 0L1.667 10V1.667H10l7.158 7.158a1.667 1.667 0 0 1 0 2.35Z'
    />
    <Path
      stroke='#4A5F73'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='M5.833 5.833h.009'
    />
  </Svg>
);

export default TagSvg;
