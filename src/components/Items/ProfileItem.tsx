import {TouchableOpacity} from 'react-native';
import React from 'react';

import {text} from '../../text';
import {svg} from '../../assets/svg';
import {theme} from '../../constants';

type Props = {
  title: string;
  onPress: () => void;
  icon: JSX.Element;
};

const ProfileItem: React.FC<Props> = ({title, onPress, icon}): JSX.Element => {
  const marginBottom = title === 'Sign out' ? 0 : 10;

  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: theme.colors.lightBlue,
        borderRightWidth: 0,
        padding: 20,
        marginBottom: marginBottom,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
      }}
      onPress={onPress}
    >
      {icon}
      <text.T16
        style={{
          marginRight: 'auto',
          color: theme.colors.mainColor,
          marginLeft: 10,
        }}
        numberOfLines={1}
      >
        {title}
      </text.T16>
      {title !== 'Sign out' && <svg.RightArrowSvg />}
    </TouchableOpacity>
  );
};

export default ProfileItem;
