import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {text} from '../text';
import {components} from '../components';
import {useAppNavigation} from '../hooks';

const AddANewAddress: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const [selected, setSelected] = useState(false);

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
          placeholder='Home'
          containerStyle={{
            marginBottom: 22,
          }}
        />
        <components.InputField
          label='new address'
          placeholder='Enter your address'
          containerStyle={{
            marginBottom: 22,
          }}
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
    return (
      <components.Button
        title='save address'
        onPress={() => navigation.goBack()}
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
