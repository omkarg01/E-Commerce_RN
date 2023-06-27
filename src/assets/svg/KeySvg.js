import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const KeySvg = () => (
  <Svg width={70} height={70} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Circle cx={35} cy={35} r={34} stroke='#142535' strokeWidth={2} />
    <Path
      d='m47 21.667-2.667 2.666L47 21.667ZM34.187 34.48a7.335 7.335 0 0 1-5.175 12.553 7.335 7.335 0 0 1-5.196-2.182 7.334 7.334 0 0 1 10.37-10.37v-.001Zm0 0 5.48-5.48-5.48 5.48Zm5.48-5.48 4 4 4.666-4.667-4-4M39.667 29l4.666-4.667L39.667 29Z'
      fill='#DBE9F5'
    />
    <Path
      d='m47 21.667-2.667 2.666M34.187 34.48l5.48-5.48m0 0 4 4 4.666-4.667-4-4M39.667 29l4.666-4.667M34.187 34.48a7.335 7.335 0 0 1-5.175 12.553 7.335 7.335 0 0 1-5.196-2.182 7.334 7.334 0 0 1 10.37-10.37v-.001Z'
      stroke='#142535'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default KeySvg;
