import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAppNavigation} from '../hooks';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets/svg';

const AddANewCard: React.FC = () => {
  const navigation = useAppNavigation();

  const renderHeader = () => {
    return <components.Header goBack={true} title='Add a new card' />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 25,
          paddingBottom: 20,
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{marginBottom: 28, flexDirection: 'row', alignItems: 'center'}}
        >
          <components.Image
            source={{
              uri: 'https://george-fx.github.io/kastelli/payments/01.png',
            }}
            style={{height: 12, width: 39.43, marginRight: 17.57}}
          />
          <components.Image
            source={{
              uri: 'https://george-fx.github.io/kastelli/payments/02.png',
            }}
            style={{height: 16, width: 25.93}}
          />
        </View>
        <components.InputField
          label='Name'
          placeholder='Mariah Franklin'
          containerStyle={{marginBottom: 20}}
        />
        <components.InputField
          label='card number'
          placeholder='xxxx xxxx xxxx 1234'
          icon={<svg.CameraSvg />}
          containerStyle={{marginBottom: 20}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <components.InputField
            label='MM/yy'
            placeholder='12/23'
            containerStyle={{width: '47%'}}
            secureTextEntry={true}
          />
          <components.InputField
            label='cvv'
            placeholder='•••'
            containerStyle={{width: '47%'}}
            secureTextEntry={true}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              paddingLeft: 20,
              height: 50,
              width: '47%',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: '#DBE9F5',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                ...theme.fonts.textStyle_14,
                color: theme.colors.mainColor,
              }}
            >
              - Choose -
            </Text>
            <View
              style={{
                position: 'absolute',
                top: -12,
                left: 10,
                paddingHorizontal: 10,
                backgroundColor: theme.colors.white,
              }}
            >
              <Text
                style={{
                  ...theme.fonts.DMSans_500Medium,
                  fontSize: 12,
                  textTransform: 'uppercase',
                  color: theme.colors.textColor,
                  lineHeight: 12 * 1.7,
                }}
              >
                country
              </Text>
            </View>
          </TouchableOpacity>
          <components.InputField
            label='zip code'
            placeholder='00000'
            secureTextEntry={true}
            containerStyle={{width: '47%'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <components.Button
            title='cancel'
            transparent={true}
            containerStyle={{width: '47%'}}
            onPress={() => navigation.goBack()}
          />
          <components.Button
            title='save'
            containerStyle={{width: '47%'}}
            onPress={() => navigation.goBack()}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  };

  return (
    <components.SafeAreaView>
      {renderHeader()}
      {renderContent()}
    </components.SafeAreaView>
  );
};

export default AddANewCard;
