import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import FlashMessage from 'react-native-flash-message';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {components} from './src/components';
import {persistor, store} from './src/store/store';
import StackNavigator from './src/navigation/StackNavigator';
import {
  createChannel,
  getFCMToken,
  notificationListener,
} from './src/utils/notificationHelper';
import {StripeProvider} from '@stripe/stripe-react-native';

enableScreens();

const App = () => {
  useEffect(() => {
    console.log('Hello');
    getFCMToken();
    notificationListener();
    createChannel();
  }, []);
  return (
    <SafeAreaProvider>
      <components.StatusBar />
      <Provider store={store}>
        <PersistGate loading={<components.Loader />} persistor={persistor}>
          <StripeProvider publishableKey='pk_test_51JCOoESJtAOGSo1GjUJm9x0hW6UbSFo1Rhm1qH8QkXfm6egZZIG6hwzcaA6nwPLiUqK1uzSC0Z6zXbRIIk2L682O00p7Hz4FNn'>
            <NavigationContainer>
              <StackNavigator />
            </NavigationContainer>
          </StripeProvider>
        </PersistGate>
      </Provider>
      <FlashMessage position='top' floating={true} />
    </SafeAreaProvider>
  );
};

export default App;
