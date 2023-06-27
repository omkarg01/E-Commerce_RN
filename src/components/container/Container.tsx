import {View, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../../constants';

type Props = {
  containerStyle?: object;
  children: React.ReactNode;
  onPressDisabled?: boolean;
  onPress?: () => void;
  activeOpacity?: number;
};

const Container: React.FC<Props> = ({
  children,
  onPress,
  activeOpacity,
  onPressDisabled = true,
  containerStyle,
}): JSX.Element => {
  return (
    <TouchableOpacity
      disabled={onPressDisabled}
      style={{
        borderWidth: 1,
        borderColor: theme.colors.lightBlue,
        borderRadius: 3,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#FAFCFE',
        ...containerStyle,
      }}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Container;
