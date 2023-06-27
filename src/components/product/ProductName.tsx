import React from 'react';
import {Text, TextStyle, View} from 'react-native';

import {text} from '../../text';
import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import {ProductType} from '../../types';

type Props = {item: ProductType; style?: TextStyle; version: 1 | 2};

const ProductName: React.FC<Props> = ({
  item,
  style,
  version,
}): JSX.Element | null => {
  if (version === 1) {
    return (
      <Text
        style={{
          marginRight: 'auto',
          color: theme.colors.textColor,
          ...theme.fonts.textStyle_14,
          ...style,
        }}
        numberOfLines={1}
      >
        {item.name}
      </Text>
    );
  }

  if (version === 2) {
    return (
      <View
        style={{
          marginBottom: 30,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}
      >
        <text.H3 style={{marginRight: 'auto'}} numberOfLines={1}>
          {item.name}
        </text.H3>
        <svg.RatingStarSvg />
        <Text
          style={{
            marginLeft: 4,
            ...theme.fonts.DMSans_400Regular,
            color: theme.colors.textColor,
          }}
        >
          {item.rating.toFixed(1)}
        </Text>
      </View>
    );
  }

  return null;
};

export default ProductName;
