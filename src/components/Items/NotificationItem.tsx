import React from 'react';
import {View, Text} from 'react-native';

import Line from '../Line';
import Image from '../custom/Image';
import {theme} from '../../constants';
import {NotificationType} from '../../types';
import Container from '../container/Container';

import {text} from '../../text';

type Props = {item: NotificationType; containerStyle?: object};

const NotificationItem: React.FC<Props> = ({
  item,
  containerStyle,
}): JSX.Element => {
  return (
    <Container
      containerStyle={{
        ...containerStyle,
      }}
      onPressDisabled={false}
      activeOpacity={0.3}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 14,
        }}
      >
        <item.icon />
        <text.T16
          style={{
            marginLeft: 8,
          }}
          numberOfLines={1}
        >
          {item.title}
        </text.T16>
      </View>
      {item.image && (
        <Image
          source={{uri: item.image}}
          style={{
            width: '100%',
            aspectRatio: 2.26,
            marginBottom: 14,
          }}
          imageStyle={{
            borderRadius: 5,
            backgroundColor: theme.colors.imageBackground,
          }}
        />
      )}
      {item.description && (
        <text.T14
          style={{
            marginBottom: 14,
          }}
        >
          {item.description}
        </text.T14>
      )}
      <Line />
      <Text
        style={{
          ...theme.fonts.DMSans_400Regular,
          fontSize: 12,
          lineHeight: 12 * 1.5,
          color: theme.colors.textColor,
          marginTop: 14,
        }}
      >
        {item.date}
      </Text>
    </Container>
  );
};

export default NotificationItem;
