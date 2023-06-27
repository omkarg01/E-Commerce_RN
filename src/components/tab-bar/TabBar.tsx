import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {theme} from '../../constants';

type Props = {children: React.ReactNode};

const TabBar: React.FC<Props> = ({children}): JSX.Element => {
  const insets = useSafeAreaInsets();
  const homeIndicatorHeight = insets.bottom;

  const paddingTabVertical = 20;

  const homeIndicatorSettings = () => {
    if (homeIndicatorHeight !== 0) {
      return homeIndicatorHeight;
    }
    if (homeIndicatorHeight === 0) {
      return paddingTabVertical;
    }
  };

  return (
    <LinearGradient
      colors={['#142535', '#010202']}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderTopColor: '#EEEEEE',
        backgroundColor: theme.colors.mainColor,
        paddingBottom: homeIndicatorSettings(),
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      }}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
    >
      {children}
    </LinearGradient>
  );
};

export default TabBar;
