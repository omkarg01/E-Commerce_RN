import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {RootStackParamList} from '../types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

import TabNavigator from './TabNavigator';
import {screens} from '../screens';

const StackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName='Onboarding'>
      <RootStack.Screen
        name='Onboarding'
        component={screens.Onboarding}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='SignIn'
        component={screens.SignIn}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='SignUp'
        component={screens.SignUp}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='VerifyYourPhoneNumber'
        component={screens.VerifyYourPhoneNumber}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='VerifyYourEmail'
        component={screens.VerifyYourEmail}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='ForgotPassword'
        component={screens.ForgotPassword}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='NewPassword'
        component={screens.NewPassword}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='ForgotPasswordSentEmail'
        component={screens.ForgotPasswordSentEmail}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='ConfirmationCode'
        component={screens.ConfirmationCode}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='SignUpAccountCreated'
        component={screens.SignUpAccountCreated}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='TabNavigator'
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='Shop'
        component={screens.Shop}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='OrderFailed'
        component={screens.OrderFailed}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='OrderSuccessful'
        component={screens.OrderSuccessful}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='Checkout'
        component={screens.Checkout}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='Notifications'
        component={screens.Notifications}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='TrackYourOrder'
        component={screens.TrackYourOrder}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='OrderHistory'
        component={screens.OrderHistory}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='EditProfile'
        component={screens.EditProfile}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='LeaveAReview'
        component={screens.LeaveAReview}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='MyAddress'
        component={screens.MyAddress}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='AddANewAddress'
        component={screens.AddANewAddress}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='MyPromocodes'
        component={screens.MyPromocodes}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='Product'
        component={screens.Product}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='Reviews'
        component={screens.Reviews}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='Description'
        component={screens.Description}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='PaymentMethod'
        component={screens.PaymentMethod}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='AddANewCard'
        component={screens.AddANewCard}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='Filter'
        component={screens.Filter}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default StackNavigator;
