import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Alert, TextInput} from 'react-native';

import GoBack from './GoBack';
import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import {setScreen} from '../../store/slices/tabSlice';
import BurgerMenuModal from '../modal/BurgerMenuModal';
import {useAppSelector, useAppDispatch, useAppNavigation} from '../../hooks';

type Props = {
  title?: string;
  goBack?: boolean;
  basket?: boolean;
  border?: boolean;
  search?: boolean;
  burgerMenu?: boolean;
};

const Header: React.FC<Props> = ({
  title,
  goBack,
  basket,
  burgerMenu,
  border,
  search,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const route = useRoute();

  const [showModal, setShowModal] = useState(false);

  const cart = useAppSelector((state) => state.cart.list);
  const total = useAppSelector((state) => state.cart.total).toFixed(2);

  const basketOnPress = () => {
    if (cart.length > 0) {
      dispatch(setScreen('Order'));
      route.name === 'Shop' && navigation.navigate('TabNavigator');
      route.name === 'Product' && navigation.navigate('TabNavigator');
    }
    if (cart.length === 0) {
      Alert.alert('Your cart is empty', 'Please add some items to your cart', [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ]);
    }
  };

  const containerStyle: object = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    borderBottomWidth: border ? 1 : 0,
    borderBottomColor: '#DBE9F5',
  };

  const renderGoBack = () => {
    if (goBack) {
      return (
        <View style={{position: 'absolute', left: 0}}>
          <GoBack onPress={() => navigation.goBack()} />
        </View>
      );
    }
  };

  const renderTitle = () => {
    if (title) {
      return (
        <Text
          style={{
            ...theme.fonts.DMSans_400Regular,
            fontSize: 16,
            color: theme.colors.mainColor,
          }}
          numberOfLines={1}
        >
          {title}
        </Text>
      );
    }
  };

  const renderBasket = () => {
    if (basket) {
      return (
        <TouchableOpacity
          onPress={basketOnPress}
          style={{
            right: 0,
            position: 'absolute',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              height: 22,
              borderRadius: 11,
              paddingHorizontal: 7,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.colors.mainColor,
            }}
          >
            <Text
              style={{
                color: theme.colors.white,
                ...theme.fonts.DMSans_700Bold,
                fontSize: 10,
              }}
            >
              {cart.length > 0 ? `$${total}` : '$0'}
            </Text>
          </View>
          <svg.HeaderBasketSvg />
        </TouchableOpacity>
      );
    }
  };

  const renderBurgerMenu = () => {
    if (burgerMenu) {
      return (
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 0,
            height: 42,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => setShowModal(true)}
        >
          <svg.BurgerMenuSvg />
        </TouchableOpacity>
      );
    }
  };

  const renderSearch = () => {
    if (search) {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: theme.sizes.width - 190,
            marginRight: 60,
          }}
        >
          <View style={{marginRight: 7}}>
            <svg.SearchSvg />
          </View>
          <TextInput placeholder='Search' style={{flex: 1}} />
        </View>
      );
    }
  };

  const renderBurgerContacts = () => {
    return (
      <BurgerMenuModal showModal={showModal} setShowModal={setShowModal} />
    );
  };

  return (
    <View style={{...containerStyle}}>
      {renderGoBack()}
      {renderTitle()}
      {renderBasket()}
      {renderBurgerMenu()}
      {renderSearch()}
      {renderBurgerContacts()}
    </View>
  );
};

export default Header;
