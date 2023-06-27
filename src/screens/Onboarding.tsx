import {View, ScrollView} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {responsiveHeight} from 'react-native-responsive-dimensions';

import {text} from '../text';
import {components} from '../components';
import {useAppNavigation, useAppSelector} from '../hooks';
import {onboardingData, theme} from '../constants';
import {homeIndicatorHeight, statusBarHeight} from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useEffectOnce} from 'usehooks-ts';

const Onboarding: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const ref = useRef<ScrollView>(null);

  const email = useAppSelector((state) => state.auth.email);
  const password = useAppSelector((state) => state.auth.password);

  useEffect(() => {
    checkValidUser();
  }, []);

  const checkValidUser = async () => {
    // setTimeout(async () => {

    console.log(email, password);
    if (email && password) {
      navigation.navigate('TabNavigator');
    } else {
      navigation.navigate('SignIn');
    }
    // }, 3000);
  };

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.sizes.width);
    setCurrentSlideIndex(currentIndex);
  };

  const renderContent = () => {
    const paddingTop = statusBarHeight() + responsiveHeight(4);

    return (
      <View
        style={{
          position: 'absolute',
          paddingTop: paddingTop,
          paddingHorizontal: 20,
        }}
      >
        {onboardingData.map((item, index) => {
          if (currentSlideIndex === index) {
            return (
              <View key={index}>
                <text.H1 style={{marginBottom: responsiveHeight(2)}}>
                  {item.title}
                </text.H1>
                <text.T16 style={{marginBottom: responsiveHeight(4)}}>
                  {item.description}
                </text.T16>
              </View>
            );
          }
        })}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: 'auto',
          }}
        >
          {onboardingData.map((_, index) => {
            return (
              <View
                key={index}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 5,
                  backgroundColor: theme.colors.mainColor,
                  opacity: currentSlideIndex === index ? 1 : 0.15,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  };

  const renderSlides = () => {
    return (
      <ScrollView
        ref={ref}
        horizontal={true}
        pagingEnabled={true}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        bounces={false}
        showsHorizontalScrollIndicator={false}
      >
        {onboardingData.map((item, index) => {
          return (
            <components.Image
              key={index}
              source={{uri: item.image}}
              style={{
                width: theme.sizes.width,
                height: '100%',
              }}
              resizeMode='cover'
            />
          );
        })}
      </ScrollView>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='Get Started'
        containerStyle={{
          position: 'absolute',
          bottom: 20 + homeIndicatorHeight(),
          left: 20,
          right: 20,
        }}
        onPress={() => navigation.navigate('SignIn')}
      />
    );
  };

  return (
    <components.SmartView>
      {renderSlides()}
      {renderContent()}
      {renderButton()}
    </components.SmartView>
  );
};

export default Onboarding;
