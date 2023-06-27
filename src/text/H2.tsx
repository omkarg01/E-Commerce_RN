import {View, Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';

type Props = {
  children: React.ReactNode;
  style?: object;
  numberOfLines?: number;
};

const H2: React.FC<Props> = ({children, style, numberOfLines}): JSX.Element => {
  return (
    <Text
      style={{
        ...theme.fonts.Inter_700Bold,
        fontSize: 22,
        lineHeight: 22 * 1.4,
        color: theme.colors.mainColor,
        textTransform: 'capitalize',
        ...style,
      }}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default H2;
