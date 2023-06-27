import {View, TouchableOpacity} from 'react-native';
import React from 'react';

import {svg} from '../assets/svg';
import {text} from '../text';

type Props = {
  title: string;
  onPress: () => void;
  containerStyle?: object;
};

const BlockHeading: React.FC<Props> = ({title, onPress, containerStyle}) => {
  const {H3} = text;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 14,
        ...containerStyle,
      }}
    >
      <H3>{title}</H3>
      <TouchableOpacity
        onPress={onPress}
        style={{flexDirection: 'row', alignItems: 'center'}}
      >
        <svg.ViewAllSvg />
      </TouchableOpacity>
    </View>
  );
};

export default BlockHeading;
