import {View} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  containerStyle?: object;
};

const SmartView: React.FC<Props> = ({
  children,
  containerStyle,
}): JSX.Element => {
  return <View style={{flex: 1, ...containerStyle}}>{children}</View>;
};

export default SmartView;
