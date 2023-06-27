import React from 'react';
import {View, Text} from 'react-native';

import {theme} from '../../constants';
import {ProductType} from '../../types';

type Props = {version: 1 | 2; item: ProductType; containerStyle?: object};

const SaleBadge: React.FC<Props> = ({
  item,
  version,
  containerStyle,
}): JSX.Element | null => {
  if (version === 1) {
    if (item.is_sale) {
      return (
        <View
          style={{
            backgroundColor: theme.colors.white,
            borderRadius: 3,
            alignSelf: 'flex-start',
            paddingHorizontal: 6,
            borderWidth: 1,
            borderColor: theme.colors.lightBlue,
            ...containerStyle,
          }}
        >
          <Text
            style={{
              ...theme.fonts.DMSans_700Bold,
              fontSize: 8,
              textTransform: 'uppercase',
              color: theme.colors.mainColor,
              lineHeight: 8 * 1.7,
            }}
          >
            Sale
          </Text>
        </View>
      );
    }
  }

  // 58 x 32
  if (version === 2) {
    if (item.is_sale) {
      return (
        <View
          style={{
            width: 58,
            height: 32,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: theme.colors.white,
            borderWidth: 1,
            borderRadius: 3,
            borderColor: theme.colors.lightBlue,
            ...containerStyle,
          }}
        >
          <Text
            style={{
              ...theme.fonts.DMSans_700Bold,
              fontSize: 12,
              textTransform: 'uppercase',
              color: theme.colors.mainColor,
            }}
          >
            Sale
          </Text>
        </View>
      );
    }
  }

  return null;
};

export default SaleBadge;
