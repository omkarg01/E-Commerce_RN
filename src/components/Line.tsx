import {View, Text} from 'react-native';
import React from 'react';

type Props = {containerStyle?: object};

const Line: React.FC<Props> = ({containerStyle}): JSX.Element => {
  return (
    <View
      style={{
        width: '100%',
        height: 1,
        backgroundColor: '#CED6E1',
        ...containerStyle,
      }}
    />
  );
};

export default Line;
