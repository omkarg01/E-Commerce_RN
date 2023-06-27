import {TouchableOpacity} from 'react-native';
import React from 'react';

import {svg} from '../../assets/svg';

type Props = {
  onPress: () => void;
};

const Twitter: React.FC<Props> = ({onPress}): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress}>
      <svg.TwitterSvg />
    </TouchableOpacity>
  );
};

export default Twitter;
