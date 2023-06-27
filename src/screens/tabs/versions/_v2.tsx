import React from 'react';
import {View, ScrollView, Text} from 'react-native';

import {
  useGetProductsQuery,
  useGetBannersQuery,
} from '../../../store/slices/apiSlice';
import {useAppDispatch} from '../../../hooks';
import {components} from '../../../components';
import {categories_3} from '../../../constants';
import {useAppNavigation} from '../../../hooks';
import {BannerType, ProductType} from '../../../types';
import {setScreen} from '../../../store/slices/tabSlice';

const _v2 = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

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

  if (productsLoading || bannersLoading) {
    return <components.Loader />;
  }

  if (productsError || bannersError) {
    console.log('error', productsError || bannersError);
  }

  const renderBanner = () => {
    const banner = bannersData?.banners[1];

    return <components.BannerItem version={2} banner={banner as BannerType} />;
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

  const renderTopCategories = () => {
    return (
      <View
        style={{
          marginHorizontal: 20,
          marginBottom: 50,
        }}
      >
        <components.BlockHeading
          title='Top categories'
          onPress={() => {
            dispatch(setScreen('Categories'));
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {categories_3.map((item, index) => {
            return (
              <components.CategoryItem key={index} item={item} version={4} />
            );
          })}
        </View>
      </View>
    );
  };

  const renderBestSellers = () => {
    const products = productsData?.products;

    const bestSellers = products?.filter(
      (item: ProductType) => item.is_bestseller,
    );

    const slice = bestSellers?.slice(0, 5);

    return (
      <View
        style={{
          marginBottom: 50,
          marginLeft: 20,
        }}
      >
        <components.BlockHeading
          title='Best Sellers'
          containerStyle={{
            paddingRight: 20,
          }}
          onPress={() => {
            navigation.navigate('Shop', {
              products: bestSellers,
              title: 'Best Sellers',
            });
          }}
        />
        {slice?.map(
          (item: ProductType, index: number, array: ProductType[]) => {
            const lastItem = index === array.length - 1;
            return (
              <components.ProductCard
                key={index}
                item={item}
                version={3}
                lastItem={lastItem}
              />
            );
          },
        )}
      </View>
    );
  };

  return (
    <components.SmartView>
      {renderBanner()}
      {renderFeatured()}
      {renderTopCategories()}
      {renderBestSellers()}
    </components.SmartView>
  );
};

export default _v2;
