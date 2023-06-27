import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {showMessage} from 'react-native-flash-message';

import {components} from '../components';
import {theme, promocodes} from '../constants';
import {svg} from '../assets/svg';

const MyPromocodes = () => {
  const renderHeader = () => {
    return <components.Header title='My promocodes' goBack={true} />;
  };

  const renderPromocodes = () => {
    return (
      <View>
        {promocodes.map((item, index, array) => {
          const lastItem = index === array.length - 1;

          return (
            <TouchableOpacity
              key={index}
              style={{
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
                borderColor: '#DBE9F5',
                paddingHorizontal: 20,
                marginLeft: 20,
                paddingVertical: 20,
                borderTopLeftRadius: 3,
                borderBottomLeftRadius: 3,
                marginBottom: lastItem ? 24 : 14,
              }}
              onPress={() => {
                showMessage({
                  message: `Promocode ${item.name} copied to clipboard`,
                  type: 'success',
                  icon: 'success',
                });
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 8,
                }}
              >
                <svg.TagSvg />
                <Text
                  style={{
                    marginRight: 'auto',
                    marginLeft: 10,
                    color: theme.colors.mainColor,
                    ...theme.fonts.H3,
                  }}
                >
                  {item.discount}%
                </Text>
                <svg.CopySvg />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Text
                  style={{
                    ...theme.fonts.DMSans_400Regular,
                    fontSize: 12,
                    color:
                      item.status === 'active'
                        ? theme.colors.textColor
                        : '#F84C6B',
                    lineHeight: 12 * 1.5,
                  }}
                >
                  {item.valid_till}
                </Text>
                <Text
                  style={{
                    ...theme.fonts.DMSans_400Regular,
                    fontSize: 12,
                    color: theme.colors.textColor,
                    lineHeight: 12 * 1.5,
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderPromocodesIsEmpty = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          justifyContent: 'center',
        }}
      >
        <View style={{marginBottom: 30}}>
          <svg.PromocodeGiftSvg />
        </View>
        <Text
          style={{
            ...theme.fonts.H2,
            color: theme.colors.mainColor,
            textTransform: 'capitalize',
            marginBottom: 14,
          }}
        >
          You don’t have{'\n'}promocodes yet!
        </Text>
        <Text
          style={{...theme.fonts.textStyle_16, color: theme.colors.textColor}}
        >
          Qui ex aute ipsum duis. Incididunt adipisicing{'\n'}voluptate laborum.
        </Text>
      </ScrollView>
    );
  };

  const renderFooter = () => {
    return (
      <View>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 20,
          }}
          enableOnAndroid={true}
          showsVerticalScrollIndicator={false}
        >
          <components.InputField
            placeholder='Code2023'
            label='Enter the voucher'
            containerStyle={{
              marginBottom: 20,
              marginTop: 20,
            }}
          />
          <components.Button
            title='Add promocode'
            onPress={() => {
              console.log('add');
            }}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  };

  const renderInput = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 20,
        }}
      >
        <components.InputField
          placeholder='Promocode'
          label='Enter the voucher'
          containerStyle={{flex: 1, marginRight: 10}}
        />
        <View style={{width: '30%'}}>
          <components.Button
            title='+ add'
            onPress={() => {
              console.log('add');
            }}
          />
        </View>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{paddingTop: 25}}
        enableOnAndroid={true}
      >
        {renderPromocodes()}
        {renderInput()}
      </KeyboardAwareScrollView>
    );
  };

  return (
    <components.SafeAreaView>
      {renderHeader()}
      {promocodes.length > 0 ? renderContent() : renderPromocodesIsEmpty()}
      {promocodes.length > 0 ? null : renderFooter()}
    </components.SafeAreaView>
  );
};

export default MyPromocodes;
