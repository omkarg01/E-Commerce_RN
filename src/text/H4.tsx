import {Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';

type Props = {
  children: React.ReactNode;
  style?: object;
  numberOfLines?: number;
};

const H4: React.FC<Props> = ({children, numberOfLines, style}): JSX.Element => {
  return (
    <Text
      style={{
        ...H4,
        ...style,
        color: theme.colors.mainColor,
        textTransform: 'capitalize',
      }}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default H4;
