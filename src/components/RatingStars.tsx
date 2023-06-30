import React, {useState} from 'react';
import Svg, {Path} from 'react-native-svg';
import {View, TouchableOpacity} from 'react-native';

type Props = {
  containerStyle?: object;
  setRatingValue: any;
  ratingValue: number;
};

const RatingStars: React.FC<Props> = ({
  containerStyle,
  setRatingValue,
  ratingValue,
}): JSX.Element => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...containerStyle,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setRatingValue(1);
          setRatingValue(ratingValue === 1 ? 0 : 1);
        }}
        style={{marginRight: 4}}
      >
        <Svg width={40} height={40} fill='none'>
          <Path
            d='m20 3.333 5.15 10.434 11.517 1.683-8.334 8.117L30.3 35.033 20 29.617 9.7 35.033l1.967-11.466-8.334-8.117 11.517-1.683L20 3.333Z'
            fill={ratingValue >= 1 ? '#FFBE00' : '#DBE3F5'}
          />
        </Svg>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setRatingValue(2)}
        style={{marginRight: 4}}
      >
        <Svg width={40} height={40} fill='none'>
          <Path
            d='m20 3.333 5.15 10.434 11.517 1.683-8.334 8.117L30.3 35.033 20 29.617 9.7 35.033l1.967-11.466-8.334-8.117 11.517-1.683L20 3.333Z'
            fill={ratingValue >= 2 ? '#FFBE00' : '#DBE3F5'}
          />
        </Svg>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setRatingValue(3)}
        style={{marginRight: 4}}
      >
        <Svg width={40} height={40} fill='none'>
          <Path
            d='m20 3.333 5.15 10.434 11.517 1.683-8.334 8.117L30.3 35.033 20 29.617 9.7 35.033l1.967-11.466-8.334-8.117 11.517-1.683L20 3.333Z'
            fill={ratingValue >= 3 ? '#FFBE00' : '#DBE3F5'}
          />
        </Svg>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setRatingValue(4)}
        style={{marginRight: 4}}
      >
        <Svg width={40} height={40} fill='none'>
          <Path
            d='m20 3.333 5.15 10.434 11.517 1.683-8.334 8.117L30.3 35.033 20 29.617 9.7 35.033l1.967-11.466-8.334-8.117 11.517-1.683L20 3.333Z'
            fill={ratingValue >= 4 ? '#FFBE00' : '#DBE3F5'}
          />
        </Svg>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setRatingValue(5)}>
        <Svg width={40} height={40} fill='none'>
          <Path
            d='m20 3.333 5.15 10.434 11.517 1.683-8.334 8.117L30.3 35.033 20 29.617 9.7 35.033l1.967-11.466-8.334-8.117 11.517-1.683L20 3.333Z'
            fill={ratingValue >= 5 ? '#FFBE00' : '#DBE3F5'}
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

export default RatingStars;
