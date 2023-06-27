import {ScrollView, View, Text} from 'react-native';
import React from 'react';
import DashedLine from 'react-native-dashed-line';

import {components} from '../components';
import {theme} from '../constants';

const TrackYourOrder: React.FC = (): JSX.Element => {
  const renderHeader = () => {
    return <components.Header goBack={true} title='Track your order' />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingTop: 25,
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 14,
          }}
        >
          <Text
            style={{color: theme.colors.textColor, ...theme.fonts.textStyle_14}}
          >
            Your order:
          </Text>
          <View style={{flex: 1, marginHorizontal: 14}}>
            <DashedLine
              dashLength={3}
              dashThickness={2}
              dashGap={4}
              dashColor={theme.colors.lightBlue}
              dashStyle={{borderRadius: 5}}
            />
          </View>
          <Text
            style={{color: theme.colors.mainColor, ...theme.fonts.textStyle_14}}
          >
            #648752
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}
        >
          <Text
            style={{color: theme.colors.textColor, ...theme.fonts.textStyle_14}}
          >
            Date
          </Text>
          <View style={{flex: 1, marginHorizontal: 14}}>
            <DashedLine
              dashLength={3}
              dashThickness={2}
              dashGap={4}
              dashColor={theme.colors.lightBlue}
              dashStyle={{borderRadius: 5}}
            />
          </View>
          <Text
            style={{color: theme.colors.mainColor, ...theme.fonts.textStyle_14}}
          >
            Feb 25, 2023 at 8:32 PM
          </Text>
        </View>
        <components.OrderStatus
          title='Order confirmed'
          description='Your order has been confirmed'
          status={true}
        />
        <components.OrderStatus
          title='Order shipping'
          description='Estimated for Feb 27, 2023'
          status={true}
        />
        <components.OrderStatus
          title='Courier delivering'
          description='Estimated for Feb 27, 2023'
          status={false}
        />
        <components.OrderStatus
          title='Receiving'
          description='Estimated for Feb 27, 2023'
          status={false}
        />
      </ScrollView>
    );
  };

  return (
    <components.SafeAreaView>
      {renderHeader()}
      {renderContent()}
    </components.SafeAreaView>
  );
};

export default TrackYourOrder;
