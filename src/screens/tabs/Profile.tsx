import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, TouchableOpacity, ScrollView} from 'react-native';

import {text} from '../../text';
import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import {components} from '../../components';
import {useAppDispatch, useAppNavigation} from '../../hooks';
import {logout} from '../../store/slices/authSlice';

const Profile: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();
  const [signOutModal, setSignOutModal] = useState(false);

  const dispatch = useAppDispatch();

  const renderUser = () => {
    const userLink: string =
      'https://george-fx.github.io/kastelli/users/01.jpg';

    return (
      <TouchableOpacity
        style={{
          paddingHorizontal: 20,
          paddingBottom: 30,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('EditProfile')}
      >
        <components.Image
          source={{uri: userLink}}
          style={{
            marginRight: 14,
            width: 60,
            height: 60,
          }}
          imageStyle={{borderRadius: 30}}
        />
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <text.H5 style={{marginRight: 'auto', marginBottom: 4}}>
              Callie Mosley
            </text.H5>
            <svg.EditSvg />
          </View>
          <text.T14>calliemosley@mail.com</text.T14>
        </View>
      </TouchableOpacity>
    );
  };

  const renderMenu = () => {
    return (
      <View style={{paddingLeft: 20}}>
        <components.ProfileItem
          icon={<svg.ServerSvg />}
          title='My orders'
          onPress={() => {
            navigation.navigate('OrderHistory');
          }}
        />
        <components.ProfileItem
          icon={<svg.CreditCardSvg />}
          title='Payment method'
          onPress={() => navigation.navigate('PaymentMethod')}
        />
        <components.ProfileItem
          icon={<svg.MapPinSvg />}
          title='Delivery address'
          onPress={() => {
            navigation.navigate('MyAddress');
          }}
        />
        <components.ProfileItem
          icon={<svg.GiftSvg />}
          title='Promocodes & gift cards'
          onPress={() => navigation.navigate('MyPromocodes')}
        />
        <components.ProfileItem
          icon={<svg.LogOutSvg />}
          title='Sign out'
          onPress={() => setSignOutModal(true)}
        />
      </View>
    );
  };

  const renderSignOutModal = () => {
    return (
      <Modal
        isVisible={signOutModal}
        onBackdropPress={() => setSignOutModal(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{margin: 0}}
        animationIn='zoomIn'
        animationOut='zoomOut'
      >
        <View
          style={{
            backgroundColor: theme.colors.white,
            borderRadius: 5,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              borderBottomWidth: 1,
              padding: 20,
              paddingBottom: 30,
            }}
          >
            <View style={{marginBottom: 14}}>
              <svg.LogOutBigSvg />
            </View>
            <text.H4 style={{marginBottom: 30}}>
              Are you sure you want to {'\n'}sign out ?
            </text.H4>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <components.Button
                title='cancel'
                containerStyle={{width: '47%'}}
                onPress={() => setSignOutModal(false)}
              />
              <components.Button
                title='Sure'
                containerStyle={{width: '47%'}}
                transparent={true}
                onPress={() => {
                  dispatch(logout());
                  setSignOutModal(false);
                  navigation.navigate('SignIn');
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingTop: 55,
        paddingBottom: 20,
      }}
    >
      {renderUser()}
      {renderMenu()}
      {renderSignOutModal()}
    </ScrollView>
  );
};

export default Profile;
