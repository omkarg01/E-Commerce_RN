import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import Button from '../buttons/Button';
import {useAppNavigation} from '../../hooks';

type Props = {
  version: number;
};

const HistoryDataFooter: React.FC<Props> = ({version}): JSX.Element => {
  const navigation = useAppNavigation();

  if (version === 1) {
    return (
      <Button
        title='track order'
        containerStyle={{
          marginTop: 10,
          marginBottom: 20,
        }}
        onPress={() => navigation.navigate('TrackYourOrder')}
      />
    );
  }

  if (version === 2) {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 10,
          paddingBottom: 20,
        }}
      >
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <svg.RepeatSvg />
          <Text
            style={{
              marginLeft: 6,
              // ...theme.fonts.textStyle_16,
              color: theme.colors.mainColor,
            }}
          >
            repeat order
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LeaveAReview')}>
          <Text
            style={{
              marginLeft: 6,
              // ...theme.fonts.textStyle_16,
              color: theme.colors.mainColor,
            }}
          >
            leave a review
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return <></>;
};

export default HistoryDataFooter;
