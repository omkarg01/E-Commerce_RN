import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const TrashSvg = () => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none'>
    <Path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'
    />
  </Svg>
);

export default TrashSvg;
