import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {text} from '../text';
import {components} from '../components';
import {useAppDispatch, useAppNavigation} from '../hooks';
import {editAddress, saveAddress} from '../store/slices/cartSlice';
import {AddressType} from '../types/AddressType';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import {showMessage} from 'react-native-flash-message';

type Props = NativeStackScreenProps<RootStackParamList, 'AddANewAddress'>;

const AddANewAddress: React.FC<Props> = ({route}): JSX.Element => {
  const {address: currentAddress} = route.params || {};
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  console.log('currentAddress', currentAddress);

  const [selected, setSelected] = useState(false);
  const [title, setTitle] = useState(currentAddress?.type);
  const [address, setAddress] = useState(currentAddress?.address);

  const renderHeader = () => {
    return <components.Header title='Add a new address' goBack={true} />;
  };

  const renderMap = () => {
    return (
      <View
        style={{
          marginTop: 10,
          flex: 1,
          paddingLeft: 20,
        }}
      >
        <components.Image
          source={{uri: 'https://george-fx.github.io/kastelli/map/01.jpg'}}
          style={{flex: 1}}
          resizeMode='contain'
        />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 40,
          paddingBottom: 20,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
        style={{flexGrow: 0}}
      >
        <components.InputField
          label='title'
          placeholder='Home, Office or Other'
          containerStyle={{
            marginBottom: 22,
          }}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        {/* <components.InputField
          label='flat_no'
          placeholder='Flat No'
          containerStyle={{
            marginBottom: 22,
          }}
          value={address}
          onChangeText={(text) => setAddress(text)}
        /> */}
        <components.InputField
          label='new address'
          placeholder='Enter your address'
          containerStyle={{
            marginBottom: 22,
          }}
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        {/* <components.InputField
          label='new address'
          placeholder='Enter your address'
          containerStyle={{
            marginBottom: 22,
          }}
          value={address}
          onChangeText={(text) => setAddress(text)}
        /> */}
        {/* <TouchableOpacity
          style={{marginBottom: 10, flexDirection: 'row', alignItems: 'center'}}
          onPress={() => setSelected(!selected)}
        >
          <components.Checkbox active={selected} />
          <text.T14
            style={{
              marginLeft: 10,
            }}
          >
            Use current location
          </text.T14>
        </TouchableOpacity> */}
      </KeyboardAwareScrollView>
    );
  };

  const renderButton = () => {
    const onSave = () => {
      if (title && address) {
        const newAddress: AddressType = {
          id: currentAddress?.id,
          type: title,
          address: address,
        };
        currentAddress
          ? dispatch(editAddress(newAddress))
          : dispatch(saveAddress(newAddress));
        navigation.goBack();
      } else {
        showMessage({
          message: 'Please enter Title and Address',
          type: 'info',
          icon: 'info',
          style: {
            marginTop: 70,
          },
        });
      }
    };
    return (
      <components.Button
        title={currentAddress ? 'update' : 'save address'}
        onPress={onSave}
        containerStyle={{
          margin: 20,
        }}
      />
    );
  };

  return (
    <components.SafeAreaView>
      {renderHeader()}
      {/* {renderMap()} */}
      {renderContent()}
      {renderButton()}
    </components.SafeAreaView>
  );
};

export default AddANewAddress;
