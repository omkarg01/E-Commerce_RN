import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import ParsedText from 'react-native-parsed-text';

import {text} from '../../text';
import {theme} from '../../constants';
import {components} from '../../components';
import {useAppNavigation} from '../../hooks';
import {validation} from '../../utils/validation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useRegisterMutation} from '../../store/slices/usersApiSlice';

const SignUp: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setUserName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    });

    return unsubscribe;
  }, [navigation]);

  const [register, {isLoading}] = useRegisterMutation();

  const renderHeader = () => {
    return <components.Header goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: 20,
          justifyContent: 'center',
        }}
        enableOnAndroid={true}
      >
        <text.H1 style={{marginBottom: 40}}>Sign up</text.H1>
        <components.InputField
          label='Name'
          placeholder='Callie Mosley'
          containerStyle={{marginBottom: 20}}
          onChangeText={(text) => setUserName(text)}
          value={username}
          checkIcon={true}
        />
        <components.InputField
          label='Email'
          placeholder='calliemosley@mail.com'
          containerStyle={{marginBottom: 20}}
          onChangeText={(text) => setEmail(text)}
          value={email}
          checkIcon={true}
        />
        <components.InputField
          label='password'
          placeholder='••••••••'
          containerStyle={{marginBottom: 20}}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          eyeOffIcon={true}
        />
        <components.InputField
          label='confirm password'
          placeholder='••••••••'
          containerStyle={{marginBottom: 20}}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          eyeOffIcon={true}
          secureTextEntry={true}
        />
        <components.Button
          title='Sign up'
          containerStyle={{marginBottom: 20}}
          onPress={() => {
            if (validation({username, email, password, confirmPassword})) {
              navigation.navigate('VerifyYourPhoneNumber');
            }
          }}
        />
        <ParsedText
          style={{...theme.fonts.textStyle_16, color: theme.colors.textColor}}
          parse={[
            {
              pattern: /Sign in./,
              style: {color: theme.colors.mainColor},
              onPress: () => navigation.navigate('SignIn'),
            },
          ]}
        >
          Already have an account? Sign in.
        </ParsedText>
      </KeyboardAwareScrollView>
    );
  };

  const renderFooter = () => {
    return (
      <View style={{padding: 20}}>
        <text.T16 style={{marginBottom: 20}}>
          Sign in with social networks:
        </text.T16>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <components.Facebook onPress={() => console.log('Facebook')} />
          <components.Twitter onPress={() => console.log('Twitter')} />
          <components.Google onPress={() => console.log('Google')} />
        </View>
      </View>
    );
  };

  return (
    <components.SafeAreaView>
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </components.SafeAreaView>
  );
};

export default SignUp;
