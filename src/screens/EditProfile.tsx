import {View, Text} from 'react-native';
import React, {useState} from 'react';
import PhoneInput from 'react-native-phone-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {text} from '../text';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';
import {useAppNavigation, useAppSelector} from '../hooks';
import {validation} from '../utils/validation';
import {showMessage} from 'react-native-flash-message';
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from '../store/slices/usersApiSlice';
import {launchImageLibrary} from 'react-native-image-picker';
import {MediaType, OptionsCommon} from '../types/RNImagePickerType';
import {UserType} from '../types/UserType';

const EditProfile: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const {data, error} = useGetProfileQuery();
  const [updateProfile, {isLoading}] = useUpdateProfileMutation();

  const [name, setName] = useState<string>(data?.name || '');
  const [email, setEmail] = useState<string>(data?.email || '');
  const [phone, setPhone] = useState<string>(data?.phone || '');
  const [city, setCity] = useState<string>(data?.city || '');
  const [image, setImage] = useState<string>(
    data?.image || 'https://omkarg01.github.io/kastelli/assets/user.png',
  );

  console.log('data', data);

  const renderHeader: () => JSX.Element = () => {
    return <components.Header title='Edit profile' goBack={true} />;
  };

  const chooseFile = (type: MediaType) => {
    let options: OptionsCommon = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      let assets: any = response.assets;
      console.log(assets[0].uri);
      setImage(assets[0].uri);

      // if (result.didCancel) {
      //   alert('User cancelled camera picker');
      //   return;
      // } else if (result.errorCode == 'camera_unavailable') {
      //   alert('Camera not available on device');
      //   return;
      // } else if (result.errorCode == 'permission') {
      //   alert('Permission not satisfied');
      //   return;
      // } else if (result.errorCode == 'others') {
      //   alert(result.errorMessage);
      //   return;
      // }
      // console.log('base64 -> ', result.base64);
      // console.log('uri -> ', result.uri);
      // console.log('width -> ', result.width);
      // console.log('height -> ', result.height);
      // console.log('fileSize -> ', result.fileSize);
      // console.log('type -> ', result.type);
      // console.log('fileName -> ', result.fileName);
      // // setFilePath(response);
      // creatFormData(result);
    });
  };

  const submitHandler = async () => {
    const profile: UserType = {
      name,
      phone,
      city,
      email,
      image,
    };

    const res = await updateProfile(profile).unwrap();
    if (res) {
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
  };

  const renderUser: () => JSX.Element = () => {
    return (
      <View
        style={{
          marginBottom: 40,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <components.Image
          source={{
            uri: image,
          }}
          style={{
            width: 60,
            height: 60,
            marginRight: 14,
          }}
          imageStyle={{borderRadius: 30}}
        />
        <svg.CameraSvg />
        <text.T14 style={{marginLeft: 10}} onPress={() => chooseFile('photo')}>
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
          onChangeText={(text: string) => setName(text)}
          check={false}
          value={name}
        />
        <components.InputField
          label='email'
          placeholder='calliemosley@mail.com'
          containerStyle={{marginBottom: 20}}
          onChangeText={(text: string) => setEmail(text)}
          check={false}
          value={email}
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
            initialCountry={'in'}
            textStyle={{
              ...theme.fonts.DMSans_400Regular,
              fontSize: 16,
              color: theme.colors.mainColor,
            }}
            onChangePhoneNumber={setPhone}
            initialValue={phone}
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
          label='city'
          placeholder='Mumbai'
          containerStyle={{marginBottom: 20}}
          onChangeText={(text: string) => setCity(text)}
          value={city}
        />
      </View>
    );
  };

  const renderButton: () => JSX.Element = () => {
    return <components.Button title='save changes' onPress={submitHandler} />;
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
