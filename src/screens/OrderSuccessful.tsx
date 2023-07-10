import React from 'react';
import {View, ScrollView} from 'react-native';

import {setScreen} from '../store/slices/tabSlice';
import {useAppDispatch} from '../hooks';

import {components} from '../components';
import {text} from '../text';
import {svg} from '../assets/svg';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'OrderSuccessful'>;

const OrderSuccessful: React.FC<Props> = ({navigation}): JSX.Element => {
  const dispatch = useAppDispatch();

  const renderContent: () => JSX.Element = () => {
    const scrollViewStyle: object = {
      flexGrow: 1,
      paddingHorizontal: 20,
      justifyContent: 'center',
    };

    return (
      <ScrollView
        contentContainerStyle={{...scrollViewStyle}}
        showsVerticalScrollIndicator={false}
      >
        <text.H1
          style={{
            marginTop: 30,
            marginBottom: 14,
          }}
        >
          CANDIBRAIN
        </text.H1>
        <svg.CheckSvg />
        <text.H2
          style={{
            marginTop: 30,
            marginBottom: 14,
          }}
        >
          Thank you for{'\n'}your order!
        </text.H2>
        <text.T16>
          Your order will be delivered on time.{'\n'}Thank you!
        </text.T16>
      </ScrollView>
    );
  };

  const renderFooter: () => JSX.Element = () => {
    return (
      <View style={{padding: 20}}>
        <components.Button
          title='View orders'
          onPress={() => console.log('Try again')}
          containerStyle={{marginBottom: 14}}
        />
        <components.Button
          title='Continue Shopping'
          onPress={() => {
            dispatch(setScreen('Profile'));
            navigation.navigate('TabNavigator');
          }}
          transparent={true}
        />
      </View>
    );
  };

  return (
    <components.SafeAreaView>
      {renderContent()}
      {renderFooter()}
    </components.SafeAreaView>
  );
};

export default OrderSuccessful;
