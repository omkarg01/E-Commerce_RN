import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {theme} from '../../constants';
import InCart from '../buttons/InCart';
import {ProductType} from '../../types';
import SaleBadge from '../badges/SaleBadge';
import {useAppNavigation} from '../../hooks';
import InWishlist from '../buttons/InWishlist';
import ProductName from '../product/ProductName';
import ProductPrice from '../product/ProductPrice';
import ProductRating from '../product/ProductRating';
import ImageBackground from '../custom/ImageBackground';

type Props = {item: ProductType; containerStyle?: object};

const WishlistItem: React.FC<Props> = ({item, containerStyle}): JSX.Element => {
  const navigation = useAppNavigation();

  return (
    <View style={{...containerStyle, flexDirection: 'row'}}>
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
        }}
        onPress={() => navigation.navigate('Product', {item})}
      >
        <ImageBackground
          source={{uri: item.image}}
          style={{width: '100%', height: '100%'}}
          imageStyle={{
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            backgroundColor: theme.colors.imageBackground,
          }}
          resizeMode='cover'
        >
          <SaleBadge
            item={item}
            version={1}
            containerStyle={{
              margin: 10,
              marginTop: 'auto',
            }}
          />
        </ImageBackground>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: theme.colors.lightBlue,
          paddingTop: 14,
          paddingRight: 20,
          paddingBottom: 10,
          paddingLeft: 14,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <ProductName item={item} version={1} style={{marginBottom: 3}} />
          <InWishlist item={item} version={1} />
        </View>
        <ProductPrice
          item={item}
          version={1}
          containerStyle={{marginBottom: 'auto'}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <ProductRating item={item} version={1} />
          <InCart item={item} />
        </View>
      </View>
    </View>
  );
};

export default WishlistItem;
