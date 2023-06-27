import * as React from 'react';
import Svg, {Circle, Path, G, Defs, ClipPath} from 'react-native-svg';

const BasketSvg = ({bgColor = '#fff', iconColor = '#142535'}) => (
  <Svg width={50} height={58} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Circle cx={25} cy={33} r={25} fill={bgColor} />
    <Path
      d='M32.925 9.3h-15.85l2.878-1.059A4.251 4.251 0 0 0 18.485 0H15h20-3.484a4.251 4.251 0 0 0-1.468 8.241L32.925 9.3Z'
      fill={bgColor}
    />
    <G
      clipPath='url(#a)'
      stroke={iconColor}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <Path d='M21 44a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM32 44a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM13 23h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L35 28H18' />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill={bgColor} transform='translate(12 22)' d='M0 0h24v23H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BasketSvg;
