import React, {useState} from 'react';
import ParsedText from 'react-native-parsed-text';
import {View, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {text} from '../../text';
import {theme} from '../../constants';
import {components} from '../../components';
import {useAppDispatch, useAppNavigation, useAppSelector} from '../../hooks';
import {validation} from '../../utils/validation';
import {setCredentials} from '../../store/slices/authSlice';
import {useEffectOnce} from 'usehooks-ts';
import {useLoginMutation} from '../../store/slices/usersApiSlice';
import {err} from 'react-native-svg/lib/typescript/xml';
// import {useLoginMutation} from '../../store/slices/apiSlice';

const SignIn: React.FC = () => {
  const navigation = useAppNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useAppDispatch();

  const [login, {isLoading}] = useLoginMutation();
  // const {
  //   data: carouselData,
  //   error: carouselError,
  //   isLoading: carouselLoading,
  // } = useLoginQuery();

  const submitHandler = async (e: any) => {
    e.preventDefault();
    if (validation({email, password})) {
      const res = await login({email, password}).unwrap();
      if (res) {
        console.log(res);
        rememberMe ? dispatch(setCredentials({email, password})) : null;
      }
      navigation.navigate('TabNavigator');
    } else {
      console.error('Invalid credentials');
    }
  };

  const renderHeader = () => {
    return <components.Header goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        contentContainerStyle={{
          padding: 20,
          justifyContent: 'center',
          flexGrow: 1,
        }}
      >
        <text.H1 style={{marginBottom: 14}}>Welcome Back!</text.H1>
        <text.T16 style={{marginBottom: 40}}>Sign in to continue</text.T16>
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 32,
          }}
        >
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => setRememberMe((rememberMeState) => !rememberMeState)}
          >
            <components.Checkbox active={rememberMe} />
            <text.T14 style={{marginLeft: 10}}>Remember me</text.T14>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginLeft: 'auto'}}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <text.T16>Forgot password?</text.T16>
          </TouchableOpacity>
        </View>
        <components.Button
          title='Sign in'
          containerStyle={{marginBottom: 20}}
          onPress={async () => {
            // e.preventDefault();
            try {
              if (validation({email, password})) {
                const res = await login({email, password}).unwrap();
                rememberMe ? dispatch(setCredentials({email, password})) : null;
                if (res) {
                  console.log(res);
                  navigation.navigate('TabNavigator');
                }
              } else {
                console.error('Invalid credentials');
              }
            } catch (error) {
              throw error;
            }
          }}
        />
        <ParsedText
          style={{...theme.fonts.textStyle_16, color: theme.colors.textColor}}
          parse={[
            {
              pattern: /Sign up./,
              style: {color: theme.colors.mainColor},
              onPress: () => navigation.navigate('SignUp'),
            },
          ]}
        >
          Don’t have an account? Sign up.
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

export default SignIn;
