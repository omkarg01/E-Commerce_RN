import React from 'react';
import {View, ScrollView} from 'react-native';

import {text} from '../../text';
import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import {useAppSelector} from '../../hooks';
import {components} from '../../components';
import {useAppNavigation} from '../../hooks';

const Order: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();
  const cart = useAppSelector((state) => state.cart.list);
  const delivery = useAppSelector((state) => state.cart.delivery).toFixed(1);
  const subtotal = useAppSelector((state) => state.cart.total).toFixed(1);
  const total = Number(delivery) + Number(subtotal);

  const renderProducts = () => {
    return (
      <View style={{marginLeft: 20}}>
        {cart.map((item, index, array) => {
          const lastElement = index === array.length - 1;
          return (
            <components.OrderItem
              key={index}
              item={item}
              lastElement={lastElement}
            />
          );
        })}
      </View>
    );
  };

  const renderVoucher = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 50,
          marginHorizontal: 20,
        }}
      >
        <components.InputField
          placeholder='Promocode'
          label='Enter the voucher'
          containerStyle={{flex: 1, marginRight: 10}}
        />
        <View style={{width: '30%'}}>
          <components.Button
            title='+ add'
            onPress={() => {
              console.log('add');
            }}
          />
        </View>
      </View>
    );
  };

  const renderTotal = () => {
    return (
      <components.Container
        containerStyle={{
          marginHorizontal: 20,
        }}
      >
        <components.ContainerItem
          title='Subtotal'
          price={`₹${subtotal}`}
          titleStyle={{
            ...theme.fonts.H5,
            color: theme.colors.mainColor,
          }}
          priceStyle={{
            ...theme.fonts.textStyle_14,
            color: theme.colors.mainColor,
          }}
        />
        <components.ContainerItem
          title='Delivery'
          price={`₹${delivery}`}
          containerStyle={{
            marginBottom: 14,
          }}
        />
        <components.ContainerLine />
        <components.ContainerItem
          title='Total'
          price={`₹${total}`}
          containerStyle={{
            marginBottom: 0,
          }}
        />
      </components.Container>
    );
  };

  const renderEmptyCart = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}
      >
        <svg.ShoppingBagSvg />
        <text.H2 style={{marginTop: 30, marginRight: 14}}>
          Your cart is empty!
        </text.H2>
        <text.T16>Looks like you have not made {'\n'} your order yet.</text.T16>
      </ScrollView>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 20,
          // paddingHorizontal: 20,
          // paddingLeft: 20,
          paddingBottom: 20,
        }}
      >
        {renderProducts()}
        {renderVoucher()}
        {renderTotal()}
      </ScrollView>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title={cart.length > 0 ? 'proceed to checkout' : 'shop now'}
        containerStyle={{padding: 20}}
        transparent={true}
        onPress={() => {
          if (cart.length > 0) {
            navigation.navigate('Checkout');
          }
          if (cart.length === 0) {
            navigation.navigate('Shop', {title: 'Shop'});
          }
        }}
      />
    );
  };

  return (
    <components.SmartView>
      {cart.length > 0 ? renderContent() : renderEmptyCart()}
      {renderButton()}
    </components.SmartView>
  );
};

export default Order;
