import {View, Text} from 'react-native';
import React from 'react';

import {theme} from '../../constants';

type Props = {
  title: string;
  price: number | string;
  lastItem?: boolean;
  containerStyle?: object;
  titleStyle?: object;
  priceStyle?: object;
};

const ContainerItem: React.FC<Props> = ({
  title,
  price,
  lastItem,
  containerStyle,
  titleStyle,
  priceStyle,
}): JSX.Element => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        ...containerStyle,
      }}
    >
      <Text
        style={{
          color: theme.colors.textColor,
          ...theme.fonts.textStyle_14,
          ...titleStyle,
        }}
        numberOfLines={1}
      >
        {title}
      </Text>
      <Text
        style={{
          color: theme.colors.textColor,
          ...theme.fonts.textStyle_14,
          ...priceStyle,
        }}
        numberOfLines={1}
      >
        {price}
      </Text>
    </View>
  );
};

export default ContainerItem;
