import {Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';

type Props = {
  children: React.ReactNode;
  style?: object;
  numberOfLines?: number;
  onPress?: () => void;
};

const T14: React.FC<Props> = ({children, style, numberOfLines, onPress}) => {
  return (
    <Text
      style={{
        color: theme.colors.textColor,
        ...theme.fonts.textStyle_14,
        ...style,
      }}
      numberOfLines={numberOfLines}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

export default T14;
