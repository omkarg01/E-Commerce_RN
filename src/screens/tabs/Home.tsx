import React from 'react';
import {ScrollView} from 'react-native';
import {HOME_VERSION} from '../../utils/settings';

import _v1 from './versions/_v1';
import _v2 from './versions/_v2';

const version = HOME_VERSION;

const Home: React.FC = (): JSX.Element => {
  const renderHome_v1 = (): JSX.Element | null => {
    if (version === 1) {
      return <_v1 />;
    }

    return null;
  };

  const renderHome_v2 = (): JSX.Element | null => {
    if (version === 2) {
      return <_v2 />;
    }

    return null;
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      {renderHome_v1()}
      {renderHome_v2()}
    </ScrollView>
  );
};

export default Home;
