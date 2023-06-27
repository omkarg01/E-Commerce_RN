import {View, Text} from 'react-native';
import React from 'react';

import {theme} from '../../constants';
import {text} from '../../text';

type Props = {
  section: {
    number: number;
    total: number;
    status: string;
    date: string;
  };
};

const HistoryDataHeader: React.FC<Props> = ({section}) => {
  const renderStatusColor = () => {
    if (section.status === 'Shipping') {
      return '#FFA462';
    } else if (section.status === 'Delivered') {
      return '#00824B';
    } else if (section.status === 'Canceled') {
      return '#F84C6B';
    }
  };

  const renderStatusText = () => {
    if (section.status === 'Shipping') {
      return 'Shipping';
    } else if (section.status === 'Delivered') {
      return 'Delivered';
    } else if (section.status === 'Canceled') {
      return 'Canceled';
    }
  };

  return (
    <View
      style={{
        borderTopWidth: 1,
        borderTopColor: theme.colors.lightBlue,
        padding: 20,
        paddingLeft: 0,
        marginLeft: 20,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 8,
        }}
      >
        <text.H5>#{section.number}</text.H5>
        <text.H5>${section.total}</text.H5>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 12,
            lineHeight: 12 * 1.5,
            color: renderStatusColor(),
            ...theme.fonts.DMSans_400Regular,
          }}
        >
          {renderStatusText()}
        </Text>
        <Text
          style={{
            fontSize: 12,
            lineHeight: 12 * 1.5,
            ...theme.fonts.DMSans_400Regular,
            color: theme.colors.textColor,
          }}
        >
          {section.date}
        </Text>
      </View>
    </View>
  );
};

export default HistoryDataHeader;
