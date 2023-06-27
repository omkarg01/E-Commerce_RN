import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const NotificationGiftSvg = () => (
  <Svg width={24} height={25} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Rect y={0.5} width={24} height={24} rx={12} fill='#F84C6B' />
    <Path
      d='M17.333 12.5v6.667H6.667V12.5M18.667 9.166H5.333V12.5h13.334V9.166ZM12 19.166v-10'
      stroke='#fff'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M12 9.167H9a1.667 1.667 0 0 1 0-3.333c2.333 0 3 3.333 3 3.333ZM12 9.167h3a1.667 1.667 0 1 0 0-3.333c-2.333 0-3 3.333-3 3.333Z'
      stroke='#fff'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default NotificationGiftSvg;
