import React from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';
import {useAppNavigation} from '../hooks';

const LeaveAReview: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const renderHeader = () => {
    return <components.Header goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 20,
          flexGrow: 1,
          justifyContent: 'center',
        }}
        enableOnAndroid={true}
      >
        <View style={{marginBottom: 30}}>
          <svg.MessageSvg />
        </View>
        <Text
          style={{
            ...theme.fonts.H2,
            color: theme.colors.mainColor,
            textTransform: 'capitalize',
            marginBottom: 14,
          }}
        >
          Please rate the quality of{'\n'}service for the order!
        </Text>
        <components.RatingStars
          containerStyle={{
            marginBottom: 20,
          }}
        />
        <Text
          style={{
            ...theme.fonts.DMSans_400Regular,
            fontSize: 16,
            lineHeight: 16 * 1.7,
            color: theme.colors.textColor,
            marginBottom: 60,
          }}
        >
          Your comments and suggestions help us improve the service quality
          better!
        </Text>
        <components.InputFieldBig
          containerStyle={{
            marginBottom: 20,
          }}
        />
        <components.Button
          title='submit'
          onPress={() => {
            navigation.goBack();
          }}
        />
      </KeyboardAwareScrollView>
    );
  };

  const renderFooter = () => {
    return (
      <components.Button
        containerStyle={{padding: 20}}
        title='submit'
        onPress={() => {
          console.log('submit');
        }}
      />
    );
  };

  return (
    <components.SafeAreaView>
      {renderHeader()}
      {renderContent()}
      {/* {renderFooter()} */}
    </components.SafeAreaView>
  );
};

export default LeaveAReview;
