import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {text} from '../text';
import {components} from '../components';
import {useAppNavigation} from '../hooks';
import {validation} from '../utils/validation';

const ForgotPassword: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const [email, setEmail] = useState('');

  const renderHeader = () => {
    return <components.Header title='Forgot password' goBack={true} />;
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
        <text.T16 style={{marginBottom: 40}}>
          Please enter your email address. You will receive a link to create a
          new password via email.
        </text.T16>
        <components.InputField
          label='email'
          placeholder='calliemosley@mail.com'
          onChangeText={(text) => setEmail(text)}
          containerStyle={{marginBottom: 20}}
          value={email}
        />
        <components.Button
          title='Send'
          onPress={() => {
            if (validation({email})) {
              navigation.navigate('NewPassword');
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

export default ForgotPassword;
