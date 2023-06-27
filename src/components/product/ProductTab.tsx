import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {theme} from '../../constants';
import type {ProductType} from '../../types';

import {useAppNavigation} from '../../hooks';

type Props = {item: ProductType};

const ProductTab: React.FC<Props> = ({item}): JSX.Element => {
  const navigation = useAppNavigation();

  const textStyle = {
    color: theme.colors.mainColor,
    fontSize: 12,
    lineHeight: 12 * 1.7,
    marginBottom: 16,
    ...theme.fonts.DMSans_700Bold,
  };

  const borderStyle = {
    width: '100%',
    height: 4,
    backgroundColor: theme.colors.mainColor,
    borderRadius: 2,
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: theme.colors.lightBlue,
        marginTop: 18,
        marginBottom: 30,
      }}
    >
      <View>
        <Text style={{...textStyle}}>PRICE</Text>
        <View style={{...borderStyle}} />
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Description', {description: item.description})
        }
      >
        <Text style={{...textStyle, color: theme.colors.textColor}}>
          DESCRIPTION
        </Text>
        <View
          style={{...borderStyle, backgroundColor: theme.colors.transparent}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Reviews', {reviews: item.reviews})}
      >
        <Text
          style={{
            ...textStyle,
            textTransform: 'uppercase',
            color: theme.colors.textColor,
          }}
        >
          REVIEWS
        </Text>
        <View
          style={{...borderStyle, backgroundColor: theme.colors.transparent}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProductTab;
