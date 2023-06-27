import ParsedText from 'react-native-parsed-text';
import {View, TextInput} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {text} from '../text';
import {theme} from '../constants';
import {components} from '../components';
import {useAppNavigation} from '../hooks';

const ConfirmationCode: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const inp1Ref = useRef<TextInput>({focus: () => {}} as TextInput);
  const inp2Ref = useRef<TextInput>({focus: () => {}} as TextInput);
  const inp3Ref = useRef<TextInput>({focus: () => {}} as TextInput);
  const inp4Ref = useRef<TextInput>({focus: () => {}} as TextInput);

  const [inp1, setInp1] = useState<string>('');
  const [inp2, setInp2] = useState<string>('');
  const [inp3, setInp3] = useState<string>('');
  const [inp4, setInp4] = useState<string>('');

  const code = inp1 + inp2 + inp3 + inp4;

  useEffect(() => {
    if (code.length === 4) {
      navigation.navigate('SignUpAccountCreated');
    }
  }, [code]);

  const line = {
    width: '100%',
    height: 4,
    borderRadius: 2.5,
  };

  const inputStyle: object = {
    textAlign: 'center',
    height: 40,
    fontSize: 20,
    ...theme.fonts.DMSans_400Regular,
    color: theme.colors.mainColor,
  };

  const renderHeader = () => {
    return <components.Header title='Verify your phone number' goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 25,
          paddingHorizontal: 20,
        }}
      >
        <text.T16 style={{marginBottom: 20}}>
          Enter your OTP code here.
        </text.T16>
        <View
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <View style={{width: 20, marginRight: 13}}>
            <TextInput
              ref={inp1Ref}
              maxLength={1}
              style={{...inputStyle}}
              keyboardType='number-pad'
              onChangeText={(text) => {
                setInp1(text);
                if (text !== '') {
                  inp2Ref.current.focus();
                } else if (text === '') {
                  inp1Ref.current.focus();
                }
              }}
            />
            <View
              style={{
                ...line,
                backgroundColor:
                  inp1 !== ''
                    ? theme.colors.transparent
                    : theme.colors.mainColor,
              }}
            />
          </View>
          <View style={{width: 20, marginRight: 13}}>
            <TextInput
              ref={inp2Ref}
              maxLength={1}
              style={{...inputStyle}}
              keyboardType='number-pad'
              onChangeText={(text) => {
                setInp2(text);
                if (text !== '') {
                  inp3Ref.current.focus();
                } else if (text === '') {
                  inp1Ref.current.focus();
                }
              }}
            />
            <View
              style={{
                ...line,
                backgroundColor:
                  inp2 !== ''
                    ? theme.colors.transparent
                    : theme.colors.mainColor,
              }}
            />
          </View>
          <View style={{width: 20, marginRight: 13}}>
            <TextInput
              ref={inp3Ref}
              maxLength={1}
              style={{...inputStyle}}
              keyboardType='number-pad'
              onChangeText={(text) => {
                setInp3(text);
                if (text !== '') {
                  inp4Ref.current.focus();
                } else if (text === '') {
                  inp2Ref.current.focus();
                }
              }}
            />
            <View
              style={{
                ...line,
                backgroundColor:
                  inp3 !== ''
                    ? theme.colors.transparent
                    : theme.colors.mainColor,
              }}
            />
          </View>
          <View style={{width: 20, marginRight: 13}}>
            <TextInput
              ref={inp4Ref}
              maxLength={1}
              style={{...inputStyle}}
              keyboardType='number-pad'
              onChangeText={(text) => {
                setInp4(text);
                if (text === '') {
                  inp3Ref.current.focus();
                }
              }}
            />
            <View
              style={{
                ...line,
                backgroundColor:
                  inp4 !== ''
                    ? theme.colors.transparent
                    : theme.colors.mainColor,
              }}
            />
          </View>
        </View>
        <ParsedText
          style={{
            ...theme.fonts.DMSans_400Regular,
            fontSize: 16,
            lineHeight: 16 * 1.7,
            color: theme.colors.textColor,
            marginBottom: 30,
          }}
          parse={[
            {
              pattern: /Resend./,
              style: {color: theme.colors.mainColor},
              onPress: () => console.log('Pressed Resend'),
            },
          ]}
        >
          Did not receive the OTP? Resend.
        </ParsedText>
        <components.Button
          title='verify'
          onPress={() => {
            navigation.navigate('SignUpAccountCreated');
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

export default ConfirmationCode;
