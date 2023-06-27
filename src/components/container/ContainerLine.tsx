import {View} from 'react-native';
import React from 'react';

import {theme} from '../../constants';

type Props = {
  containerStyle?: object;
};

const Line: React.FC<Props> = ({containerStyle}): JSX.Element => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: theme.colors.lightBlue,
        marginBottom: 10,
        ...containerStyle,
      }}
    />
  );
};

export default Line;
