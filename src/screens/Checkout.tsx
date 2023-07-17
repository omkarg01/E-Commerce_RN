import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {text} from '../text';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {payments} from '../constants';
// import {addresses} from '../constants';
import {useAppSelector} from '../hooks';
import {components} from '../components';
import {useAppNavigation} from '../hooks';
import {OrderType} from '../types/OrderType';
import {PaymentResult} from '../types/PaymentResult';
import {
  useCreateOrderMutation,
  usePayOrderMutation,
} from '../store/slices/ordersApiSlice';
import {initPaymentSheet} from '@stripe/stripe-react-native';
// import {StripeTerminalProvider} from '@stripe/stripe-terminal-react-native';
// import {useStripe} from '@stripe/react-stripe-js';
import {useStripe} from '@stripe/stripe-react-native';

const Checkout: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();
  const addresses = useAppSelector((state) => state.cart.address);
  console.log('addresses: ', addresses);

  const [shippingModal, setShippingModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [address, setAddress] = useState(addresses[0].address);
  const [payment, setPayment] = useState(payments[0].type);
  const [addressId, setAddressId] = useState(payments[0].id);

  const cart = useAppSelector((state) => state.cart.list);
  const delivery = useAppSelector((state) => state.cart.delivery).toFixed(0);
  const subtotal = useAppSelector((state) => state.cart.total).toFixed(1);
  const discount = useAppSelector((state) => state.cart.discount).toFixed(1);
  const email = useAppSelector((state) => state.auth.email);

  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [loading, setLoading] = useState(false);

  const [createOrder, {isLoading}] = useCreateOrderMutation();

  const total = (
    Number(subtotal) -
    Number(discount) +
    Number(delivery)
  ).toFixed(2);

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  const fetchTokenProvider = async () => {
    const response = await fetch('http://127.0.0.1:5000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const {secret} = await response.json();
    return secret;
  };

  const fetchPaymentSheetParams = async () => {
    const response = await fetch('http://localhost:5000/payment-sheet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const {paymentIntent, ephemeralKey, customer} = await response.json();

    // console.log(paymentIntent, ephemeralKey, customer);

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const {paymentIntent, ephemeralKey, customer} =
      await fetchPaymentSheetParams();

    const {error} = await initPaymentSheet({
      merchantDisplayName: 'Example, Inc.',
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
      },
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const {error} = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  const submitHandler = async () => {
    // let currentDate = new Date().toISOString();
    let currentDate = 'Feb 25, 2023 at 8:32 PMT12:51:19.758Z';
    let paymentResult: PaymentResult = {
      id: 1,
      status: 'success',
      update_time: currentDate.split('T')[1],
      email,
    };

    // let orderItems: ProductType[] = [];

    let order: OrderType = {
      user: 1,
      date: currentDate.split('T')[0],
      total: total as unknown as number,
      orderItems: cart,
      delivery,
      status: 'Shipping',
      discount: discount as unknown as number,
      shippingAddress: address,
      paymentMethod: payment,
      paymentResult,
      isPaid: true,
      paidAt: currentDate.split('T')[0],
      isDelivered: false,
    };

    const res = await createOrder(order).unwrap();
    console.log('res', res);
    // console.log(order);
    navigation.navigate('OrderSuccessful');
    // navigation.navigate('OrderFailed');
  };

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
          price={`₹${subtotal}`}
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
                price={`${item.quantity} x ₹${item.price}`}
              />
            );
          })}
        </View>

        <components.ContainerItem
          title='Discount'
          price={Number(discount) > 0 ? `- ₹${discount}` : 'No discount'}
        />
        <components.ContainerItem
          title='Delivery'
          price={Number(delivery) > 0 ? `- ₹${delivery}` : 'No delivery charge'}
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
            {address}
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
        onPress={submitHandler}
      />
    );
  };

  const renderPayButton = () => {
    return (
      <components.Button
        title='Checkout'
        containerStyle={{
          margin: 20,
        }}
        onPress={openPaymentSheet}
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
                  setAddressId(item.id || 1);
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
                    {item.type === 'Home' ? (
                      <svg.HomeSvg />
                    ) : item.type === 'Office' ? (
                      <svg.BriefcaseSvg />
                    ) : (
                      <svg.MapPinSvg />
                    )}
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
                  {addressId === item.id && (
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
            Choose payment method:
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
                        : item.type === 'Google Pay' && 120.2,
                    // ? 40.2
                    // : item.type === 'Google Pay' && 40.2,
                    height:
                      item.type === 'Visa'
                        ? 12
                        : item.type === 'Mastercard'
                        ? 16
                        : item.type === 'Google Pay' && 20,
                    // ? 16
                    // : item.type === 'Google Pay' && 16,
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
        {renderPayButton()}
        {/* {renderCheckoutInput()} */}
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
