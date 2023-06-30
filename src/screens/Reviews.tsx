import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import {components} from '../components';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../types';
import {useAppNavigation} from '../hooks';

type Props = NativeStackScreenProps<RootStackParamList, 'Reviews'>;

const Reviews: React.FC<Props> = ({route}): JSX.Element => {
  const {reviews} = route.params;

  const navigation = useAppNavigation();

  const renderHeader = () => {
    return <components.Header goBack={true} title='Reviews' />;
  };

  const renderButton = () => {
    return (
      <components.Button
        title='Add Review'
        containerStyle={{
          paddingHorizontal: 20,
          marginTop: 20,
        }}
        onPress={() => navigation.navigate('LeaveAReview')}
      />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingLeft: 20,
          paddingTop: 25,
          paddingBottom: 20,
        }}
      >
        {reviews.map((item, index, array) => {
          return (
            <components.ReviewItem
              item={item}
              key={index}
              array={array}
              index={index}
            />
          );
        })}
      </ScrollView>
    );
  };

  return (
    <components.SafeAreaView>
      {renderHeader()}
      {renderButton()}
      {renderContent()}
    </components.SafeAreaView>
  );
};

export default Reviews;
