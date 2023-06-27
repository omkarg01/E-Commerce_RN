import {StatusBar as StatusBarRN} from 'react-native';
import React from 'react';

const StatusBar = () => {
  return (
    <StatusBarRN
      barStyle='dark-content'
      translucent={true}
      backgroundColor='transparent'
    />
  );
};

export default StatusBar;
