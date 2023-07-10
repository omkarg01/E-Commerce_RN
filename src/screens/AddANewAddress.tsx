import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {text} from '../text';
import {components} from '../components';
import {useAppDispatch, useAppNavigation, useAppSelector} from '../hooks';
import {saveAddress} from '../store/slices/cartSlice';
import {AddressType} from '../types/AddressType';
import {svg} from '../assets/svg';

const AddANewAddress: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const addresses = useAppSelector((state) => state.cart.total);
  const products = useAppSelector((state) => state.cart.list);

  const [selected, setSelected] = useState(false);
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');

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
    console.log('address', address);
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
          onChangeText={(text) => setTitle(text)}
        />
        <components.InputField
          label='new address'
          placeholder='Enter your address'
          containerStyle={{
            marginBottom: 22,
          }}
          onChangeText={(text) => setAddress(text)}
        />
        <TouchableOpacity
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
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    );
  };

  const renderButton = () => {
    const onSave = () => {
      const newAddress: AddressType = {
        type: title,
        address: address,
      };
      dispatch(saveAddress(newAddress));
      navigation.goBack();
    };
    return (
      <components.Button
        title='save address'
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
      {renderMap()}
      {renderContent()}
      {renderButton()}
    </components.SafeAreaView>
  );
};

export default AddANewAddress;
