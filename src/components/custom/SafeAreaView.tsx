import React from 'react';
import {SafeAreaView as SafeAreaViewRN} from 'react-native-safe-area-context';

import {theme} from '../../constants';

type Props = {
  children: React.ReactNode;
  edges?: ['top'] | ['top' | 'bottom'];
};

const SafeAreaView: React.FC<Props> = ({children, edges}): JSX.Element => {
  return (
    <SafeAreaViewRN
      style={{flex: 1, backgroundColor: theme.colors.white}}
      edges={edges}
    >
      {children}
    </SafeAreaViewRN>
  );
};

export default SafeAreaView;
