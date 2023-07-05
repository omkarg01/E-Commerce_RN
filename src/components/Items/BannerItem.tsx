import React from 'react';
import {View} from 'react-native';

import {text} from '../../text';
import {theme} from '../../constants';
import ShopNow from '../buttons/ShopNow';
import {useAppNavigation} from '../../hooks';
import {BannerType} from '../../types/BannerType';
import ImageBackground from '../custom/ImageBackground';

type Props = {version: number; banner: BannerType};

const BannerItem: React.FC<Props> = ({version, banner}): JSX.Element | null => {
  const navigation = useAppNavigation();
  // console.log('banner', banner);

  if (version === 1) {
    return (
      <View
        style={{
          marginRight: 20,
          marginBottom: 50,
        }}
      >
        <ImageBackground
          source={{uri: banner.image}}
          style={{
            width: '100%',
            aspectRatio: 1.775,
            paddingTop: 30,
            paddingRight: 20,
            paddingLeft: 20,
          }}
          imageStyle={{
            borderRightRadius: 5,
            borderLeftRadius: 5,
            backgroundColor: theme.colors.imageBackground,
          }}
          resizeMode='cover'
        >
          <text.H2>{banner.title1}</text.H2>
          <text.H2 style={{marginBottom: 20}}>{banner.title2}</text.H2>
          <ShopNow
            onPress={() => navigation.navigate('Shop', {title: 'Shop'})}
          />
        </ImageBackground>
      </View>
    );
  }

  if (version === 2) {
    return (
      <View
        style={{
          marginTop: 20,
          marginBottom: 50,
          marginRight: 20,
        }}
      >
        <ImageBackground
          source={{uri: banner.image}}
          style={{
            width: '100%',
            aspectRatio: 1.42,
            paddingHorizontal: 20,
            justifyContent: 'center',
          }}
          imageStyle={{
            borderRightRadius: 5,
            borderLeftRadius: 5,
            backgroundColor: theme.colors.imageBackground,
          }}
          resizeMode='cover'
        >
          <text.H2>{banner.title1}</text.H2>
          <text.H2 style={{marginBottom: 20}}>{banner.title2}</text.H2>
          <ShopNow
            onPress={() => navigation.navigate('Shop', {title: 'Shop'})}
          />
        </ImageBackground>
      </View>
    );
  }

  return null;
};

export default BannerItem;
