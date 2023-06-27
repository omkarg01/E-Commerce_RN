import React from 'react';
import {View, Text, TouchableOpacity, FlexStyle} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';

type Props = {
  title: string;
  quantity?: number;
  containerStyle?: FlexStyle; // FlexStyle is a type from react-native package that describes the style of a flexbox container (https://reactnative.dev/docs/flexbox)
  icon?: JSX.Element;
  version?: number;
  onPress: () => void;
};

import {theme} from '../../constants';

const BurgerMenuItem: React.FC<Props> = ({
  title,
  quantity,
  containerStyle,
  icon,
  version,
  onPress,
}): JSX.Element | null => {
  if (version === 1) {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: responsiveHeight(6),
          ...containerStyle,
        }}
        onPress={onPress}
      >
        <Text
          style={{...theme.fonts.textStyle_14, color: theme.colors.mainColor}}
          numberOfLines={1}
        >
          {title}
        </Text>
        {quantity !== undefined && quantity > 0 && (
          <Text
            style={{
              ...theme.fonts.DMSans_400Regular,
              fontSize: 10,
              lineHeight: 10 * 1.5,
              color: theme.colors.textColor,
              marginTop: 2,
              marginLeft: 6,
            }}
            numberOfLines={1}
          >
            ({quantity} {quantity > 1 ? 'items' : 'item'})
          </Text>
        )}
      </TouchableOpacity>
    );
  }

  if (version === 2) {
    return (
      <TouchableOpacity
        style={{
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderColor: theme.colors.lightBlue,
          paddingHorizontal: 20,
          paddingTop: 14,
          paddingBottom: 14,
          borderTopLeftRadius: 3,
          borderBottomLeftRadius: 3,
          flexDirection: 'row',
          alignItems: 'center',
          ...containerStyle,
        }}
        onPress={onPress}
      >
        {icon}
        <Text
          style={{
            marginLeft: 10,
            marginRight: 'auto',
            ...theme.fonts.textStyle_16,
            color: theme.colors.mainColor,
          }}
          numberOfLines={1}
        >
          {title}
        </Text>
        {quantity && (
          <View
            style={{
              width: 16,
              height: 16,
              backgroundColor: '#F84C6B',
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 8,
                ...theme.fonts.DMSans_700Bold,
                lineHeight: 8 * 1.5,
                color: theme.colors.white,
              }}
              numberOfLines={1}
            >
              {quantity}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }

  return null;
};

export default BurgerMenuItem;
