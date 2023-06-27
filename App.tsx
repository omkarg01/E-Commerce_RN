import React from 'react';
import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import FlashMessage from 'react-native-flash-message';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {components} from './src/components';
import {persistor, store} from './src/store/store';
import StackNavigator from './src/navigation/StackNavigator';

enableScreens();

const App = () => {
  return (
    <SafeAreaProvider>
      <components.StatusBar />
      <Provider store={store}>
        <PersistGate loading={<components.Loader />} persistor={persistor}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
      <FlashMessage position='top' floating={true} />
    </SafeAreaProvider>
  );
};

export default App;
