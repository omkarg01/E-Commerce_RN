import React from 'react';
import {ScrollView} from 'react-native';
import {ORDER_HISTORY_VERSION} from '../../utils/settings';

import _v1 from './versions/_v1';
import _v2 from './versions/_v2';

import {components} from '../../components';

const version = ORDER_HISTORY_VERSION;

const OrderHistory: React.FC = (): JSX.Element => {
  const renderHeader: () => JSX.Element = () => {
    return <components.Header goBack={true} title='Order history' />;
  };

  const renderContent: () => JSX.Element = () => {
    return (
      <ScrollView>
        {version === 1 && <_v1 />}
        {version === 2 && <_v2 />}
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

export default OrderHistory;
