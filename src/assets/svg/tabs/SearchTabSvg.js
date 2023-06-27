import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const SearchTabSvg = ({bgColor = '#fff', iconColor = '#142535'}) => (
  <Svg width={50} height={58} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Circle cx={25} cy={33} r={25} fill={bgColor} />
    <Path
      d='M32.925 9.3h-15.85l2.878-1.059A4.251 4.251 0 0 0 18.485 0H15h20-3.484a4.251 4.251 0 0 0-1.468 8.241L32.925 9.3Z'
      fill={bgColor}
    />
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M24 24.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5ZM15.25 32a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0Z'
      fill={iconColor}
    />
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M28.943 36.943a1 1 0 0 1 1.414 0l4.35 4.35a1 1 0 0 1-1.414 1.414l-4.35-4.35a1 1 0 0 1 0-1.414Z'
      fill={iconColor}
    />
  </Svg>
);

export default SearchTabSvg;
