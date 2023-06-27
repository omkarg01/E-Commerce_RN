import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const WarningSvg = () => (
  <Svg width={24} height={25} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Rect y={0.5} width={24} height={24} rx={12} fill='#EC5' />
    <Path
      d='M10.86 7.073 5.213 16.5a1.334 1.334 0 0 0 1.14 2h11.294a1.332 1.332 0 0 0 1.14-2L13.14 7.073a1.333 1.333 0 0 0-2.28 0v0ZM12 10.5v2.667M12 15.834h.007'
      stroke='#fff'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default WarningSvg;
