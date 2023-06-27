import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {theme} from '../../constants';
import {ProductType} from '../../types';
import OrderCounter from './OrderCounter';
import {useAppDispatch} from '../../hooks';
import SaleBadge from '../badges/SaleBadge';
import {useAppNavigation} from '../../hooks';
import ProductName from '../product/ProductName';
import ProductPrice from '../product/ProductPrice';
import ImageBackground from '../custom/ImageBackground';

type Props = {item: ProductType; lastElement?: boolean};

const OrderItem: React.FC<Props> = ({item, lastElement}): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const marginBottom = lastElement ? 30 : 14;

  const renderImage = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Product', {item})}>
        <ImageBackground
          source={{uri: item.image}}
          style={{width: 100, height: '100%'}}
          imageStyle={{
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            backgroundColor: theme.colors.imageBackground,
          }}
          resizeMode='contain'
        >
          <SaleBadge
            version={1}
            item={item}
            containerStyle={{
              margin: 4,
              marginTop: 'auto',
            }}
          />
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderInfo = () => {
    return (
      <View
        style={{
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: theme.colors.lightBlue,
          width: '100%',
          padding: 14,
          paddingRight: 0,
          flexDirection: 'row',
          flex: 1,
        }}
      >
        <View style={{marginRight: 'auto', justifyContent: 'space-between'}}>
          <ProductName
            item={item}
            version={1}
            style={{
              marginBottom: 3,
            }}
          />
          <ProductPrice
            item={item}
            version={1}
            containerStyle={{marginBottom: 'auto'}}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {item.color && (
              <Text
                style={{
                  fontSize: 12,
                  color: theme.colors.textColor,
                  marginRight: 14,
                }}
              >
                Color: {item.color}
              </Text>
            )}
            {item.size && (
              <Text
                style={{
                  fontSize: 12,
                  color: theme.colors.textColor,
                }}
              >
                Size: {item.size}
              </Text>
            )}
          </View>
        </View>
        <OrderCounter item={item} />
      </View>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        height: 100,
        marginBottom: marginBottom,
      }}
    >
      {renderImage()}
      {renderInfo()}
    </View>
  );
};

export default OrderItem;
