import React, {useState} from 'react';
import {Alert} from 'react-native';

import {ProductType} from '../../../types';
import {useAppDispatch} from '../../../hooks';
import {quantityInCart} from '../../../utils';
import {components} from '../../../components';
import {addedToCartMessage} from '../../../utils';
import {addToCart, fullRemoveFromCart} from '../../../store/slices/cartSlice';

type Props = {item: ProductType};

const _v2: React.FC<Props> = ({item}): JSX.Element => {
  const dispatch = useAppDispatch();
  const quantity = quantityInCart(item) as number;
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [selectedColor, setSelectedColor] = useState<string>('camel');

  const renderCarousel = () => {
    return (
      <components.ProductCarousel
        version={2}
        item={item}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
    );
  };

  const renderTabs = () => {
    return <components.ProductTab item={item} />;
  };

  const renderNameWithRating = () => {
    return <components.ProductName item={item} version={2} />;
  };

  const renderPriceWithQuantity = () => {
    return <components.ProductPrice item={item} version={2} />;
  };

  const renderButton = () => {
    return (
      <components.Button
        title='+ ADd to cart'
        containerStyle={{margin: 20}}
        onPress={() => {
          if (quantity > 0) {
            Alert.alert(
              'Item already in cart',
              'Do you want to add another one?',
              [
                {
                  text: 'Cancel',
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: () => {
                    dispatch(fullRemoveFromCart(item));
                    dispatch(
                      addToCart({
                        ...item,
                        color: selectedColor,
                        size: selectedSize,
                      }),
                    );
                    addedToCartMessage(item);
                  },
                },
              ],
              {cancelable: false},
            );
            return;
          }
          dispatch(
            addToCart({
              ...item,
              color: selectedColor,
              size: selectedSize,
            }),
          );
          addedToCartMessage(item);
        }}
      />
    );
  };

  return (
    <components.SmartView>
      {renderCarousel()}
      {renderTabs()}
      {renderNameWithRating()}
      {renderPriceWithQuantity()}
      {renderButton()}
    </components.SmartView>
  );
};

export default _v2;
