import React from 'react';
import {TouchableOpacity} from 'react-native';

import {theme} from '../../constants';
import {useDispatch} from 'react-redux';
import {setScreen} from '../../store/slices/tabSlice';

type Props = {
  tab: {name: string; icon: React.FC<{iconColor: string; bgColor: string}>};
  currentTabScreen: string;
};

const TabBarItem: React.FC<Props> = ({tab, currentTabScreen}): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => dispatch(setScreen(tab.name))}
      style={{width: 57, alignItems: 'center'}}
    >
      <tab.icon
        iconColor={
          tab.name === currentTabScreen
            ? theme.colors.mainColor
            : theme.colors.white
        }
        bgColor={
          tab.name === currentTabScreen
            ? theme.colors.white
            : theme.colors.transparent
        }
      />
    </TouchableOpacity>
  );
};

export default TabBarItem;
