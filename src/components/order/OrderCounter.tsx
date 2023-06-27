import React from 'react';
import {View, Text} from 'react-native';

import {ProductType} from '../../types';
import {useAppDispatch} from '../../hooks';
import {quantityInCart} from '../../utils';
import {addToCart, removeFromCart} from '../../store/slices/cartSlice';

type Props = {
  item: ProductType;
};

import OrderItemBtn from './OrderItemBtn';
import {theme} from '../../constants';

const OrderCounter: React.FC<Props> = ({item}): JSX.Element => {
  const dispatch = useAppDispatch();
  const quantity = quantityInCart(item);
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'red',
        height: '100%',
        // paddingHorizontal: 20,
      }}
    >
      <OrderItemBtn
        plus={true}
        onPress={() => {
          dispatch(addToCart(item));
        }}
      />
      <Text
        style={{
          fontSize: 12,
          color: theme.colors.textColor,
        }}
      >
        {quantity}
      </Text>
      <OrderItemBtn
        minus={true}
        onPress={() => {
          dispatch(removeFromCart(item));
        }}
      />
    </View>
  );
};

export default OrderCounter;
