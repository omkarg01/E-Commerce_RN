import React from 'react';
import {ScrollView} from 'react-native';
import {PRODUCT_VERSION} from '../../utils/settings';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import _v1 from './versions/_v1';
import _v2 from './versions/_v2';

import {components} from '../../components';
import type {RootStackParamList} from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Product'>;

const version = PRODUCT_VERSION;

const Product: React.FC<Props> = ({route}): JSX.Element => {
  const {item} = route.params;

  const renderHeader = () => {
    return <components.Header goBack={true} border={true} basket={true} />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}
        showsVerticalScrollIndicator={false}
      >
        {version === 1 && <_v1 item={item} />}
        {version === 2 && <_v2 item={item} />}
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

export default Product;
