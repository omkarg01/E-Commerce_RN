import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';

import {text} from '../../../text';
import {svg} from '../../../assets/svg';
import {theme} from '../../../constants';
import {ProductType} from '../../../types';
import {components} from '../../../components';
import {quantityInCart, addedToCartMessage} from '../../../utils';
import {fullRemoveFromCart, addToCart} from '../../../store/slices/cartSlice';
import {useAppNavigation, useAppDispatch} from '../../../hooks';

type Props = {item: ProductType};

const _v1: React.FC<Props> = ({item}): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const quantity = quantityInCart(item) as number;

  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [selectedColor, setSelectedColor] = useState<string>('camel');

  const renderCarousel = () => {
    return (
      <components.ProductCarousel
        item={item}
        version={1}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
    );
  };

  const renderNameWithRating = () => {
    return <components.ProductName item={item} version={2} />;
  };

  const renderPriceWithQuantity = () => {
    return <components.ProductPrice item={item} version={2} />;
  };

  const renderSize = () => {
    return (
      <View
        style={{
          marginRight: 20,
          marginBottom: 30,
          marginLeft: 20,
        }}
      >
        <text.H5 style={{marginBottom: 20}}>Size</text.H5>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {item.sizes.map((item, index, array) => {
            const lastElement = index === array.length - 1;
            const marginRight = lastElement ? 0 : 10;
            return (
              <components.ProductSize
                key={index}
                item={item}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                containerStyle={{marginRight: marginRight}}
              />
            );
          })}
        </View>
      </View>
    );
  };

  const renderColor = () => {
    return (
      <View
        style={{
          marginHorizontal: 20,
          marginBottom: 30,
        }}
      >
        <text.H5 style={{marginBottom: 20}}>Color</text.H5>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {item.colors.map((item, index, array) => {
            const lastElement = index === array.length - 1;
            const marginRight = lastElement ? 0 : 14;
            return (
              <components.ProductColor
                key={index}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                item={item}
                containerStyle={{marginRight: marginRight}}
              />
            );
          })}
        </View>
      </View>
    );
  };

  const renderDescription = () => {
    const renderDescriptionHeader = () => {
      return (
        <Text
          style={{
            ...theme.fonts.H5,
            color: theme.colors.mainColor,
            marginBottom: 20,
          }}
        >
          Description
        </Text>
      );
    };

    const renderDescriptionText = () => {
      return (
        <View>
          <Text
            style={{
              ...theme.fonts.textStyle_16,
              color: theme.colors.textColor,
              marginBottom: 14,
            }}
            numberOfLines={5}
          >
            {item.description}
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() =>
              navigation.navigate('Description', {
                description: item.description,
              })
            }
          >
            <Text
              style={{
                marginRight: 6,
                ...theme.fonts.textStyle_16,
                color: theme.colors.mainColor,
                textTransform: 'lowercase',
              }}
            >
              read more
            </Text>
            <svg.RightArrowSvg />
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: 50,
        }}
      >
        {renderDescriptionHeader()}
        {renderDescriptionText()}
      </View>
    );
  };

  const renderReviews = () => {
    const reviews = item.reviews;
    const slice = item.reviews.slice(0, 3);
    const quantity = item.reviews.length;

    const renderReviewsHeader = () => {
      return (
        <components.BlockHeading
          title={`Reviews (${quantity})`}
          onPress={() => navigation.navigate('Reviews', {reviews})}
          containerStyle={{paddingHorizontal: 20}}
        />
      );
    };

    const renderReviewsList = () => {
      return (
        <View style={{paddingLeft: 20}}>
          {slice.map((item, index, array) => {
            return (
              <components.ReviewItem
                key={index}
                item={item}
                array={array}
                index={index}
              />
            );
          })}
        </View>
      );
    };

    return (
      <View>
        {renderReviewsHeader()}
        {renderReviewsList()}
      </View>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='+ ADd to cart'
        containerStyle={{
          paddingHorizontal: 20,
          marginTop: 20,
        }}
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
        // onPress={() => {
        //   dispatch(addToCart(item));
        //   showMessage({
        //     message: `${item.name} added to cart`,
        //     type: 'success',
        //     icon: 'success',
        //   });
        // }}
      />
    );
  };

  return (
    <components.SmartView>
      {renderCarousel()}
      {renderNameWithRating()}
      {renderPriceWithQuantity()}
      {renderSize()}
      {renderColor()}
      {renderDescription()}
      {renderReviews()}
      {renderButton()}
    </components.SmartView>
  );
};

export default _v1;
