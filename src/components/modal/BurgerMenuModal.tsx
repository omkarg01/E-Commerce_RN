import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {setScreen} from '../../store/slices/tabSlice';
import {useAppDispatch} from '../../hooks';

import {useAppNavigation} from '../../hooks';

import {theme} from '../../constants';
import {svg} from '../../assets/svg';

import Image from '../custom/Image';
import BurgerMenuItem from './BurgerMenuItem';

type Props = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const BurgerMenuModal: React.FC<Props> = ({
  showModal,
  setShowModal,
}): JSX.Element => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const statusBarHeight = useSafeAreaInsets().top;
  // console.log(statusBarHeight);

  const renderCloseBtn = () => {
    return (
      <TouchableOpacity
        style={{
          alignSelf: 'flex-end',
          marginTop: 10,
          paddingHorizontal: 20,
          marginBottom: 30,
        }}
        onPress={() => setShowModal(false)}
      >
        <svg.CloseMenuSvg />
      </TouchableOpacity>
    );
  };

  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 20,
          borderBottomWidth: 1,
          paddingHorizontal: 20,
          marginBottom: 20,
          borderBottomColor: theme.colors.lightBlue,
        }}
      >
        <Image
          source={{
            uri: 'https://george-fx.github.io/kastelli/users/01.jpg',
          }}
          style={{
            width: responsiveWidth(14),
            aspectRatio: 1,
            marginRight: 14,
          }}
        />
        <View>
          <Text
            style={{
              ...theme.fonts.H5,
              color: theme.colors.mainColor,
              textTransform: 'capitalize',
            }}
            numberOfLines={1}
          >
            Callie Mosley
          </Text>
          <Text
            style={{
              ...theme.fonts.textStyle_14,
              color: theme.colors.textColor,
            }}
            numberOfLines={1}
          >
            calliemosley@mail.com
          </Text>
        </View>
      </View>
    );
  };

  const renderMenu = () => {
    return (
      <View style={{paddingHorizontal: 20}}>
        <BurgerMenuItem
          version={1}
          title='>  Categories'
          containerStyle={{
            marginBottom: 6,
          }}
          onPress={() => {
            dispatch(setScreen('Categories'));
            setShowModal(false);
          }}
        />
        <BurgerMenuItem
          version={1}
          title='>  Sale'
          quantity={135}
          containerStyle={{
            marginBottom: 6,
          }}
          onPress={() => {
            setShowModal(false);
            navigation.navigate('Shop', {title: 'Sale'});
          }}
        />
        <BurgerMenuItem
          version={1}
          title='>  New arrivals'
          quantity={285}
          containerStyle={{
            marginBottom: 6,
          }}
          onPress={() => {
            setShowModal(false);
            navigation.navigate('Shop', {title: 'New arrivals'});
          }}
        />
        <BurgerMenuItem
          version={1}
          title='>  Best sellers'
          quantity={642}
          containerStyle={{
            marginBottom: 6,
          }}
          onPress={() => {
            setShowModal(false);
            navigation.navigate('Shop', {title: 'Best sellers'});
          }}
        />
        <BurgerMenuItem
          version={1}
          title='>  Featured products'
          quantity={168}
          containerStyle={{
            marginBottom: 30,
          }}
          onPress={() => {
            setShowModal(false);
            navigation.navigate('Shop', {title: 'Featured products'});
          }}
        />
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={{paddingLeft: 20}}>
        <BurgerMenuItem
          version={2}
          icon={<svg.BellSvg />}
          title='Notifications'
          quantity={1}
          containerStyle={{marginBottom: 10}}
          onPress={() => {
            setShowModal(false);
            navigation.navigate('Notifications');
          }}
        />
        <BurgerMenuItem
          version={2}
          icon={<svg.HelpCircleSvg />}
          title='Support'
          onPress={() => {
            console.log('Support');
          }}
        />
      </View>
    );
  };

  return (
    <Modal
      isVisible={showModal}
      onBackdropPress={() => setShowModal(false)}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
      style={{margin: 0}}
      animationIn='slideInLeft'
      animationOut='slideOutLeft'
    >
      <ScrollView
        style={{
          width: responsiveWidth(78),
          height: theme.sizes.height,
          backgroundColor: theme.colors.white,
          paddingTop: statusBarHeight,
          paddingBottom: 20,
        }}
        contentContainerStyle={{flexGrow: 1}}
      >
        {renderCloseBtn()}
        {renderHeader()}
        {renderMenu()}
        {renderFooter()}
      </ScrollView>
    </Modal>
  );
};

export default BurgerMenuModal;
