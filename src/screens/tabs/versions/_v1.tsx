import React from 'react';
import {View, ScrollView} from 'react-native';

// import useGetProductsQuery,
// useGetCarouselQuery,
// useGetBannersQuery,
// '../../../store/slices/apiSlice';

import {
  useGetProductsQuery,
  useGetCarouselQuery,
  useGetBannersQuery,
} from '../../../store/slices/productsApiSlice';

import {components} from '../../../components';
import {categories_3} from '../../../constants';
import type {ProductType} from '../../../types';
import {useAppNavigation} from '../../../hooks';
import {BannerType} from '../../../types/BannerType';

const _v1: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const {
    data: productsData,
    error: productsError,
    isLoading: productsLoading,
  } = useGetProductsQuery();

  const {
    data: bannersData,
    error: bannersError,
    isLoading: bannersLoading,
  } = useGetBannersQuery();

  const {
    data: carouselData,
    error: carouselError,
    isLoading: carouselLoading,
  } = useGetCarouselQuery();

  if (productsLoading || bannersLoading || carouselLoading) {
    return <components.Loader />;
  }

  if (productsError || bannersError || carouselError) {
    console.log('error', productsError || bannersError || carouselError);
  }

  const renderCarousel = () => {
    const carousel = carouselData?.carousel;
    // console.log('carousel', carousel);

    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        alwaysBounceHorizontal={false}
        style={{flexGrow: 0}}
      >
        {carousel?.map((item, index, array) => {
          return (
            <components.CarouselItem
              key={index}
              item={item}
              array={array}
              index={index}
            />
          );
        })}
      </ScrollView>
    );
  };

  const renderCategories = () => {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingLeft: 20}}
        style={{flexGrow: 0, marginBottom: 50}}
        decelerationRate={0}
      >
        {categories_3.map((item, index, array) => {
          const lastElement = index === array.length - 1;
          return (
            <components.CategoryItem
              key={index}
              item={item}
              lastElement={lastElement}
              version={3}
            />
          );
        })}
      </ScrollView>
    );
  };

  const renderBestSellers = () => {
    const products = productsData?.products;
    // console.log('products', products);
    const bestSellers = products?.filter(
      (item: ProductType) => item.is_bestseller,
    );
    const slice = bestSellers?.slice(0, 5);

    return (
      <View style={{marginBottom: 50}}>
        <components.BlockHeading
          title='Best Sellers'
          containerStyle={{paddingHorizontal: 20}}
          onPress={() => {
            navigation.navigate('Shop', {
              products: bestSellers,
              title: 'Best Sellers',
            });
          }}
        />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20}}
          decelerationRate={0}
        >
          {slice?.map(
            (item: ProductType, index: number, array: ProductType[]) => {
              console.log('productsData', productsData);
              const lastItem = index === array.length - 1;
              return (
                <components.ProductCard
                  key={index}
                  item={item}
                  version={1}
                  lastItem={lastItem}
                />
              );
            },
          )}
        </ScrollView>
      </View>
    );
  };

  const renderBanner = () => {
    const banner = bannersData?.banners[0];

    return <components.BannerItem version={1} banner={banner as BannerType} />;
  };

  const renderFeatured = () => {
    const products = productsData?.products;

    const featured = products?.filter((item: ProductType) => item.is_featured);
    const viewAllNav = {products: featured, title: 'Featured'};
    const slice = featured?.slice(0, 5);

    return (
      <View style={{marginBottom: 50}}>
        <components.BlockHeading
          title='Featured'
          containerStyle={{paddingHorizontal: 20}}
          onPress={() => navigation.navigate('Shop', viewAllNav)}
        />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20}}
          decelerationRate={0}
        >
          {slice?.map(
            (item: ProductType, index: number, array: ProductType[]) => {
              const lastItem = index === array.length - 1;
              return (
                <components.ProductCard
                  key={index}
                  item={item}
                  version={2}
                  lastItem={lastItem}
                />
              );
            },
          )}
        </ScrollView>
      </View>
    );
  };

  return (
    <components.SmartView>
      {renderCarousel()}
      {renderCategories()}
      {renderBestSellers()}
      {renderBanner()}
      {renderFeatured()}
    </components.SmartView>
  );
};

export default _v1;
