import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import {svg} from '../assets/svg';
import {components} from '../components';
import {useAppNavigation} from '../hooks';
import {addresses, theme} from '../constants';

const MyAddress: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const renderHeader = () => {
    return <components.Header goBack={true} title='My address' />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingTop: 25,
          paddingBottom: 20,
          paddingLeft: 20,
        }}
      >
        {addresses.map((item, index, array) => {
          const lastItem = index === array.length - 1;

          return (
            <TouchableOpacity
              key={index}
              style={{
                padding: 20,
                borderWidth: 1,
                borderRightWidth: 0,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                marginBottom: lastItem ? 0 : 14,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderColor: theme.colors.lightBlue,
              }}
              onPress={() => navigation.navigate('AddANewAddress')}
            >
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 10,
                  }}
                >
                  <View style={{marginRight: 10}}>
                    <item.icon />
                  </View>
                  <Text
                    style={{
                      ...theme.fonts.H4,
                      color: theme.colors.mainColor,
                    }}
                  >
                    {item.type}
                  </Text>
                </View>
                <Text
                  style={{
                    ...theme.fonts.DMSans_400Regular,
                    fontSize: 12,
                    lineHeight: 12 * 1.5,
                    color: theme.colors.textColor,
                  }}
                  numberOfLines={1}
                >
                  {item.address}
                </Text>
              </View>
              <svg.EditSvg />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='+ add new address'
        onPress={() => navigation.navigate('AddANewAddress')}
        containerStyle={{padding: 20}}
      />
    );
  };

  return (
    <components.SafeAreaView>
      {renderHeader()}
      {renderContent()}
      {renderButton()}
    </components.SafeAreaView>
  );
};

export default MyAddress;
