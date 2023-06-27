import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {theme} from '../constants';

type Props = {quantity: number};

const Quantity: React.FC<Props> = ({quantity}): JSX.Element => {
  return (
    <TouchableOpacity
      style={{
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: theme.colors.mainColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 8,
          ...theme.fonts.DMSans_700Bold,
          textTransform: 'uppercase',
        }}
      >
        {quantity}
      </Text>
    </TouchableOpacity>
  );
};

export default Quantity;
