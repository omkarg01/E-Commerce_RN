import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

import {text} from '../../text';
import {theme} from '../../constants';
import {CategoryType} from '../../types';
import {useAppNavigation} from '../../hooks';
import QuantityBadge from '../badges/QuantityBadge';
import ImageBackground from '../custom/ImageBackground';

type Props = {
  item: CategoryType;
  version: number;
  lastElement?: boolean;
  selectedCategory?: CategoryType;
  setSelectedCategory?: React.Dispatch<React.SetStateAction<CategoryType>>;
};

const CategoryItem: React.FC<Props> = ({
  item,
  version,
  lastElement,
  selectedCategory,
  setSelectedCategory,
}): JSX.Element | null => {
  const navigation = useAppNavigation();

  // 63 x 32
  if (version === 1) {
    const marginRight = lastElement ? 20 : 10;

    return (
      <TouchableOpacity
        style={{
          paddingVertical: 6,
          paddingHorizontal: 18,
          borderWidth: 1,
          borderRadius: 3,
          marginRight: marginRight,
          backgroundColor:
            selectedCategory?.id === item.id
              ? theme.colors.mainColor
              : '#FAFCFE',
          borderColor:
            selectedCategory?.id === item.id
              ? theme.colors.mainColor
              : theme.colors.lightBlue,
        }}
        onPress={() => {
          if (setSelectedCategory) {
            setSelectedCategory(item);
          }
        }}
      >
        <Text
          style={{
            color:
              selectedCategory?.id === item.id
                ? theme.colors.white
                : theme.colors.mainColor,
            textTransform: 'uppercase',
            lineHeight: 12 * 1.7,
            ...theme.fonts.DMSans_700Bold,
          }}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  }

  // 160 x 160
  if (version === 2) {
    const blockWidth = responsiveWidth(100) / 2 - 30;
    const blockHeight = responsiveWidth(100) / 2 - 30;

    return (
      <TouchableOpacity
        style={{
          width: blockWidth,
          height: blockHeight,
          marginBottom: 14,
          borderRadius: 5,
          backgroundColor: theme.colors.imageBackground,
        }}
        onPress={() => {
          navigation.navigate('Shop', {
            title: item.title,
          });
        }}
      >
        <ImageBackground
          source={{uri: item.image}}
          style={{
            width: blockWidth,
            height: blockHeight,
            borderRadius: 10,
            paddingHorizontal: 14,
            paddingTop: 14,
            paddingBottom: 12,
            justifyContent: 'space-between',
          }}
          imageStyle={{borderRadius: 5}}
        >
          <QuantityBadge quantity={item.quantity as number} version={2} />
          <text.T14 numberOfLines={1}>{item.title}</text.T14>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  // 90 x 90
  if (version === 3) {
    const marginRight = lastElement ? 20 : 14;

    const textStyles = {
      ...theme.fonts.DMSans_400Regular,
      color: theme.colors.mainColor,
      fontSize: 10,
      lineHeight: 10 * 1.5,
    };

    const radiusStyles = {
      borderRadius: 5,
      backgroundColor: theme.colors.imageBackground,
    };

    return (
      <TouchableOpacity
        style={{
          width: 90,
          height: 90,
          marginRight: marginRight,
          ...radiusStyles,
        }}
        onPress={() => navigation.navigate('Shop', {title: item.title})}
      >
        <ImageBackground
          source={{uri: item.image}}
          style={{
            paddingHorizontal: 10,
            paddingTop: 10,
            paddingBottom: 8,
            borderRadius: 10,
            width: 90,
            height: 90,
            justifyContent: 'space-between',
          }}
          imageStyle={{...radiusStyles}}
          resizeMode='cover'
        >
          <QuantityBadge quantity={item.quantity as number} version={1} />
          <Text style={{...textStyles}}>{item.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  // 102 x 102
  if (version === 4) {
    const marginRight = lastElement ? 20 : 14;

    const textStyles = {
      ...theme.fonts.DMSans_400Regular,
      color: theme.colors.mainColor,
      fontSize: 10,
      lineHeight: 10 * 1.5,
    };

    const radiusStyles = {
      borderRadius: 5,
      backgroundColor: theme.colors.imageBackground,
    };

    return (
      <TouchableOpacity
        style={{
          width: '30%',
          height: 102,
          marginBottom: 14,
          ...radiusStyles,
        }}
        onPress={() => navigation.navigate('Shop', {title: item.title})}
      >
        <ImageBackground
          source={{uri: item.image}}
          style={{
            width: '100%',
            height: 102,
            borderRadius: 10,
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingTop: 10,
            paddingBottom: 8,
          }}
          imageStyle={{...radiusStyles}}
          resizeMode='cover'
        >
          <QuantityBadge quantity={item.quantity as number} version={1} />
          <Text style={{...textStyles}}>{item.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  return null;
};

export default CategoryItem;
