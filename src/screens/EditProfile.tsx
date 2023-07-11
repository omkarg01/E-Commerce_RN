import {View, Text} from 'react-native';
import React, {useState} from 'react';
import PhoneInput from 'react-native-phone-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {text} from '../text';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';
import {useAppNavigation} from '../hooks';
import {validation} from '../utils/validation';
import {showMessage} from 'react-native-flash-message';

const EditProfile: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  const renderHeader: () => JSX.Element = () => {
    return <components.Header title='Edit profile' goBack={true} />;
  };

  const renderUser: () => JSX.Element = () => {
    const userLink: string =
      'https://george-fx.github.io/kastelli/users/01.jpg';

    return (
      <View
        style={{
          marginBottom: 40,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <components.Image
          source={{uri: userLink}}
          style={{
            width: 60,
            height: 60,
            marginRight: 14,
          }}
          imageStyle={{borderRadius: 30}}
        />
        <svg.CameraSvg />
        <text.T14
          style={{marginLeft: 10}}
          onPress={() => console.log('Upload new photo')}
        >
          Upload new photo
        </text.T14>
      </View>
    );
  };

  const renderForm: () => JSX.Element = () => {
    return (
      <View>
        <components.InputField
          label='name'
          placeholder='Callie Mosley'
          containerStyle={{marginBottom: 20}}
          onChangeText={(text: string) => setUsername(text)}
          check={false}
        />
        <components.InputField
          label='email'
          placeholder='calliemosley@mail.com'
          containerStyle={{marginBottom: 20}}
          onChangeText={(text: string) => setEmail(text)}
          check={false}
        />
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#DBE9F5',
            marginBottom: 20,
          }}
        >
          <PhoneInput
            style={{
              paddingVertical: 16,
              paddingHorizontal: 25,
            }}
            initialCountry={'us'}
            textStyle={{
              ...theme.fonts.DMSans_400Regular,
              fontSize: 16,
              color: theme.colors.mainColor,
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: -12,
              left: 13,
              paddingHorizontal: 10,
              backgroundColor: theme.colors.white,
            }}
          >
            <Text
              style={{
                ...theme.fonts.DMSans_500Medium,
                fontSize: 12,
                textTransform: 'uppercase',
                color: theme.colors.textColor,
                lineHeight: 12 * 1.7,
              }}
            >
              phone number
            </Text>
          </View>
        </View>
        <components.InputField
          label='location'
          placeholder='Chicago, USA'
          containerStyle={{marginBottom: 20}}
          onChangeText={(text: string) => setLocation(text)}
        />
      </View>
    );
  };

  const renderButton: () => JSX.Element = () => {
    return (
      <components.Button
        title='save changes'
        onPress={() => {
          if (true) {
            navigation.goBack();
            showMessage({
              message: 'Profile has been updated',
              type: 'success',
              icon: 'success',
              style: {
                marginTop: 70,
              },
            });
          }
        }}
      />
    );
  };

  const renderContent: () => JSX.Element = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          flexGrow: 1,
          paddingTop: 55,
          paddingBottom: 20,
        }}
      >
        {renderUser()}
        {renderForm()}
        {renderButton()}
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

export default EditProfile;
