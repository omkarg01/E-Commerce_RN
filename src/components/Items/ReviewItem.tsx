import React from 'react';
import {View, Text} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {ReviewType} from '../../types/ReviewType';

import {components} from '../../components';
import {theme} from '../../constants';
import {svg} from '../../assets/svg';

type Props = {
  item: ReviewType;
  array: ReviewType[];
  index: number;
};

const ReviewItem: React.FC<Props> = ({item, array, index}): JSX.Element => {
  return (
    <View
      style={{
        paddingRight: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderLeftColor: '#DBE9F5',
        borderTopColor: '#DBE9F5',
        borderBottomColor: '#DBE9F5',
        marginBottom: index === array.length - 1 ? 0 : 14,
        borderColor: theme.colors.lightBlue,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        flexDirection: 'row',
      }}
    >
      <View style={{alignItems: 'center', marginRight: 14}}>
        <components.Image
          source={{uri: item.image}}
          style={{
            width: responsiveHeight(6),
            aspectRatio: 1,
            marginBottom: 10,
            backgroundColor: theme.colors.imageBackground,
          }}
          imageStyle={{
            borderTopLeftRadius: 3,
            borderBottomRightRadius: 3,
            backgroundColor: theme.colors.imageBackground,
          }}
        />
        <Text
          style={{
            fontSize: 10,
            lineHeight: 10 * 1.5,
            textAlign: 'center',
            ...theme.fonts.DMSans_400Regular,
            marginBottom: 5,
            color: theme.colors.textColor,
          }}
        >
          {item.date}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <svg.ReviewStarSvg />
          <Text
            style={{
              fontSize: 10,
              textAlign: 'center',
              ...theme.fonts.DMSans_400Regular,
              marginLeft: 4,
              color: theme.colors.textColor,
            }}
          >
            {item.rating.toFixed(1)}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          paddingTop: 15,
          paddingBottom: 15,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              textTransform: 'capitalize',
              ...theme.fonts.H5,
              color: theme.colors.mainColor,
            }}
            numberOfLines={1}
            // mainColor={true}
          >
            {item.name}
          </Text>
          {/* <Text
            style={{
              ...theme.fonts.DMSans_400Regular,
              fontSize: 12,
              color: theme.colors.mainColor,
              lineHeight: 12 * 1.7,
            }}
            onPress={() => console.log('reply')}
          >
            reply
          </Text> */}
        </View>
        <Text
          style={{...theme.fonts.textStyle_14, color: theme.colors.textColor}}
        >
          {item.comment}
        </Text>
      </View>
    </View>
  );
};

export default ReviewItem;
