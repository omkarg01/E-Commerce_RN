import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {theme} from '../../constants';

type Props = {
  item: string;
  lastElement?: boolean;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  containerStyle?: object;
};

const ProductSize: React.FC<Props> = ({
  selectedSize,
  setSelectedSize,
  item,
  containerStyle,
}): JSX.Element => {
  const color =
    selectedSize === item ? theme.colors.white : theme.colors.mainColor;
  const backgroundColor =
    selectedSize === item ? theme.colors.mainColor : '#FAFCFE';
  const borderColor =
    selectedSize === item ? theme.colors.mainColor : theme.colors.lightBlue;

  return (
    <TouchableOpacity
      style={{
        borderRadius: 3,
        backgroundColor: backgroundColor,
        borderWidth: 1,
        borderColor: borderColor,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        ...containerStyle,
      }}
      onPress={() => setSelectedSize(item)}
    >
      <Text
        style={{
          color: color,
          fontSize: 12,
          textTransform: 'uppercase',
          ...theme.fonts.DMSans_700Bold,
        }}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default ProductSize;
