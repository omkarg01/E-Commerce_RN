import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const MessageSvg = () => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={70} height={70} fill='none'>
    <Circle cx={35} cy={35} r={34} stroke='#142535' strokeWidth={2} />
    <Path
      fill='#DBE9F5'
      stroke='#142535'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M46.25 38.75a2.5 2.5 0 0 1-2.5 2.5h-15l-5 5v-20a2.5 2.5 0 0 1 2.5-2.5h17.5a2.5 2.5 0 0 1 2.5 2.5v12.5Z'
    />
  </Svg>
);

export default MessageSvg;
