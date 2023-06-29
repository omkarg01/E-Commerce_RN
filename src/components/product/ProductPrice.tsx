import {View, Text, ViewProps, TouchableOpacity} from 'react-native';
import React from 'react';

import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import {ProductType} from '../../types';
import {useAppDispatch} from '../../hooks';
import {quantityInCart} from '../../utils';
import {removeFromCart, addToCart} from '../../store/slices/cartSlice';

type Props = {
  item: ProductType;
  version: 1 | 2;
  containerStyle?: object;
  numberOfLines?: number;
};

const ProductPrice: React.FC<Props> = ({
  item,
  containerStyle,
  version,
  numberOfLines = 1,
}): JSX.Element => {
  // console.log('price', item.price);
  const dispatch = useAppDispatch();

  if (version === 1) {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          ...containerStyle,
        }}
      >
        {item.old_price && (
          <Text
            style={{
              marginRight: 4,
              textDecorationLine: 'line-through',
              ...theme.fonts.DMSans_400Regular,
              fontSize: 12,
              color: theme.colors.textColor,
              lineHeight: 12 * 1.5,
            }}
          >
            ${item.old_price.toFixed(2)}
          </Text>
        )}
        <Text
          style={{
            ...theme.fonts.DMSans_500Medium,
            fontSize: 14,
            lineHeight: 14 * 1.5,
            color: theme.colors.mainColor,
          }}
          numberOfLines={numberOfLines}
        >
          ${item.price.toFixed(2)}
        </Text>
      </View>
    );
  }

  if (version === 2) {
    const renderPrice = () => {
      return (
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          {item.old_price && (
            <Text
              style={{
                ...theme.fonts.DMSans_400Regular,
                marginRight: 10,
                fontSize: 16,
                lineHeight: 16 * 1.7,
                textDecorationLine: 'line-through',
                color: theme.colors.textColor,
              }}
            >
              ${item.old_price.toFixed(1)}
            </Text>
          )}
          <Text
            style={{
              ...theme.fonts.DMSans_700Bold,
              color: theme.colors.mainColor,
              fontSize: 20,
              lineHeight: 20 * 1.4,
            }}
          >
            ${item.price.toFixed(2)}
          </Text>
        </View>
      );
    };

    const renderQuantity = () => {
      return (
        <View
          style={{
            marginLeft: 'auto',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{padding: 16}}
            onPress={() => dispatch(removeFromCart(item))}
          >
            <svg.CounterMinusSvg />
          </TouchableOpacity>
          <View
            style={{
              width: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                ...theme.fonts.DMSans_700Bold,
                fontSize: 14,
                color: theme.colors.textColor,
              }}
            >
              {quantityInCart(item)}
            </Text>
          </View>
          <TouchableOpacity
            style={{padding: 16}}
            onPress={() => dispatch(addToCart(item))}
          >
            <svg.CounterPlusSvg />
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View
        style={{
          marginLeft: 20,
          borderLeftWidth: 1,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderTopColor: '#DBE9F5',
          borderBottomColor: '#DBE9F5',
          borderLeftColor: '#DBE9F5',
          borderTopLeftRadius: 3,
          borderBottomLeftRadius: 3,
          paddingLeft: 20,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 6,
          marginBottom: 30,
        }}
      >
        {renderPrice()}
        {renderQuantity()}
      </View>
    );
  }

  return <></>;
};

export default ProductPrice;
