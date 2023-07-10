import React from 'react';
import {View} from 'react-native';
import {useAppSelector} from '../hooks';

import {components} from '../components';
import {screens} from '../screens';
import {tabs} from '../constants';

const TabNavigator: React.FC = (): JSX.Element => {
  const currentTabScreen = useAppSelector((state) => state.tab.screen);

  const {Header, SafeAreaView, TabBar, TabBarItem} = components;

  const renderHeader = () => {
    const title = () => {
      if (currentTabScreen === 'Profile') {
        return 'My profile';
      }
      if (currentTabScreen === 'Wishlist') {
        return 'Wishlist';
      }
      if (currentTabScreen === 'Order') {
        return 'Order';
      }
      if (currentTabScreen === 'Home') {
        return 'CANDIBRAIN';
      }
    };

    const border = () => {
      if (currentTabScreen === 'Home') {
        return true;
      }
      if (currentTabScreen === 'Wishlist') {
        return true;
      }
      if (currentTabScreen === 'Order') {
        return true;
      }
      if (currentTabScreen === 'Profile') {
        return true;
      }
      if (currentTabScreen === 'Categories') {
        return true;
      }
    };

    const search = () => {
      if (currentTabScreen === 'Categories') {
        return true;
      }
    };

    return (
      <Header
        burgerMenu={true}
        goBack={false}
        basket={true}
        border={border()}
        title={title()}
        search={search()}
      />
    );
  };

  const renderScreen = () => {
    return (
      <View style={{flex: 1}}>
        {currentTabScreen === 'Home' && <screens.Home />}
        {currentTabScreen === 'Categories' && <screens.Categories />}
        {currentTabScreen === 'Order' && <screens.Order />}
        {currentTabScreen === 'Wishlist' && <screens.Wishlist />}
        {currentTabScreen === 'Profile' && <screens.Profile />}
      </View>
    );
  };

  const renderBottomBar = () => {
    return (
      <TabBar>
        {tabs.map((tab, index) => {
          return (
            <TabBarItem
              tab={tab}
              key={index}
              currentTabScreen={currentTabScreen}
            />
          );
        })}
      </TabBar>
    );
  };

  return (
    <SafeAreaView edges={['top']}>
      {renderHeader()}
      {renderScreen()}
      {renderBottomBar()}
    </SafeAreaView>
  );
};

export default TabNavigator;
