import React from 'react';
import {View} from 'react-native';

import {text} from '../../text';
import {theme} from '../../constants';
import ShopNow from '../buttons/ShopNow';
import {CarouselType} from '../../types';
import {useAppNavigation} from '../../hooks';
import ImageBackground from '../custom/ImageBackground';

type Props = {item: CarouselType; array: CarouselType[]; index: number};

const CarouselItem: React.FC<Props> = ({item, array, index}): JSX.Element => {
  const navigation = useAppNavigation();

  const dotStyle = {
    width: 10,
    height: 10,
    marginHorizontal: 3,
    borderRadius: 5,
  };

  return (
    <ImageBackground
      source={{uri: item.image}}
      style={{
        width: theme.sizes.width,
        height: 'auto',
        paddingHorizontal: 20,
        marginBottom: 20,
        justifyContent: 'flex-end',
        aspectRatio: 0.75,
      }}
      resizeMode='cover'
    >
      <View style={{marginBottom: 30}}>
        <text.H1 numberOfLines={1}>{item.titleLine1}</text.H1>
        <text.H1 numberOfLines={1}>{item.titleLine2}</text.H1>
      </View>
      <ShopNow
        containerStyle={{marginBottom: 50}}
        onPress={() => {
          navigation.navigate('Shop', {
            title: item.titleLine1,
          });
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        {array.map((_, current) => {
          const backgroundColor =
            current === index ? theme.colors.mainColor : theme.colors.white;
          return (
            <View
              key={current}
              style={{
                ...dotStyle,
                backgroundColor: backgroundColor,
              }}
            />
          );
        })}
      </View>
    </ImageBackground>
  );
};

export default CarouselItem;
