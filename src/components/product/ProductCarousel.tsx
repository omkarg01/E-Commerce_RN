import React, {useState} from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';

import Image from '../custom/Image';
import {bgColor} from '../../utils';
import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import {ProductType} from '../../types';
import SaleBadge from '../badges/SaleBadge';
import InWishlist from '../buttons/InWishlist';
import ProductSize from '../product/ProductSize';

type Props = {
  version: 1 | 2;
  item: ProductType;
  selectedSize: string;
  selectedColor: string;
  setSelectedSize: (size: string) => void;
  setSelectedColor: (color: string) => void;
};

const ProductCarousel: React.FC<Props> = ({
  version,
  item,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
}): JSX.Element | null => {
  const images = item.images;
  const colors = item.colors;
  const sizes = item.sizes;

  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const updateCurrentSlideIndex = (e: any): void => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.sizes.width);
    setCurrentSlideIndex(currentIndex);
  };

  if (version === 1) {
    const renderImages = () => {
      return (
        <ScrollView
          onMomentumScrollEnd={updateCurrentSlideIndex}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          contentContainerStyle={{backgroundColor: '#F5F9FC'}}
          bounces={false}
          alwaysBounceHorizontal={false}
        >
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                source={{uri: image}}
                style={{width: theme.sizes.width, aspectRatio: 0.75}}
                resizeMode='cover'
              />
            );
          })}
        </ScrollView>
      );
    };

    const renderDots = () => {
      return (
        <View
          style={{
            height: 24,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 30,
            flexDirection: 'row',
            alignSelf: 'center',
          }}
        >
          {images.map((image, index, array) => {
            return (
              <View
                key={index}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 10 / 2,
                  backgroundColor:
                    currentSlideIndex === index
                      ? theme.colors.mainColor
                      : theme.colors.white,
                  opacity: currentSlideIndex === index ? 1 : 0.5,
                  borderWidth: 1,
                  borderColor:
                    currentSlideIndex === index
                      ? theme.colors.mainColor
                      : '#DBE9F5',
                  marginHorizontal: 4,
                }}
              />
            );
          })}
        </View>
      );
    };

    const renderInWishList = () => {
      return (
        <View
          style={{
            height: 24,
            width: 24,
            position: 'absolute',
            right: 0,
            bottom: 30,
            marginHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <InWishlist version={2} item={item} />
        </View>
      );
    };

    const renderBadge = () => {
      return (
        <SaleBadge
          item={item}
          version={2}
          containerStyle={{
            margin: 20,
            position: 'absolute',
          }}
        />
      );
    };

    return (
      <View style={{marginBottom: 30}}>
        {renderImages()}
        {renderDots()}
        {renderInWishList()}
        {renderBadge()}
      </View>
    );
  }

  if (version === 2) {
    const renderImages = () => {
      return (
        <ScrollView
          onMomentumScrollEnd={updateCurrentSlideIndex}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          style={{
            position: 'absolute',
            right: 0,
            left: 0,
            top: 0,
            bottom: 0,
          }}
          contentContainerStyle={{backgroundColor: '#F5F9FC'}}
          bounces={false}
          alwaysBounceHorizontal={false}
        >
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                source={{uri: image}}
                style={{
                  width: theme.sizes.width,
                  height: '100%',
                }}
                resizeMode='contain'
              />
            );
          })}
        </ScrollView>
      );
    };

    const renderInWishlist = () => {
      return (
        <InWishlist
          item={item}
          version={2}
          containerStyle={{position: 'absolute', right: 23, top: 23, zIndex: 1}}
        />
      );
    };

    const renderBadge = () => {
      return (
        <SaleBadge
          item={item}
          version={2}
          containerStyle={{
            marginTop: 20,
            marginLeft: 20,
          }}
        />
      );
    };

    const renderDots = () => {
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 31,
            left: 0,
            right: 0,
          }}
        >
          {images.map((_, index) => (
            <View
              key={index}
              style={{
                width: 10,
                height: 10,
                marginHorizontal: 5,
                borderRadius: 50,
                backgroundColor:
                  currentSlideIndex === index
                    ? theme.colors.mainColor
                    : theme.colors.white,
                borderColor:
                  currentSlideIndex === index
                    ? theme.colors.mainColor
                    : theme.colors.lightBlue,
                borderWidth: 1,
              }}
            />
          ))}
        </View>
      );
    };

    const renderColorSelect = () => {
      return (
        <View style={{position: 'absolute', right: 0, bottom: 0, margin: 20}}>
          {colors.map((color, index) => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedColor(color)}
                key={index}
                style={{
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 10,
                  width: 30,
                  height: 30,
                  backgroundColor: bgColor(color),
                }}
              >
                {selectedColor === color && <svg.ColorSelectSvg />}
              </TouchableOpacity>
            );
          })}
        </View>
      );
    };

    const renderSizeSelect = () => {
      return (
        <View style={{position: 'absolute', left: 0, bottom: 0, margin: 20}}>
          {sizes.map((item, index, array) => {
            const lastElement = index === array.length - 1;

            return (
              <ProductSize
                key={index}
                item={item}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                containerStyle={{
                  marginBottom: lastElement ? 0 : 10,
                }}
              />
            );
          })}
        </View>
      );
    };

    return (
      <View style={{width: theme.sizes.width, aspectRatio: 0.91}}>
        {renderImages()}
        {renderInWishlist()}
        {renderBadge()}
        {renderDots()}
        {renderColorSelect()}
        {renderSizeSelect()}
      </View>
    );
  }

  return null;
};

export default ProductCarousel;
