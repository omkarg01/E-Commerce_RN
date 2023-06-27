import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const UserSvg = () => (
  <Svg width={70} height={70} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Circle cx={35} cy={35} r={34} stroke='#142535' strokeWidth={2} />
    <Path
      d='M45.667 47v-2.667A5.333 5.333 0 0 0 40.333 39H29.667a5.333 5.333 0 0 0-5.334 5.333V47'
      stroke='#142535'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M35 33.667A5.333 5.333 0 1 0 35 23a5.333 5.333 0 0 0 0 10.667Z'
      fill='#DBE9F5'
      stroke='#142535'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default UserSvg;
