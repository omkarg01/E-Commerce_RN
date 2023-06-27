import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {text} from '../text';
import {components} from '../components';
import {useAppNavigation} from '../hooks';
import {validation} from '../utils/validation';

const NewPassword: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const renderHeader = () => {
    return <components.Header title='Reset password' goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 25,
          paddingBottom: 20,
        }}
      >
        <text.T16
          style={{
            marginBottom: 40,
          }}
        >
          Enter new password and confirm.
        </text.T16>
        <components.InputField
          label='password'
          placeholder='••••••••'
          onChangeText={(text) => setPassword(text)}
          containerStyle={{
            marginBottom: 20,
          }}
          value={password}
          eyeOffIcon={true}
          secureTextEntry={true}
        />
        <components.InputField
          label='confirm password'
          placeholder='••••••••'
          onChangeText={(text) => setConfirmPassword(text)}
          containerStyle={{
            marginBottom: 20,
          }}
          value={confirmPassword}
          eyeOffIcon={true}
          secureTextEntry={true}
        />
        <components.Button
          title='change password'
          onPress={() => {
            if (validation({password, confirmPassword})) {
              navigation.navigate('ForgotPasswordSentEmail');
            }
          }}
        />
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

export default NewPassword;
