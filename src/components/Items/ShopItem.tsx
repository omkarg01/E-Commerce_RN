import React, {memo} from 'react';

import InCart from '../buttons/InCart';
import {theme} from '../../constants';
import type {ProductType} from '../../types';
import {TouchableOpacity} from 'react-native';
import InWishlist from '../buttons/InWishlist';
import {useAppNavigation} from '../../hooks';
import Quantity from '../../components/Quantity';
import ProductName from '../product/ProductName';
import {quantityInCart} from '../../utils';
import ProductPrice from '../product/ProductPrice';
import ImageBackground from '../custom/ImageBackground';
import {responsiveWidth} from 'react-native-responsive-dimensions';

type Props = {item: ProductType};

const ShopItem: React.FC<Props> = ({item}): JSX.Element => {
  const navigation = useAppNavigation();
  const quantity = quantityInCart(item);
  const blockWidth = responsiveWidth(50) - 20 - 7.5;

  return (
    <TouchableOpacity
      style={{
        width: blockWidth,
        height: 'auto',
        marginBottom: 20,
        borderRadius: 5,
      }}
      onPress={() => {
        navigation.navigate('Product', {
          item,
        });
      }}
    >
      <ImageBackground
        source={{uri: item.image}}
        style={{
          width: '100%',
          height: 200,
          padding: 10,
          marginBottom: 14,
          alignItems: 'flex-end',
        }}
        imageStyle={{
          borderRadius: 5,
          backgroundColor: theme.colors.imageBackground,
        }}
        resizeMode='cover'
      >
        <InWishlist
          item={item}
          version={1}
          containerStyle={{marginBottom: 'auto'}}
        />
        {quantity !== undefined && quantity !== 0 && (
          <Quantity quantity={quantity} />
        )}
        {quantity === 0 && <InCart item={item} />}
      </ImageBackground>
      <ProductName item={item} style={{marginBottom: 3}} version={1} />
      <ProductPrice version={1} item={item} />
    </TouchableOpacity>
  );
};

export default memo(ShopItem);
