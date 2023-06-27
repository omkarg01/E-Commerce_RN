import React from 'react';
import {ScrollView} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {text} from '../text';
import {theme} from '../constants';

import {components} from '../components';
import type {RootStackParamList} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Description'>;

const Description: React.FC<Props> = ({route}): JSX.Element => {
  const {description} = route.params;

  const renderHeader = () => {
    return <components.Header goBack={true} title='Description' />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingTop: 55,
          paddingBottom: 20,
        }}
      >
        <text.H3 style={{color: theme.colors.mainColor, marginBottom: 14}}>
          Spring leather coat
        </text.H3>
        <text.T16>{description}</text.T16>
      </ScrollView>
    );
  };

  return (
    <components.SafeAreaView>
      {renderHeader()}
      {renderContent()}
    </components.SafeAreaView>
  );
};

export default Description;
