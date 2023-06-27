import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {text} from '../../text';
import InCart from '../buttons/InCart';
import {theme} from '../../constants';
import {ProductType} from '../../types';
import ProductPrice from './ProductPrice';
import ProductRating from './ProductRating';
import SaleBadge from '../badges/SaleBadge';
import {useAppNavigation} from '../../hooks';
import InWishlist from '../buttons/InWishlist';
import ImageBackground from '../custom/ImageBackground';

type Props = {item: ProductType; version: number; lastItem?: boolean};

const ProductCard: React.FC<Props> = ({
  version,
  item,
  lastItem,
}): JSX.Element | null => {
  const navigation = useAppNavigation();

  // 200 x 250
  if (version === 1) {
    return (
      <TouchableOpacity
        style={{
          width: 200,
          height: 'auto',
          marginRight: lastItem ? 20 : 14,
        }}
        onPress={() => navigation.navigate('Product', {item})}
      >
        <ImageBackground
          source={{uri: item.image}}
          style={{
            marginBottom: 14,
            width: '100%',
            height: 250,
          }}
          imageStyle={{
            backgroundColor: theme.colors.imageBackground,
            borderRadius: 3,
          }}
          resizeMode='cover'
        >
          <InWishlist
            containerStyle={{position: 'absolute', right: 0, padding: 14}}
            version={1}
            item={item}
          />
          <InCart
            item={item}
            containerStyle={{
              position: 'absolute',
              top: 'auto',
              bottom: 0,
              right: 0,
              let: 'auto',
              padding: 14,
            }}
          />
          <SaleBadge
            item={item}
            version={1}
            containerStyle={{
              marginTop: 'auto',
              marginLeft: 14,
              marginRight: 14,
              marginBottom: 14,
            }}
          />
        </ImageBackground>
        <text.T14 style={{marginBottom: 3}} numberOfLines={1}>
          {item.name}
        </text.T14>
        <ProductPrice item={item} version={1} />
      </TouchableOpacity>
    );
  }

  // 138 x 170
  if (version === 2) {
    return (
      <TouchableOpacity
        style={{
          width: 138,
          height: 'auto',
          marginRight: lastItem ? 20 : 14,
        }}
        onPress={() => navigation.navigate('Product', {item})}
      >
        <ImageBackground
          source={{uri: item.image}}
          style={{
            width: '100%',
            height: 170,
            marginBottom: 14,
          }}
          imageStyle={{
            backgroundColor: theme.colors.imageBackground,
            borderRadius: 3,
          }}
          resizeMode='cover'
        >
          <InWishlist
            containerStyle={{position: 'absolute', right: 0, padding: 14}}
            version={1}
            item={item}
          />
          <InCart
            item={item}
            containerStyle={{
              position: 'absolute',
              top: 'auto',
              bottom: 0,
              right: 0,
              let: 'auto',
              padding: 14,
            }}
          />
          <SaleBadge
            item={item}
            version={1}
            containerStyle={{
              marginTop: 'auto',
              marginBottom: 14,
              marginLeft: 14,
              marginRight: 14,
            }}
          />
        </ImageBackground>
        <text.T14 style={{marginBottom: 3}} numberOfLines={1}>
          {item.name}
        </text.T14>
        <ProductPrice item={item} version={1} />
      </TouchableOpacity>
    );
  }

  // 100 x 100
  if (version === 3) {
    const marginBottom = lastItem ? 0 : 10;

    return (
      <TouchableOpacity
        style={{flexDirection: 'row', marginBottom: marginBottom}}
        onPress={() => navigation.navigate('Product', {item})}
      >
        <ImageBackground
          source={{uri: item.image}}
          style={{width: 100, height: 100}}
          imageStyle={{
            backgroundColor: theme.colors.imageBackground,
            borderRadius: 3,
          }}
          resizeMode='cover'
        >
          <SaleBadge
            item={item}
            version={1}
            containerStyle={{
              marginTop: 'auto',
              marginBottom: 10,
              marginLeft: 10,
              marginRight: 10,
            }}
          />
        </ImageBackground>
        <View
          style={{
            flex: 1,
            paddingLeft: 14,
            paddingRight: 20,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            justifyContent: 'center',
            borderColor: theme.colors.lightBlue,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <text.T14 style={{marginBottom: 3}} numberOfLines={1}>
              {item.name}
            </text.T14>
            <InWishlist item={item} version={1} />
          </View>
          <ProductPrice
            item={item}
            containerStyle={{marginBottom: 11}}
            version={1}
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
      </TouchableOpacity>
    );
  }

  return null;
};

export default memo(ProductCard);
