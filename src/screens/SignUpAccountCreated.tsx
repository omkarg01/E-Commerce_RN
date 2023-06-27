import React from 'react';
import {ScrollView} from 'react-native';

import {text} from '../text';
import {svg} from '../assets/svg';
import {components} from '../components';
import {useAppNavigation} from '../hooks';

const SignUpAccountCreated: React.FC = () => {
  const navigation = useAppNavigation();

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          justifyContent: 'center',
          paddingVertical: 20,
        }}
      >
        <svg.KeySvg />
        <text.H2
          style={{
            marginTop: 30,
            marginBottom: 14,
          }}
        >
          Account Created!
        </text.H2>
        <text.T16>Your account had beed created{'\n'}successfully.</text.T16>
      </ScrollView>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='go to sign in'
        containerStyle={{margin: 20}}
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      />
    );
  };

  return (
    <components.SafeAreaView>
      {renderContent()}
      {renderButton()}
    </components.SafeAreaView>
  );
};

export default SignUpAccountCreated;
