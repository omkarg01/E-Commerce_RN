import React from 'react';
import {ScrollView} from 'react-native';

import {text} from '../text';
import {svg} from '../assets/svg';
import {components} from '../components';
import {useAppNavigation} from '../hooks';

const ForgotPasswordSentEmail: React.FC = () => {
  const navigation = useAppNavigation();

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          paddingHorizontal: 20,
          paddingTop: 25,
          paddingBottom: 20,
          flexGrow: 1,
        }}
      >
        <svg.KeySvg />
        <text.H2
          style={{
            marginTop: 30,
            marginBottom: 14,
          }}
        >
          Your password has{'\n'}been reset!
        </text.H2>
        <text.T16>
          Qui ex aute ipsum duis. Incididunt adipisicing voluptate laborum
        </text.T16>
      </ScrollView>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='done'
        containerStyle={{padding: 20}}
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

export default ForgotPasswordSentEmail;
