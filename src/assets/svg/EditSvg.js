import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const EditSvg = () => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='none'>
    <Path
      stroke='#4A5F73'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='M8 13.334h6'
    />
    <Path
      fill='#DBE9F5'
      stroke='#4A5F73'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='M11 2.333a1.414 1.414 0 1 1 2 2l-8.333 8.334L2 13.332l.667-2.667L11 2.333Z'
    />
  </Svg>
);

export default EditSvg;
