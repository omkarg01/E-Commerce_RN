import React from 'react';
import {View, Text} from 'react-native';

import Container from './Container';
import {ProductType} from '../../types';
import ContainerLine from './ContainerLine';
import ContainerItem from './ContainerItem';

import {theme} from '../../constants';

type Props = {
  type: string;
  section: any;
};

const ContainerData: React.FC<Props> = ({
  type,
  section,
}): JSX.Element | null => {
  if (type === 'history') {
    return (
      <Container>
        {section.products.map(
          (item: ProductType, index: number, array: object[]) => {
            const lastItem = index === array.length - 1;

            return (
              <ContainerItem
                key={index}
                lastItem={lastItem}
                title={item.name}
                price={`${item.quantity} x $${item.price}`}
              />
            );
          },
        )}
        <ContainerItem title='Discount' price={`- $${section.discount}`} />
        <ContainerItem title='Delivery' price={`$${section.delivery}`} />
        <ContainerLine />
        <ContainerItem
          title='Total'
          price={`$${section.total}`}
          titleStyle={{
            color: theme.colors.mainColor,
          }}
          priceStyle={{
            color: theme.colors.mainColor,
          }}
          containerStyle={{
            marginBottom: 0,
          }}
        />
      </Container>
    );
  }

  if (type === 'order') {
    return (
      <View>
        <Text>index</Text>
      </View>
    );
  }

  if (type === 'checkout') {
    return (
      <View>
        <Text>index</Text>
      </View>
    );
  }

  return null;
};

export default ContainerData;
