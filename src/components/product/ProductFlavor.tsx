// import {Text} from 'react-native';
// import React from 'react';

// import {ProductType} from '../../types';

// import {theme} from '../../constants';

// const ProductFlavor: React.FC = ({item}) => {
//   if (item.flavor || item.name === 'Robusta coffee beans') {
//     return (
//       <Text
//         style={{
//           ...theme.fonts.DMSans_400Regular,
//           fontSize: 12,
//           lineHeight: 12 * 1.5,
//           color: theme.colors.textColor,
//         }}
//         numberOfLines={1}
//       >
//         Flavor: {item.flavor}{' '}
//         {item.name === 'Robusta coffee beans' && 'Vanilla'}
//       </Text>
//     );
//   }
// };

// export default ProductFlavor;

import {View, Text} from 'react-native';
import React from 'react';

import {ProductType} from '../../types';

import {theme} from '../../constants';

type Props = {
  item: ProductType;
};

const ProductFlavor: React.FC<Props> = ({item}): JSX.Element | null => {
  return (
    <Text
      style={{
        ...theme.fonts.DMSans_400Regular,
        fontSize: 12,
        lineHeight: 12 * 1.5,
        color: theme.colors.textColor,
      }}
      numberOfLines={1}
    >
      Flavor
    </Text>
  );
};

export default ProductFlavor;
