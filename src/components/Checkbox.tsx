import {View} from 'react-native';
import React from 'react';

import {svg} from '../assets/svg';
import {theme} from '../constants';

type Props = {
  active: boolean;
  containerStyle?: object;
};

const Checkbox: React.FC<Props> = ({active, containerStyle}) => {
  return (
    <View
      style={{
        width: 18,
        height: 18,
        backgroundColor: '#F8FBFD',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: theme.colors.lightBlue,
        justifyContent: 'center',
        alignItems: 'center',
        ...containerStyle,
      }}
    >
      {active && (
        <View style={{marginLeft: 1}}>
          <svg.ActiveCheckSvg />
        </View>
      )}
    </View>
  );
};

export default Checkbox;
