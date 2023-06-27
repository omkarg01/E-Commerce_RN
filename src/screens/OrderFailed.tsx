import React from 'react';
import {View, ScrollView} from 'react-native';
import {setScreen} from '../store/slices/tabSlice';
import {useAppDispatch} from '../hooks';

import {components} from '../components';
import {text} from '../text';
import {svg} from '../assets/svg';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'OrderFailed'>;

const OrderFailed: React.FC<Props> = ({navigation}): JSX.Element => {
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
        <svg.FailedSvg />
        <text.H2
          style={{
            marginTop: 30,
            marginBottom: 14,
          }}
        >
          Sorry! Your order{'\n'}has failed!
        </text.H2>
        <text.T16>
          Something went wrong. Please try again to contimue your order.
        </text.T16>
      </ScrollView>
    );
  };

  const renderFooter: () => JSX.Element = () => {
    return (
      <View style={{padding: 20}}>
        <components.Button
          title='try again'
          onPress={() => console.log('Try again')}
          containerStyle={{marginBottom: 14}}
        />
        <components.Button
          title='go to my profile'
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

export default OrderFailed;
