import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {text} from '../text';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {payments} from '../constants';
import {addresses} from '../constants';
import {useAppSelector} from '../hooks';
import {components} from '../components';
import {useAppNavigation} from '../hooks';

const Checkout: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const [shippingModal, setShippingModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [address, setAddress] = useState(addresses[0].address);
  const [payment, setPayment] = useState(payments[0].type);

  const cart = useAppSelector((state) => state.cart.list);
  const delivery = useAppSelector((state) => state.cart.delivery).toFixed(0);
  const subtotal = useAppSelector((state) => state.cart.total).toFixed(1);
  const discount = useAppSelector((state) => state.cart.discount).toFixed(1);
  const total = (
    Number(subtotal) -
    Number(discount) +
    Number(delivery)
  ).toFixed(2);

  const renderHeader = () => {
    return <components.Header title='Checkout' goBack={true} />;
  };

  const renderOrderSummary = () => {
    return (
      <components.Container
        containerStyle={{
          marginHorizontal: 20,
        }}
      >
        <components.ContainerItem
          title='My order'
          price={`$${subtotal}`}
          titleStyle={{
            ...theme.fonts.H4,
            color: theme.colors.mainColor,
            textTransform: 'capitalize',
          }}
          priceStyle={{
            ...theme.fonts.H4,
            color: theme.colors.mainColor,
          }}
          containerStyle={{
            marginBottom: 10,
          }}
        />
        <components.Line
          containerStyle={{
            marginVertical: 20,
          }}
        />
        <View>
          {cart.map((item, index, array) => {
            const lastElement = index === array.length - 1;
            return (
              <components.ContainerItem
                key={index}
                title={item.name}
                price={`${item.quantity} x $${item.price}`}
              />
            );
          })}
        </View>

        <components.ContainerItem
          title='Discount'
          price={Number(discount) > 0 ? `- $${discount}` : 'No discount'}
        />
        <components.ContainerItem
          title='Delivery'
          price={`$${delivery}`}
          containerStyle={{
            marginBottom: 0,
          }}
        />
      </components.Container>
    );
  };

  const renderDetails = () => {
    return (
      <View style={{paddingLeft: 20, marginBottom: 14}}>
        {/* <components.CheckoutDetails
          title='Shipping details'
          subtitle='8000 S Kirkland Ave, Chicago, IL 6065...'
          containerStyle={{marginBottom: 14}}
          icon={<svg.MapPinSvg />}
        /> */}
        {/* <components.CheckoutDetails
          title='Payment method'
          subtitle='**** 4864'
          containerStyle={{marginBottom: 24}}
          icon={<svg.CreditCardSvg />}
        /> */}
      </View>
    );
  };

  const renderShippingDetails = () => {
    return (
      <TouchableOpacity
        style={{
          marginLeft: 20,
          marginBottom: 14,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderColor: theme.colors.lightBlue,
          borderRadius: 5,
          padding: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => {
          setShippingModal(true);
        }}
      >
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <svg.ShippingMapSvg />
            <text.H5
              style={{
                marginLeft: 10,
                color: theme.colors.mainColor,
              }}
            >
              Shipping details
            </text.H5>
          </View>
          <Text
            style={{
              ...theme.fonts.DMSans_400Regular,
              fontSize: 12,
              color: theme.colors.textColor,
            }}
          >
            8000 S Kirkland Ave, Chicago, IL 6065...
          </Text>
        </View>
        <svg.SmallArrowSvg />
      </TouchableOpacity>
    );
  };

  const renderPaymentMethod = () => {
    return (
      <TouchableOpacity
        style={{
          marginLeft: 20,
          marginBottom: 28,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderColor: theme.colors.lightBlue,
          borderRadius: 5,
          padding: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => {
          setPaymentModal(true);
        }}
      >
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <svg.CreditCardSvg />
            <text.H5
              style={{
                marginLeft: 10,
                color: theme.colors.mainColor,
              }}
            >
              Payment method
            </text.H5>
          </View>
          <Text
            style={{
              ...theme.fonts.DMSans_400Regular,
              fontSize: 12,
              color: theme.colors.textColor,
            }}
          >
            **** 4864
          </Text>
        </View>
        <svg.SmallArrowSvg />
      </TouchableOpacity>
    );
  };

  const renderCheckoutInput = () => {
    return (
      <View
        style={{
          marginHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <components.InputFieldBig />
      </View>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='Confirm order'
        containerStyle={{
          margin: 20,
        }}
        onPress={() => {
          navigation.navigate('OrderSuccessful');
          // navigation.navigate('OrderFailed');
        }}
      />
    );
  };

  const renderShippingModal = () => {
    return (
      <Modal
        isVisible={shippingModal}
        onBackdropPress={() => setShippingModal(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{margin: 0}}
        animationIn='zoomIn'
        animationOut='zoomOut'
      >
        <View
          style={{
            backgroundColor: theme.colors.white,
            marginHorizontal: 40,
            paddingTop: 20,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              ...theme.fonts.H4,
              color: theme.colors.mainColor,
              textTransform: 'capitalize',
              marginBottom: 15,
              marginHorizontal: 20,
            }}
          >
            Choose delivery address:
          </Text>
          {addresses.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: 20,
                  borderTopWidth: 1,
                  borderTopColor: theme.colors.lightBlue,
                  paddingHorizontal: 20,
                }}
                onPress={() => {
                  setAddress(item.address);
                  setShippingModal(false);
                }}
              >
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 10,
                    }}
                  >
                    <item.icon />
                    <Text
                      style={{
                        ...theme.fonts.H5,
                        color: theme.colors.mainColor,
                        marginLeft: 10,
                      }}
                      numberOfLines={1}
                    >
                      {item.type}
                    </Text>
                  </View>
                  <Text
                    style={{
                      ...theme.fonts.DMSans_400Regular,
                      fontSize: 12,
                      color: theme.colors.textColor,
                    }}
                    numberOfLines={1}
                  >
                    {item.address}
                  </Text>
                </View>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: theme.colors.textColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {address === item.address && (
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: theme.colors.mainColor,
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </Modal>
    );
  };

  const renderPaymentModal = () => {
    return (
      <Modal
        isVisible={paymentModal}
        onBackdropPress={() => setPaymentModal(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{margin: 0}}
        animationIn='zoomIn'
        animationOut='zoomOut'
      >
        <View
          style={{
            backgroundColor: theme.colors.white,
            marginHorizontal: 40,
            paddingTop: 20,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              ...theme.fonts.H4,
              color: theme.colors.mainColor,
              textTransform: 'capitalize',
              marginBottom: 15,
              marginHorizontal: 20,
            }}
          >
            Choose delivery address:
          </Text>
          {payments.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: 25,
                  borderTopWidth: 1,
                  borderTopColor: theme.colors.lightBlue,
                  paddingHorizontal: 20,
                }}
                onPress={() => {
                  setPayment(item.type);
                  setPaymentModal(false);
                }}
              >
                <components.Image
                  source={{uri: item.icon}}
                  style={{
                    width:
                      item.type === 'Visa'
                        ? 40.43
                        : item.type === 'Mastercard'
                        ? 26.59
                        : item.type === 'Apple Pay' && 40.2,
                    height:
                      item.type === 'Visa'
                        ? 12
                        : item.type === 'Mastercard'
                        ? 16
                        : item.type === 'Apple Pay' && 16,
                  }}
                />
                <text.T14
                  style={{
                    marginRight: 'auto',
                    marginLeft: 20,
                  }}
                >
                  {item?.number}
                </text.T14>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: theme.colors.textColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {payment === item.type && (
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: theme.colors.mainColor,
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </Modal>
    );
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingTop: 25,
          flexGrow: 1,
        }}
        enableOnAndroid={true}
      >
        {renderOrderSummary()}
        {renderDetails()}
        {renderShippingDetails()}
        {renderPaymentMethod()}
        {renderCheckoutInput()}
      </KeyboardAwareScrollView>
    );
  };

  return (
    <components.SafeAreaView>
      {renderHeader()}
      {renderContent()}
      {renderButton()}
      {renderShippingModal()}
      {renderPaymentModal()}
    </components.SafeAreaView>
  );
};

export default Checkout;
