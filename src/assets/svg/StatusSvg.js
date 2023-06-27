import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

const StatusSvg = ({status = false, title}) => (
  <Svg width={30} height={67} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Circle
      cx={15}
      cy={15}
      r={14.4}
      stroke={status ? '#142535' : '#DBE9F5'}
      strokeWidth={1.2}
    />
    <Circle
      cx={15}
      cy={15}
      r={7.4}
      fill={status ? '#DBE9F5' : 'transparent'}
      stroke={status ? '#142535' : 'transparent'}
      strokeWidth={1.2}
    />
    <Circle
      cx={15.5}
      cy={37.5}
      r={1.5}
      fill={title === 'Receiving' ? 'transparent' : '#DBE9F5'}
    />
    <Circle
      cx={15.5}
      cy={44.5}
      r={1.5}
      fill={title === 'Receiving' ? 'transparent' : '#DBE9F5'}
    />
    <Circle
      cx={15.5}
      cy={51.5}
      r={1.5}
      fill={title === 'Receiving' ? 'transparent' : '#DBE9F5'}
    />
    <Circle
      cx={15.5}
      cy={58.5}
      r={1.5}
      fill={title === 'Receiving' ? 'transparent' : '#DBE9F5'}
    />
    <Circle
      cx={15.5}
      cy={65.5}
      r={1.5}
      fill={title === 'Receiving' ? 'transparent' : '#DBE9F5'}
    />
  </Svg>
);

export default StatusSvg;
